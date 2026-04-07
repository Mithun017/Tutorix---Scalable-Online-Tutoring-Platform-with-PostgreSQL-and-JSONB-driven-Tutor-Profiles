# Tutorix: Scalable Online Tutoring Platform

Tutorix is a full-stack architectural demonstration of a scalable online tutoring platform. It combines a highly optimized **PostgreSQL** database design with a modern, high-aesthetic **React** frontend.

## 🚀 Quick Start (Windows)

The easiest way to get the project running on Windows is using the provided automation script:

1. **Prerequisites**: Ensure you have [Node.js](https://nodejs.org/) installed.
2. **Execution**: Double-click the **`run.bat`** file in the root directory.
3. **What it does**: 
   - Checks for Node.js installation.
   - Automatically installs frontend dependencies (`npm install`) if missing.
   - Launches the development server.
4. **Access**: Once the terminal shows "VITE ready", open your browser to **`http://localhost:5173`**.

---

## 📂 Project Structure

```text
├── database/
│   ├── schema.sql    # PostgreSQL Table & Exclusion Constraint Definitions
│   ├── seed.sql      # Sample dataset with complex JSONB tutor profiles
│   └── queries.sql   # Key SQL for JSONB filtering and conflict checks
├── frontend/         # React + Vite Application
│   ├── src/
│   │   ├── mockData.js  # Frontend simulation of the PG schema
│   │   ├── App.jsx      # Main Logic (Search, Booking, Dashboard)
│   │   └── index.css    # Premium Design System (Glassmorphism)
├── run.bat           # One-click automation script for Windows
└── README.md         # Documentation
```

## 🛠️ Manual Setup Instructions

### 1. Database Setup (PostgreSQL)
We've provided a dedicated script to apply the schema and sample data using your credentials:

1. Open the `database` folder.
2. Double-click **`setup_db.bat`**.
3. It will automatically run:
   - `psql -U Mithun1701 -d Tutorix -f schema.sql`
   - `psql -U Mithun1701 -d Tutorix -f seed.sql`

> [!NOTE]
> Ensure you have created the `Tutorix` database in pgAdmin or via `CREATE DATABASE Tutorix;` before running the script.

> [!IMPORTANT]
> The database uses the `btree_gist` extension for its unique **Exclusion Constraints**. This prevents any tutor from being double-booked for the same time slot at the database level.

### 2. Frontend Setup
If you prefer not to use `run.bat`:
1. Open your terminal in the `frontend` folder.
2. Run `npm install` to get the latest packages.
3. Run `npm run dev` to start the application.

---

## 🧩 Features & How to Use

### 🔍 Browse & Search
- Use the search bar on the home page to filter tutors by **name**, **subject** (e.g., "Physics"), or **biography keywords**.
- The search simulates PostgreSQL `JSONB` path queries.

### 📅 Booking a Session
- Navigate to a tutor's profile to view their **JSONB-driven availability** and qualifications.
- Click "Book Now" to open the booking form.
- **Conflict Demo**: Try booking `Sarah Chen` for `2026-04-10` at `10:00 AM` twice. The UI will simulate an "Exclusion Constraint" error, demonstrating the database's integrity system.

### 📊 Student Dashboard
- View all your upcoming sessions in a clean, categorized table.
- Submit reviews for completed sessions to update the tutor's rating.

---

## 📈 Key SQL Operations

This project demonstrates several advanced PostgreSQL concepts:

### JSONB Path Filtering
```sql
-- Find tutors who speak Mandarin using JSONB containment
SELECT u.name, t.profile->>'bio'
FROM tutors t
JOIN users u ON t.user_id = u.id
WHERE t.profile->'languages' @> '["Mandarin"]';
```

### Conflict Prevention (EXCLUDE)
```sql
-- This INSERT will error if the tutor has an overlapping session
INSERT INTO sessions (tutor_id, student_id, subject_id, time_range)
VALUES ('t-1', 's-1', 'sub-1', '[2026-04-12 14:00, 2026-04-12 15:00]');
```

---
Built with ❤️ for scalable education.
