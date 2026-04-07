-- Tutorix: Scalable Online Tutoring Platform Schema

-- Extensions
CREATE EXTENSION IF NOT EXISTS btree_gist;

-- Roles
CREATE TYPE user_role AS ENUM ('student', 'tutor');

-- Users Table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    role user_role NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tutors Table
CREATE TABLE tutors (
    user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    profile JSONB NOT NULL DEFAULT '{}', -- qualifications, availability, languages, experience
    hourly_rate DECIMAL(10, 2) NOT NULL CHECK (hourly_rate > 0),
    rating DECIMAL(2, 1) DEFAULT 0.0
);

-- Students Table
CREATE TABLE students (
    user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    grade_level TEXT NOT NULL
);

-- Subjects Table
CREATE TABLE subjects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT UNIQUE NOT NULL,
    description TEXT
);

-- Many-to-Many: Tutors <-> Subjects
CREATE TABLE tutor_subjects (
    tutor_id UUID REFERENCES tutors(user_id) ON DELETE CASCADE,
    subject_id UUID REFERENCES subjects(id) ON DELETE CASCADE,
    PRIMARY KEY (tutor_id, subject_id)
);

-- Sessions Table with Conflict Prevention
CREATE TABLE sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tutor_id UUID NOT NULL REFERENCES tutors(user_id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES students(user_id) ON DELETE CASCADE,
    subject_id UUID NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
    time_range TSTZRANGE NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')) DEFAULT 'pending',
    
    -- EXCLUDE constraint to prevent double booking for a tutor
    CONSTRAINT no_overlap_booking EXCLUDE USING gist (
        tutor_id WITH =,
        time_range WITH &&
    )
);

-- Payments Table
CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL REFERENCES sessions(id) ON DELETE CASCADE,
    amount DECIMAL(10, 2) NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('pending', 'paid', 'refunded')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Reviews Table
CREATE TABLE reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID UNIQUE NOT NULL REFERENCES sessions(id) ON DELETE CASCADE,
    rating INTEGER CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_tutors_profile_gin ON tutors USING GIN (profile);
CREATE INDEX idx_sessions_time_range ON sessions USING gist (time_range);
CREATE INDEX idx_tutor_subjects_tutor ON tutor_subjects(tutor_id);
CREATE INDEX idx_tutor_subjects_subject ON tutor_subjects(subject_id);
