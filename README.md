# Tutorix: Scalable Online Tutoring Platform

Tutorix is a full-stack architectural demonstration of a scalable online tutoring platform. It combines a highly optimized **PostgreSQL** database design with a modern, high-aesthetic **React** frontend.

## 🚀 Key Features

### 1. Advanced PostgreSQL Engine
- **JSONB-Driven Profiles**: Tutors store flexible metadata (qualifications, availability, bio) in JSONB, allowing for schema-less extensibility while maintaining query performance via GIN indexes.
- **Double-Booking Prevention**: Uses PostgreSQL `EXCLUDE` constraints with `tstzrange` (Timestamp with Timezone range) to ensure no tutor can be booked for overlapping sessions at the database level.
- **Normalized Architecture**: Clean separation of `users`, `tutors`, `students`, `subjects`, and `sessions`.

### 2. Premium React UI
- **Glassmorphism Design**: A sleek, modern aesthetic using CSS backdrop filters, gradients, and the 'Outfit' typography.
- **Dynamic Search**: Real-time filtering of tutors based on subjects, skills, and ratings.
- **Interactive Booking**: A seamless multi-step booking flow that simulates database constraints.
- **Student Dashboard**: A central hub to manage sessions, payments, and reviews.

## 📂 Project Structure

```text
├── database/
│   ├── schema.sql    # Tables, Types, and Exclusion Constraints
│   ├── seed.sql      # Realistic sample data with JSONB profiles
│   └── queries.sql   # Key operational queries (filtering, earnings)
├── frontend/         # React + Vite Application
│   ├── src/
│   │   ├── mockData.js  # Mirrors PostgreSQL schema for UI simulation
│   │   ├── App.jsx      # Core logic and routing
│   │   └── index.css    # Premium Design System
└── run.bat           # Automation script for Windows
```

## 🛠️ Setup Instructions

### Database Setup
1. Ensure you have **PostgreSQL 14+** installed.
2. Create a new database: `CREATE DATABASE tutorix;`.
3. Run the schema: `psql -d tutorix -f database/schema.sql`.
4. Seed the data: `psql -d tutorix -f database/seed.sql`.

### Frontend Setup
1. Navigate to the frontend directory: `cd frontend`.
2. Install dependencies: `npm install`.
3. Start the dev server: `npm run dev`.

## 📈 Key SQL Operations

### Filtering Tutors by JSONB Skills
```sql
SELECT u.name, t.profile->>'bio'
FROM tutors t
JOIN users u ON t.user_id = u.id
WHERE t.profile->'languages' @> '["Mandarin"]';
```

### Booking Session (Conflict Prevention)
```sql
INSERT INTO sessions (tutor_id, student_id, subject_id, time_range)
VALUES ('...', '...', '...', '[2026-04-12 14:00, 2026-04-12 15:00]');
-- Will fail if there is an overlap for the tutor.
```

---
Built with ❤️ for scalable education.
