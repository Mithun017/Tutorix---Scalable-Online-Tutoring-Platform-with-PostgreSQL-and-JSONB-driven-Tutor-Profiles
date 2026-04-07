import React, { useState } from 'react';
import { TUTORS, SUBJECTS, SESSIONS, REVIEWS, STATS } from './mockData';

const App = () => {
  const [page, setPage] = useState('listing');
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [sessions, setSessions] = useState(SESSIONS);
  const [reviews, setReviews] = useState(REVIEWS);
  const [search, setSearch] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [toast, setToast] = useState(null);
  const [reviewRating, setReviewRating] = useState(0);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const getSubjectName = (id) => SUBJECTS.find(s => s.id === id)?.name || '';
  const getSubjectIcon = (id) => SUBJECTS.find(s => s.id === id)?.icon || '';
  const getTutorName = (id) => TUTORS.find(t => t.id === id)?.name || '';

  const filteredTutors = TUTORS.filter(tutor => {
    const matchesSearch = !search ||
      tutor.name.toLowerCase().includes(search.toLowerCase()) ||
      tutor.profile.bio.toLowerCase().includes(search.toLowerCase()) ||
      tutor.profile.languages.some(l => l.toLowerCase().includes(search.toLowerCase())) ||
      tutor.subjects.some(sid => getSubjectName(sid).toLowerCase().includes(search.toLowerCase()));

    const matchesSubject = subjectFilter === 'all' || tutor.subjects.includes(subjectFilter);

    return matchesSearch && matchesSubject;
  });

  const tutorReviews = (tutorId) => reviews.filter(r => r.tutor_id === tutorId);

  const handleBooking = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const newSession = {
      id: `s-${Date.now()}`,
      tutor_id: selectedTutor.id,
      student_id: 'st-1',
      subject_id: fd.get('subject'),
      date: fd.get('date'),
      start_time: fd.get('time').split('-')[0],
      end_time: fd.get('time').split('-')[1],
      status: 'pending'
    };

    const conflict = sessions.some(s =>
      s.tutor_id === newSession.tutor_id &&
      s.date === newSession.date &&
      s.start_time === newSession.start_time
    );

    if (conflict) {
      showToast('⚠️ Tutor already booked for this slot! (EXCLUDE constraint)', 'error');
      return;
    }

    setSessions([...sessions, newSession]);
    showToast('✅ Session booked successfully!');
    setPage('dashboard');
  };

  const handleReview = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    setReviews([...reviews, {
      id: `r-${Date.now()}`,
      session_id: fd.get('session_id'),
      tutor_id: selectedTutor.id,
      rating: reviewRating,
      comment: fd.get('comment'),
      author: 'You'
    }]);
    showToast('✅ Review submitted!');
    setReviewRating(0);
    setPage('dashboard');
  };

  // ===== NAVBAR =====
  const Navbar = () => (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => setPage('listing')} style={{ cursor: 'pointer' }}>
        <div className="navbar-logo">T</div>
        <span className="navbar-title">Tutorix</span>
      </div>
      <div className="nav-links">
        {[
          { key: 'listing', label: '🔍 Browse' },
          { key: 'dashboard', label: '📊 Dashboard' }
        ].map(item => (
          <button
            key={item.key}
            className={`nav-link ${page === item.key ? 'active' : ''}`}
            onClick={() => setPage(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );

  // ===== HERO =====
  const Hero = () => (
    <section className="hero animate-in">
      <div className="hero-badge">
        <span className="dot"></span>
        Platform powered by PostgreSQL JSONB
      </div>
      <h2>Find Your Perfect <span>Tutor</span></h2>
      <p>Connect with world-class educators. Book sessions, track progress, and achieve your learning goals.</p>
    </section>
  );

  // ===== STATS =====
  const StatsBar = () => (
    <div className="stats-bar animate-in animate-in-delay-1">
      {[
        { value: `${STATS.totalTutors}+`, label: 'Expert Tutors' },
        { value: `${STATS.totalStudents.toLocaleString()}+`, label: 'Active Students' },
        { value: `${(STATS.totalSessions / 1000).toFixed(1)}K`, label: 'Sessions Completed' },
        { value: STATS.avgRating, label: 'Average Rating' }
      ].map((stat, i) => (
        <div key={i} className="stat-card">
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );

  // ===== LISTING PAGE =====
  const ListingPage = () => (
    <div className="animate-in">
      <Hero />
      <StatsBar />

      <div className="search-section animate-in animate-in-delay-2">
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search by tutor name, subject, or language..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="filter-chips">
          <button
            className={`chip ${subjectFilter === 'all' ? 'active' : ''}`}
            onClick={() => setSubjectFilter('all')}
          >All</button>
          {SUBJECTS.map(sub => (
            <button
              key={sub.id}
              className={`chip ${subjectFilter === sub.id ? 'active' : ''}`}
              onClick={() => setSubjectFilter(sub.id)}
            >{sub.icon} {sub.name}</button>
          ))}
        </div>
      </div>

      <div className="section-header animate-in animate-in-delay-3">
        <h2 className="section-title">Available Tutors</h2>
        <span className="section-count">{filteredTutors.length} tutors found</span>
      </div>

      <div className="tutor-grid">
        {filteredTutors.map(tutor => (
          <div key={tutor.id} className="tutor-card" onClick={() => { setSelectedTutor(tutor); setPage('profile'); }}>
            <div className="tutor-card-header">
              <div className="tutor-avatar">{tutor.avatar}</div>
              <div className="tutor-card-meta">
                <h3>{tutor.name}</h3>
                <div className="tutor-card-rating">
                  <span className="stars">{'★'.repeat(Math.floor(tutor.rating))}</span>
                  <span className="rating-value">{tutor.rating}</span>
                  <span className="rating-count">({tutor.total_sessions} sessions)</span>
                </div>
              </div>
            </div>
            <p className="tutor-card-bio">{tutor.profile.bio}</p>
            <div className="tutor-card-tags">
              {tutor.subjects.map(sid => (
                <span key={sid} className="tag tag-subject">{getSubjectIcon(sid)} {getSubjectName(sid)}</span>
              ))}
              {tutor.profile.languages.map(l => (
                <span key={l} className="tag tag-language">{l}</span>
              ))}
            </div>
            <div className="tutor-card-footer">
              <div className="tutor-price">${tutor.hourly_rate}<span>/hr</span></div>
              <button className="btn btn-primary" onClick={e => { e.stopPropagation(); setSelectedTutor(tutor); setPage('book'); }}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ===== PROFILE PAGE =====
  const ProfilePage = () => {
    const t = selectedTutor;
    const tReviews = tutorReviews(t.id);
    return (
      <div className="animate-in">
        <div className="back-link" onClick={() => setPage('listing')}>← Back to Browse</div>

        <div className="profile-layout">
          <div className="profile-main">
            <div className="profile-header">
              <div className="profile-avatar">{t.avatar}</div>
              <div className="profile-header-info">
                <h2>{t.name}</h2>
                <div className="tutor-card-rating" style={{ fontSize: '1rem' }}>
                  <span className="stars">{'★'.repeat(Math.floor(t.rating))}</span>
                  <span className="rating-value">{t.rating}</span>
                  <span className="rating-count">· {t.total_sessions} sessions</span>
                </div>
                <div className="profile-stats-row">
                  <div className="profile-stat">🕒 <strong>{t.profile.experience}</strong> experience</div>
                  <div className="profile-stat">🌐 {t.profile.languages.join(', ')}</div>
                </div>
              </div>
            </div>

            <div className="profile-section">
              <h3>About</h3>
              <p className="profile-bio">{t.profile.bio}</p>
            </div>

            <div className="profile-section">
              <h3>Qualifications</h3>
              <div className="qualification-list">
                {t.profile.qualifications.map((q, i) => (
                  <div key={i} className="qualification-item">
                    <span className="check">✓</span>
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="profile-section">
              <h3>Subjects</h3>
              <div className="tutor-card-tags">
                {t.subjects.map(sid => (
                  <span key={sid} className="tag tag-subject">{getSubjectIcon(sid)} {getSubjectName(sid)}</span>
                ))}
              </div>
            </div>

            {tReviews.length > 0 && (
              <div className="profile-section reviews-section">
                <h3>Student Reviews ({tReviews.length})</h3>
                {tReviews.map(r => (
                  <div key={r.id} className="review-card">
                    <div className="review-header">
                      <span className="review-author">{r.author}</span>
                      <span className="review-stars">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</span>
                    </div>
                    <p className="review-text">{r.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="profile-sidebar">
            <div className="sidebar-card">
              <div className="price-display">${t.hourly_rate}<span>/hr</span></div>
              <button className="btn btn-primary btn-full btn-lg" style={{ marginTop: '1rem' }} onClick={() => setPage('book')}>
                📅 Book a Session
              </button>
            </div>

            <div className="sidebar-card">
              <h3>📅 Weekly Availability</h3>
              <div className="availability-grid">
                {Object.entries(t.profile.availability).map(([day, slots]) => (
                  <div key={day} className="day-slot">
                    <span className="day-name">{day}</span>
                    <div className="day-times">
                      {slots.map((s, i) => <span key={i} className="time-badge">{s}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ===== BOOKING FORM =====
  const BookingPage = () => (
    <div className="animate-in">
      <div className="back-link" onClick={() => setPage(selectedTutor ? 'profile' : 'listing')}>← Back</div>
      <div className="form-container">
        <h2>Book a Session</h2>
        <p className="form-subtitle">with {selectedTutor.name} · ${selectedTutor.hourly_rate}/hr</p>
        <form onSubmit={handleBooking}>
          <div className="form-group">
            <label className="form-label">Subject</label>
            <select name="subject" className="form-select" required>
              {selectedTutor.subjects.map(sid => (
                <option key={sid} value={sid}>{getSubjectIcon(sid)} {getSubjectName(sid)}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Date</label>
            <input type="date" name="date" className="form-input" required min="2026-04-01" />
          </div>
          <div className="form-group">
            <label className="form-label">Time Slot</label>
            <select name="time" className="form-select" required>
              <option value="09:00-10:00">09:00 AM – 10:00 AM</option>
              <option value="10:00-11:00">10:00 AM – 11:00 AM</option>
              <option value="11:00-12:00">11:00 AM – 12:00 PM</option>
              <option value="14:00-15:00">02:00 PM – 03:00 PM</option>
              <option value="15:00-16:00">03:00 PM – 04:00 PM</option>
              <option value="16:00-17:00">04:00 PM – 05:00 PM</option>
              <option value="18:00-19:00">06:00 PM – 07:00 PM</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary btn-full btn-lg" style={{ marginTop: '0.5rem' }}>Confirm Booking</button>
          <button type="button" className="btn btn-secondary btn-full" style={{ marginTop: '0.75rem' }} onClick={() => setPage('listing')}>Cancel</button>
        </form>
      </div>
    </div>
  );

  // ===== DASHBOARD =====
  const DashboardPage = () => {
    const completedCount = sessions.filter(s => s.status === 'completed').length;
    const upcomingCount = sessions.filter(s => s.status === 'confirmed' || s.status === 'pending').length;
    const totalSpent = sessions.reduce((acc, s) => {
      const tutor = TUTORS.find(t => t.id === s.tutor_id);
      return acc + (tutor?.hourly_rate || 0);
    }, 0);

    return (
      <div className="animate-in">
        <div className="dashboard-header">
          <h2>Student Dashboard</h2>
        </div>

        <div className="dashboard-stats">
          <div className="dash-stat">
            <div className="dash-stat-label">Completed Sessions</div>
            <div className="dash-stat-value" style={{ color: '#34d399' }}>{completedCount}</div>
          </div>
          <div className="dash-stat">
            <div className="dash-stat-label">Upcoming Sessions</div>
            <div className="dash-stat-value" style={{ color: '#818cf8' }}>{upcomingCount}</div>
          </div>
          <div className="dash-stat">
            <div className="dash-stat-label">Total Spent</div>
            <div className="dash-stat-value">${totalSpent.toFixed(2)}</div>
          </div>
        </div>

        <h3 className="section-title" style={{ marginBottom: '1rem' }}>Your Sessions</h3>
        <table className="sessions-table">
          <thead>
            <tr>
              <th>Tutor</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map(s => (
              <tr key={s.id}>
                <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{getTutorName(s.tutor_id)}</td>
                <td>{getSubjectIcon(s.subject_id)} {getSubjectName(s.subject_id)}</td>
                <td>{s.date}</td>
                <td>{s.start_time} – {s.end_time}</td>
                <td>
                  <span className={`status-badge status-${s.status}`}>{s.status}</span>
                </td>
                <td>
                  {s.status === 'completed' && (
                    <button className="btn btn-ghost" onClick={() => {
                      setSelectedTutor(TUTORS.find(t => t.id === s.tutor_id));
                      setPage('review');
                    }}>Write Review</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // ===== REVIEW FORM =====
  const ReviewPage = () => (
    <div className="animate-in">
      <div className="back-link" onClick={() => setPage('dashboard')}>← Back to Dashboard</div>
      <div className="form-container">
        <h2>Rate Your Session</h2>
        <p className="form-subtitle">with {selectedTutor.name}</p>
        <form onSubmit={handleReview}>
          <input type="hidden" name="session_id" value="s-1" />
          <div className="form-group">
            <label className="form-label">Your Rating</label>
            <div className="star-rating-input">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  type="button"
                  className={`star-btn ${star <= reviewRating ? 'active' : ''}`}
                  onClick={() => setReviewRating(star)}
                >★</button>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Your Feedback</label>
            <textarea name="comment" className="form-textarea" placeholder="Share your experience with this tutor..." required />
          </div>
          <button type="submit" className="btn btn-primary btn-full btn-lg" style={{ marginTop: '0.5rem' }}>Submit Review</button>
        </form>
      </div>
    </div>
  );

  // ===== RENDER =====
  return (
    <div className="app-container">
      <Navbar />
      <main>
        {page === 'listing' && <ListingPage />}
        {page === 'profile' && selectedTutor && <ProfilePage />}
        {page === 'book' && selectedTutor && <BookingPage />}
        {page === 'dashboard' && <DashboardPage />}
        {page === 'review' && selectedTutor && <ReviewPage />}
      </main>
      <footer className="footer">
        &copy; 2026 Tutorix · Powered by PostgreSQL JSONB & React
      </footer>
      {toast && (
        <div className={`toast toast-${toast.type}`}>
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default App;
