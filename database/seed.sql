-- Tutorix: Sample Data Seed Script

-- Subjects
INSERT INTO subjects (name, description) VALUES
('Mathematics', 'Advanced algebraic and geometric concepts for high school students.'),
('Physics', 'Classical mechanics, electromagnetism, and modern physics.'),
('Chemistry', 'Organic and inorganic chemistry fundamentals.'),
('English Literature', 'Critical analysis of modern and classical literature.');

-- Users (Tutors)
WITH tutor1_user AS (
    INSERT INTO users (name, email, role) 
    VALUES ('Dr. Sarah Chen', 'sarah.chen@tutorix.com', 'tutor')
    RETURNING id
),
tutor2_user AS (
    INSERT INTO users (name, email, role) 
    VALUES ('Marcus Vane', 'marcus.vane@tutorix.com', 'tutor')
    RETURNING id
),
-- Users (Students)
student1_user AS (
    INSERT INTO users (name, email, role) 
    VALUES ('Alice Johnson', 'alice.j@student.com', 'student')
    RETURNING id
)
-- Tutors Profiles (JSONB)
INSERT INTO tutors (user_id, profile, hourly_rate, rating)
SELECT id, '{
    "qualifications": ["PhD in Applied mathematics", "10+ years teaching experience"],
    "availability": {
        "monday": ["09:00-12:00", "14:00-17:00"],
        "wednesday": ["09:00-12:00"]
    },
    "languages": ["English", "Mandarin"],
    "bio": "Passionate about making math intuitive and accessible for all students."
}'::JSONB, 75.00, 4.9 FROM tutor1_user
UNION ALL
SELECT id, '{
    "qualifications": ["MSc in Theoretical Physics", "Ex-NASA Intern"],
    "availability": {
        "tuesday": ["10:00-15:00"],
        "thursday": ["10:00-15:00"]
    },
    "languages": ["English", "Spanish"],
    "bio": "Exploring the universe one equation at a time."
}'::JSONB, 60.00, 4.7 FROM tutor2_user;

-- Students Profile
INSERT INTO students (user_id, grade_level)
SELECT id, '11th Grade' FROM (SELECT id FROM users WHERE email = 'alice.j@student.com') AS s;

-- Tutor-Subjects Linking
INSERT INTO tutor_subjects (tutor_id, subject_id)
SELECT u.id, s.id FROM users u, subjects s 
WHERE u.email = 'sarah.chen@tutorix.com' AND s.name IN ('Mathematics', 'Physics');

INSERT INTO tutor_subjects (tutor_id, subject_id)
SELECT u.id, s.id FROM users u, subjects s 
WHERE u.email = 'marcus.vane@tutorix.com' AND s.name IN ('Physics', 'Chemistry');

-- Sample Sessions
INSERT INTO sessions (tutor_id, student_id, subject_id, time_range, status)
SELECT 
    (SELECT user_id FROM tutors JOIN users ON tutors.user_id = users.id WHERE email = 'sarah.chen@tutorix.com'),
    (SELECT user_id FROM students JOIN users ON students.user_id = users.id WHERE email = 'alice.j@student.com'),
    (SELECT id FROM subjects WHERE name = 'Mathematics'),
    '[2026-04-10 10:00:00+00, 2026-04-10 11:00:00+00]'::tstzrange,
    'confirmed';

-- Sample Review
INSERT INTO reviews (session_id, rating, comment)
SELECT id, 5, 'Dr. Chen is amazing! She explained calculus so clearly.'
FROM sessions WHERE status = 'confirmed' LIMIT 1;
