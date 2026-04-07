import React, { useState, useEffect } from 'react';
import { TUTORS, SUBJECTS, SESSIONS, REVIEWS } from './mockData';

const App = () => {
  const [currentPage, setCurrentPage] = useState('listing'); // listing, profile, book, dashboard, review
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [sessions, setSessions] = useState(SESSIONS);
  const [reviews, setReviews] = useState(REVIEWS);
  const [searchQuery, setSearchQuery] = useState('');

  // Simulation: Filter tutors by JSONB-like properties
  const filteredTutors = TUTORS.filter(tutor => 
    tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tutor.profile.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tutor.subjects.some(sid => 
      SUBJECTS.find(s => s.id === sid).name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const navigateToProfile = (tutor) => {
    setSelectedTutor(tutor);
    setCurrentPage('profile');
  };

  const navigateToBooking = (tutor) => {
    setSelectedTutor(tutor);
    setCurrentPage('book');
  };

  const handleBooking = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newSession = {
      id: `s-${sessions.length + 1}`,
      tutor_id: selectedTutor.id,
      student_id: 'st-1',
      subject_id: formData.get('subject'),
      time_range: `${formData.get('date')} ${formData.get('time')}`,
      status: 'pending'
    };
    
    // Check for conflict (Simulating EXCLUDE constraint)
    const hasConflict = sessions.some(s => 
      s.tutor_id === newSession.tutor_id && s.time_range === newSession.time_range
    );

    if (hasConflict) {
      alert('Tutor already booked for this time range! (Exclusion Constraint Triggered)');
      return;
    }

    setSessions([...sessions, newSession]);
    setCurrentPage('dashboard');
  };

  const handleReview = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newReview = {
      id: `r-${reviews.length + 1}`,
      session_id: formData.get('session_id'),
      rating: parseInt(formData.get('rating')),
      comment: formData.get('comment')
    };
    setReviews([...reviews, newReview]);
    setCurrentPage('dashboard');
  };

  const renderNavbar = () => (
    <nav>
      <h1>Tutorix</h1>
      <div className="nav-links">
        <a className={currentPage === 'listing' ? 'active' : ''} onClick={() => setCurrentPage('listing')}>Browse Tutors</a>
        <a className={currentPage === 'dashboard' ? 'active' : ''} onClick={() => setCurrentPage('dashboard')}>My Dashboard</a>
      </div>
    </nav>
  );

  const renderListing = () => (
    <div className="animate-fade">
      <div style={{ marginBottom: '2rem' }}>
        <input 
          type="text" 
          placeholder="Search subjects, skills, or tutor names..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: '100%', maxWidth: '600px' }}
        />
      </div>
      <div className="tutor-grid">
        {filteredTutors.map(tutor => (
          <div key={tutor.id} className="card" onClick={() => navigateToProfile(tutor)}>
            <h3>{tutor.name}</h3>
            <div className="rating">★ {tutor.rating}</div>
            <div className="tags">
              {tutor.subjects.map(sid => (
                <span key={sid} className="tag">{SUBJECTS.find(s => s.id === sid).name}</span>
              ))}
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              {tutor.profile.bio.substring(0, 100)}...
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="price">${tutor.hourly_rate}/hr</span>
              <button className="btn" style={{ width: 'auto', padding: '0.5rem 1rem' }} onClick={(e) => { e.stopPropagation(); navigateToBooking(tutor); }}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="animate-fade">
      <button className="btn" style={{ width: 'auto', background: 'transparent', marginBottom: '2rem' }} onClick={() => setCurrentPage('listing')}>← Back to Listing</button>
      <div className="profile-hero card" style={{ cursor: 'default' }}>
        <div className="profile-info">
          <h2>{selectedTutor.name}</h2>
          <div className="rating" style={{ fontSize: '1.5rem' }}>★ {selectedTutor.rating}</div>
          <p style={{ marginBottom: '1.5rem' }}>{selectedTutor.profile.bio}</p>
          
          <h4>Qualifications</h4>
          <ul style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            {selectedTutor.profile.qualifications.map((q, i) => <li key={i}>{q}</li>)}
          </ul>

          <h4>Languages</h4>
          <div className="tags">
            {selectedTutor.profile.languages.map(l => <span key={l} className="tag">{l}</span>)}
          </div>
        </div>
        
        <div className="booking-sidebar">
          <h3>Weekly Availability</h3>
          <div className="availability-grid">
            {Object.entries(selectedTutor.profile.availability).map(([day, slots]) => (
              <div key={day} className="day-slot">
                <h4>{day}</h4>
                {slots.map((s, i) => <div key={i} style={{ fontSize: '0.8rem' }}>{s}</div>)}
              </div>
            ))}
          </div>
          <button className="btn" style={{ marginTop: '2rem' }} onClick={() => navigateToBooking(selectedTutor)}>Book a Session</button>
        </div>
      </div>
    </div>
  );

  const renderBookingForm = () => (
    <div className="animate-fade">
      <div className="form-container">
        <h2>Book a Session with {selectedTutor.name}</h2>
        <form onSubmit={handleBooking}>
          <div className="form-group">
            <label>Subject</label>
            <select name="subject" required>
              {selectedTutor.subjects.map(sid => (
                <option key={sid} value={sid}>{SUBJECTS.find(s => s.id === sid).name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Date</label>
            <input type="date" name="date" required min="2026-04-01" />
          </div>
          <div className="form-group">
            <label>Preferred Time Slot</label>
            <select name="time" required>
              <option value="10:00:00+00">10:00 AM - 11:00 AM</option>
              <option value="14:00:00+00">02:00 PM - 03:00 PM</option>
              <option value="16:00:00+00">04:00 PM - 05:00 PM</option>
            </select>
          </div>
          <button type="submit" className="btn">Confirm Booking</button>
          <button type="button" className="btn" style={{ background: 'transparent', marginTop: '1rem' }} onClick={() => setCurrentPage('listing')}>Cancel</button>
        </form>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="animate-fade">
      <h2>Student Dashboard</h2>
      <div style={{ marginTop: '2rem' }}>
        <h3>Your Sessions</h3>
        <table style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border)' }}>
              <th style={{ padding: '1rem' }}>Tutor</th>
              <th style={{ padding: '1rem' }}>Subject</th>
              <th style={{ padding: '1rem' }}>Time</th>
              <th style={{ padding: '1rem' }}>Status</th>
              <th style={{ padding: '1rem' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map(s => {
              const tutor = TUTORS.find(t => t.id === s.tutor_id);
              const subject = SUBJECTS.find(sub => sub.id === s.subject_id);
              return (
                <tr key={s.id} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '1rem' }}>{tutor.name}</td>
                  <td style={{ padding: '1rem' }}>{subject.name}</td>
                  <td style={{ padding: '1rem' }}>{s.time_range}</td>
                  <td style={{ padding: '1rem' }}>
                    <span className="tag" style={{ background: s.status === 'confirmed' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(234, 179, 8, 0.2)', color: s.status === 'confirmed' ? '#4ade80' : '#facc15' }}>
                      {s.status}
                    </span>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    {s.status === 'confirmed' && (
                       <button className="btn" style={{ width: 'auto', padding: '0.4rem 0.8rem', fontSize: '0.8rem' }} onClick={() => { setSelectedTutor(tutor); setCurrentPage('review'); }}>Review</button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderReviewForm = () => (
    <div className="animate-fade">
      <div className="form-container">
        <h2>Write a Review for {selectedTutor.name}</h2>
        <form onSubmit={handleReview}>
          <input type="hidden" name="session_id" value="s-1" />
          <div className="form-group">
            <label>Rating (1-5)</label>
            <select name="rating" required>
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Very Good</option>
              <option value="3">3 - Good</option>
              <option value="2">2 - Fair</option>
              <option value="1">1 - Poor</option>
            </select>
          </div>
          <div className="form-group">
            <label>Your Feedback</label>
            <textarea name="comment" rows="4" placeholder="How was your session?" required></textarea>
          </div>
          <button type="submit" className="btn">Submit Review</button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="app-container">
      {renderNavbar()}
      <main>
        {currentPage === 'listing' && renderListing()}
        {currentPage === 'profile' && renderProfile()}
        {currentPage === 'book' && renderBookingForm()}
        {currentPage === 'dashboard' && renderDashboard()}
        {currentPage === 'review' && renderReviewForm()}
      </main>
      <footer style={{ marginTop: '5rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        &copy; 2026 Tutorix Platform. Powered by PostgreSQL JSONB & React.
      </footer>
    </div>
  );
};

export default App;
