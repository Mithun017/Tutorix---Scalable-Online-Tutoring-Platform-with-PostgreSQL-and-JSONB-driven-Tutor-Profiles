import React, { useState } from 'react';
import { TUTORS, SUBJECTS, SESSIONS, REVIEWS, STATS, PAYMENTS } from './mockData';

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
    setTimeout(() => setToast(null), 3500);
  };

  const getSubjectName = (id) => SUBJECTS.find(s => s.id === id)?.name || '';
  const getSubjectIcon = (id) => SUBJECTS.find(s => s.id === id)?.icon || '';
  const getTutorName = (id) => TUTORS.find(t => t.id === id)?.name || '';

  const filteredTutors = TUTORS.filter(tutor => {
    const q = search.toLowerCase();
    const matchesSearch = !search ||
      tutor.name.toLowerCase().includes(q) ||
      tutor.profile.bio.toLowerCase().includes(q) ||
      tutor.profile.languages.some(l => l.toLowerCase().includes(q)) ||
      tutor.subjects.some(sid => getSubjectName(sid).toLowerCase().includes(q));
    const matchesSubject = subjectFilter === 'all' || tutor.subjects.includes(subjectFilter);
    return matchesSearch && matchesSubject;
  });

  const tutorReviews = (tid) => reviews.filter(r => r.tutor_id === tid);

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
      showToast('⚠️ This tutor is already booked for this slot! (EXCLUDE constraint triggered)', 'error');
      return;
    }

    setSessions([...sessions, newSession]);
    showToast('✅ Session booked successfully! Check your dashboard.');
    setPage('dashboard');
  };

  const handleReview = (e) => {
    e.preventDefault();
    if (reviewRating === 0) {
      showToast('⚠️ Please select a rating before submitting.', 'error');
      return;
    }
    const fd = new FormData(e.target);
    setReviews([...reviews, {
      id: `r-${Date.now()}`,
      session_id: fd.get('session_id'),
      tutor_id: selectedTutor.id,
      rating: reviewRating,
      comment: fd.get('comment'),
      author: 'You'
    }]);
    showToast('✅ Review submitted! Thank you for your feedback.');
    setReviewRating(0);
    setPage('dashboard');
  };

  // ===== NAVBAR =====
  const Navbar = () => (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => setPage('listing')}>
        <div className="navbar-logo">T</div>
        <span className="navbar-title">Tutorix</span>
      </div>
      <div className="nav-links">
        {[
          { key: 'listing', label: '🔍 Browse Tutors' },
          { key: 'dashboard', label: '📊 My Dashboard' }
        ].map(item => (
          <button
            key={item.key}
            className={`nav-link ${page === item.key || (page === 'profile' && item.key === 'listing') || (page === 'book' && item.key === 'listing') ? 'active' : ''}`}
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
        Powered by PostgreSQL JSONB · 🇮🇳 Made in India
      </div>
      <h2>Find Your Perfect <span>Tutor</span></h2>
      <p>Connect with India's top educators for JEE, NEET, CA, GATE, and board exam preparation. Book sessions, track progress, and achieve your dreams.</p>
    </section>
  );

  // ===== STATS =====
  const StatsBar = () => (
    <div className="stats-bar animate-in animate-in-delay-1">
      {[
        { value: `${STATS.totalTutors}+`, label: 'Expert Tutors' },
        { value: `${(STATS.totalStudents / 1000).toFixed(1)}K+`, label: 'Active Students' },
        { value: `${(STATS.totalSessions / 1000).toFixed(0)}K+`, label: 'Sessions Completed' },
        { value: `⭐ ${STATS.avgRating}`, label: 'Average Rating' }
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
            placeholder="Search by tutor, subject, or language (e.g. Tamil, JEE, Physics)..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="filter-chips">
          <button className={`chip ${subjectFilter === 'all' ? 'active' : ''}`} onClick={() => setSubjectFilter('all')}>All</button>
          {SUBJECTS.map(sub => (
            <button key={sub.id} className={`chip ${subjectFilter === sub.id ? 'active' : ''}`} onClick={() => setSubjectFilter(sub.id)}>
              {sub.icon} {sub.name}
            </button>
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
                  <span className="rating-count">({tutor.total_sessions.toLocaleString('en-IN')} sessions)</span>
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
              <div className="tutor-price">₹{tutor.hourly_rate.toLocaleString('en-IN')}<span>/hr</span></div>
              <button className="btn btn-primary" onClick={e => { e.stopPropagation(); setSelectedTutor(tutor); setPage('book'); }}>Book Now →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ===== PROFILE =====
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
                <div className="tutor-card-rating" style={{ fontSize: '0.95rem' }}>
                  <span className="stars">{'★'.repeat(Math.floor(t.rating))}</span>
                  <span className="rating-value">{t.rating}</span>
                  <span className="rating-count">· {t.total_sessions.toLocaleString('en-IN')} sessions</span>
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
              <h3>Subjects Taught</h3>
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
              <div className="price-display">₹{t.hourly_rate.toLocaleString('en-IN')}<span>/hr</span></div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '1rem' }}>
                GST included · No hidden charges
              </p>
              <button className="btn btn-primary btn-full btn-lg" onClick={() => setPage('book')}>
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

  // ===== BOOKING =====
  const BookingPage = () => (
    <div className="animate-in">
      <div className="back-link" onClick={() => setPage(selectedTutor ? 'profile' : 'listing')}>← Back</div>
      <div className="form-container">
        <h2>Book a Session</h2>
        <p className="form-subtitle">with {selectedTutor.name} · ₹{selectedTutor.hourly_rate.toLocaleString('en-IN')}/hr</p>
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
            <label className="form-label">Preferred Date</label>
            <input type="date" name="date" className="form-input" required min="2026-04-01" />
          </div>
          <div className="form-group">
            <label className="form-label">Time Slot (IST)</label>
            <select name="time" className="form-select" required>
              <option value="07:00-08:00">07:00 AM – 08:00 AM</option>
              <option value="08:00-09:00">08:00 AM – 09:00 AM</option>
              <option value="09:00-10:00">09:00 AM – 10:00 AM</option>
              <option value="10:00-11:00">10:00 AM – 11:00 AM</option>
              <option value="11:00-12:00">11:00 AM – 12:00 PM</option>
              <option value="14:00-15:00">02:00 PM – 03:00 PM</option>
              <option value="16:00-17:00">04:00 PM – 05:00 PM</option>
              <option value="18:00-19:00">06:00 PM – 07:00 PM</option>
              <option value="19:00-20:00">07:00 PM – 08:00 PM</option>
            </select>
          </div>
          <div style={{ padding: '1rem', background: 'rgba(23, 234, 217, 0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(23, 234, 217, 0.1)', marginBottom: '1.25rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            💡 <strong>Session Cost:</strong> ₹{selectedTutor.hourly_rate.toLocaleString('en-IN')} (1 hour) · Payment after session
          </div>
          <button type="submit" className="btn btn-primary btn-full btn-lg">Confirm Booking →</button>
          <button type="button" className="btn btn-secondary btn-full" style={{ marginTop: '0.75rem' }} onClick={() => setPage('listing')}>Cancel</button>
        </form>
      </div>
    </div>
  );

  // ===== DASHBOARD =====
  const DashboardPage = () => {
    const completedCount = sessions.filter(s => s.status === 'completed').length;
    const confirmedCount = sessions.filter(s => s.status === 'confirmed').length;
    const pendingCount = sessions.filter(s => s.status === 'pending').length;
    const totalSpent = sessions.reduce((acc, s) => {
      const tutor = TUTORS.find(t => t.id === s.tutor_id);
      return acc + (tutor?.hourly_rate || 0);
    }, 0);
    const paidAmount = PAYMENTS.filter(p => p.status === 'paid').reduce((a, p) => a + p.amount, 0);
    const pendingAmount = PAYMENTS.filter(p => p.status === 'pending').reduce((a, p) => a + p.amount, 0);

    // Unique tutors booked
    const uniqueTutors = [...new Set(sessions.map(s => s.tutor_id))];
    // Subject breakdown
    const subjectCounts = {};
    sessions.forEach(s => {
      const name = getSubjectName(s.subject_id);
      subjectCounts[name] = (subjectCounts[name] || 0) + 1;
    });

    // Recent reviews by user
    const myReviews = reviews.filter(r => r.author === 'You');

    return (
      <div className="animate-in">
        <div className="dashboard-header">
          <h2>📊 Student Dashboard</h2>
          <button className="btn btn-primary" onClick={() => setPage('listing')}>+ Book New Session</button>
        </div>

        {/* 6 Stat Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
          <div className="dash-stat">
            <div className="dash-stat-label">Total Sessions</div>
            <div className="dash-stat-value">{sessions.length}</div>
          </div>
          <div className="dash-stat">
            <div className="dash-stat-label">Completed</div>
            <div className="dash-stat-value" style={{ color: 'var(--accent)' }}>{completedCount}</div>
          </div>
          <div className="dash-stat">
            <div className="dash-stat-label">Confirmed</div>
            <div className="dash-stat-value" style={{ color: 'var(--primary-light)' }}>{confirmedCount}</div>
          </div>
          <div className="dash-stat">
            <div className="dash-stat-label">Pending</div>
            <div className="dash-stat-value" style={{ color: 'var(--warning)' }}>{pendingCount}</div>
          </div>
          <div className="dash-stat">
            <div className="dash-stat-label">Total Paid</div>
            <div className="dash-stat-value" style={{ color: 'var(--accent)' }}>₹{paidAmount.toLocaleString('en-IN')}</div>
          </div>
          <div className="dash-stat">
            <div className="dash-stat-label">Pending Payment</div>
            <div className="dash-stat-value" style={{ color: 'var(--warning)' }}>₹{pendingAmount.toLocaleString('en-IN')}</div>
          </div>
        </div>

        {/* Two Column Layout: Sessions + Side panels */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '1.5rem' }}>
          {/* Left: Sessions Table */}
          <div>
            <h3 className="section-title" style={{ marginBottom: '1rem' }}>📋 Session History ({sessions.length})</h3>
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
                {[...sessions].sort((a, b) => b.date.localeCompare(a.date)).map(s => (
                  <tr key={s.id}>
                    <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{getTutorName(s.tutor_id)}</td>
                    <td>{getSubjectIcon(s.subject_id)} {getSubjectName(s.subject_id)}</td>
                    <td>{s.date}</td>
                    <td>{s.start_time} – {s.end_time}</td>
                    <td><span className={`status-badge status-${s.status}`}>{s.status}</span></td>
                    <td>
                      {s.status === 'completed' && (
                        <button className="btn btn-ghost" onClick={() => {
                          setSelectedTutor(TUTORS.find(t => t.id === s.tutor_id));
                          setPage('review');
                        }}>Review</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right: Side Panels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Tutors You Learn From */}
            <div className="sidebar-card">
              <h3>👩‍🏫 Your Tutors ({uniqueTutors.length})</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {uniqueTutors.map(tid => {
                  const t = TUTORS.find(x => x.id === tid);
                  if (!t) return null;
                  return (
                    <div key={tid} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', borderRadius: 'var(--radius-md)', cursor: 'pointer', transition: 'background 0.2s' }}
                      onClick={() => { setSelectedTutor(t); setPage('profile'); }}
                      onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-hover)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <div className="tutor-avatar" style={{ width: 36, height: 36, fontSize: '0.75rem', borderRadius: 'var(--radius-sm)' }}>{t.avatar}</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{t.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>★ {t.rating} · ₹{t.hourly_rate.toLocaleString('en-IN')}/hr</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Subject Breakdown */}
            <div className="sidebar-card">
              <h3>📚 Subject Breakdown</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {Object.entries(subjectCounts).sort((a, b) => b[1] - a[1]).map(([name, count]) => {
                  const sub = SUBJECTS.find(s => s.name === name);
                  const maxCount = Math.max(...Object.values(subjectCounts));
                  return (
                    <div key={name}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.3rem' }}>
                        <span>{sub?.icon} {name}</span>
                        <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{count} sessions</span>
                      </div>
                      <div style={{ height: 6, background: 'var(--border)', borderRadius: 99, overflow: 'hidden' }}>
                        <div style={{ width: `${(count / maxCount) * 100}%`, height: '100%', background: 'var(--gradient-accent)', borderRadius: 99, transition: 'width 0.5s ease' }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Payment History */}
            <div className="sidebar-card">
              <h3>💳 Recent Payments</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {PAYMENTS.slice(0, 6).map(p => (
                  <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 500 }}>₹{p.amount.toLocaleString('en-IN')}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{p.date}</div>
                    </div>
                    <span className={`status-badge ${p.status === 'paid' ? 'status-completed' : 'status-pending'}`}>{p.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* My Reviews */}
            {myReviews.length > 0 && (
              <div className="sidebar-card">
                <h3>✍️ Your Reviews ({myReviews.length})</h3>
                {myReviews.map(r => (
                  <div key={r.id} className="review-card" style={{ marginBottom: '0.5rem' }}>
                    <div className="review-header">
                      <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>{getTutorName(r.tutor_id)}</span>
                      <span className="review-stars">{'★'.repeat(r.rating)}</span>
                    </div>
                    <p className="review-text" style={{ fontSize: '0.82rem' }}>{r.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // ===== REVIEW =====
  const ReviewPage = () => (
    <div className="animate-in">
      <div className="back-link" onClick={() => setPage('dashboard')}>← Back to Dashboard</div>
      <div className="form-container">
        <h2>⭐ Rate Your Session</h2>
        <p className="form-subtitle">with {selectedTutor.name}</p>
        <form onSubmit={handleReview}>
          <input type="hidden" name="session_id" value="s-1" />
          <div className="form-group">
            <label className="form-label">Your Rating</label>
            <div className="star-rating-input">
              {[1, 2, 3, 4, 5].map(star => (
                <button key={star} type="button"
                  className={`star-btn ${star <= reviewRating ? 'active' : ''}`}
                  onClick={() => setReviewRating(star)}
                >★</button>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Your Feedback</label>
            <textarea name="comment" className="form-textarea" placeholder="How was your experience? Share your honest feedback..." required />
          </div>
          <button type="submit" className="btn btn-primary btn-full btn-lg">Submit Review →</button>
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
        &copy; 2026 Tutorix · Powered by PostgreSQL JSONB & React · 🇮🇳 Made in India
      </footer>
      {toast && (
        <div className={`toast toast-${toast.type}`}>{toast.message}</div>
      )}
    </div>
  );
};

export default App;
