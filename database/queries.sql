-- Tutorix: Key Operational Queries

-- 1. Book a session with conflict check
-- The exclusion constraint on the table handles the conflict prevention.
-- If the tutor already has a session at this time, this will error.
INSERT INTO sessions (tutor_id, student_id, subject_id, time_range)
VALUES (
    'tutor-uuid-here', 
    'student-uuid-here', 
    'subject-uuid-here', 
    '[2026-04-12 14:00:00+00, 2026-04-12 15:00:00+00]'::tstzrange
);

-- 2. Get Tutor Ratings and Total Earnings
SELECT 
    u.name as tutor_name,
    t.rating as avg_rating,
    SUM(p.amount) as total_earnings
FROM tutors t
JOIN users u ON t.user_id = u.id
LEFT JOIN sessions s ON t.user_id = s.tutor_id
LEFT JOIN payments p ON s.id = p.session_id
WHERE t.user_id = 'tutor-uuid-here'
GROUP BY u.name, t.rating;

-- 3. Filter Tutors using JSONB (Availability and Skills)
-- Find tutors available on Monday who speak Mandarin and teach Mathematics
SELECT 
    u.name, 
    t.profile->>'bio' as bio,
    t.hourly_rate
FROM tutors t
JOIN users u ON t.user_id = u.id
JOIN tutor_subjects ts ON t.user_id = ts.tutor_id
JOIN subjects s ON ts.subject_id = s.id
WHERE 
    t.profile->'availability' ? 'monday'
    AND t.profile->'languages' @> '["Mandarin"]'
    AND s.name = 'Mathematics';

-- 4. Get Student's Booked Sessions with Tutor Details
SELECT 
    s.time_range,
    sub.name as subject,
    u.name as tutor_name,
    s.status
FROM sessions s
JOIN tutors t ON s.tutor_id = t.user_id
JOIN users u ON t.user_id = u.id
JOIN subjects sub ON s.subject_id = sub.id
WHERE s.student_id = 'student-uuid-here'
ORDER BY lower(s.time_range) ASC;
