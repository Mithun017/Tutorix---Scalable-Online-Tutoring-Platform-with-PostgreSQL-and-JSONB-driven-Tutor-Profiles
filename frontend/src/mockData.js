// Tutorix: Mock Data matching PostgreSQL Schema

export const SUBJECTS = [
  { id: 'sub-1', name: 'Mathematics', description: 'Advanced algebraic and geometric concepts.' },
  { id: 'sub-2', name: 'Physics', description: 'Classical mechanics and modern physics.' },
  { id: 'sub-3', name: 'Chemistry', description: 'Organic and inorganic chemistry.' },
  { id: 'sub-4', name: 'English Literature', description: 'Critical analysis of literature.' }
];

export const TUTORS = [
  {
    id: 't-1',
    name: 'Dr. Sarah Chen',
    email: 'sarah.chen@tutorix.com',
    profile: {
      qualifications: ["PhD in Applied mathematics", "10+ years teaching experience"],
      availability: {
        monday: ["09:00-12:00", "14:00-17:00"],
        wednesday: ["09:00-12:00"]
      },
      languages: ["English", "Mandarin"],
      bio: "Passionate about making math intuitive and accessible for all students."
    },
    hourly_rate: 75.00,
    rating: 4.9,
    subjects: ['sub-1', 'sub-2']
  },
  {
    id: 't-2',
    name: 'Marcus Vane',
    email: 'marcus.vane@tutorix.com',
    profile: {
      qualifications: ["MSc in Theoretical Physics", "Ex-NASA Intern"],
      availability: {
        tuesday: ["10:00-15:00"],
        thursday: ["10:00-15:00"]
      },
      languages: ["English", "Spanish"],
      bio: "Exploring the universe one equation at a time."
    },
    hourly_rate: 60.00,
    rating: 4.7,
    subjects: ['sub-2', 'sub-3']
  }
];

export const SESSIONS = [
  {
    id: 's-1',
    tutor_id: 't-1',
    student_id: 'st-1',
    subject_id: 'sub-1',
    time_range: '2026-04-10 10:00:00+00 to 2026-04-10 11:00:00+00',
    status: 'confirmed'
  }
];

export const REVIEWS = [
  { id: 'r-1', session_id: 's-1', rating: 5, comment: 'Dr. Chen is amazing! She explained calculus so clearly.' }
];
