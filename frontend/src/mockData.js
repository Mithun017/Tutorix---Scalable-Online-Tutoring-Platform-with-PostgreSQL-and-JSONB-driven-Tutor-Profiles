// Tutorix: Expanded Mock Data matching PostgreSQL Schema

export const SUBJECTS = [
  { id: 'sub-1', name: 'Mathematics', description: 'Advanced algebraic and geometric concepts for high school students.', icon: '📐' },
  { id: 'sub-2', name: 'Physics', description: 'Classical mechanics, electromagnetism, and modern physics.', icon: '⚛️' },
  { id: 'sub-3', name: 'Chemistry', description: 'Organic and inorganic chemistry fundamentals.', icon: '🧪' },
  { id: 'sub-4', name: 'English Literature', description: 'Critical analysis of modern and classical literature.', icon: '📚' },
  { id: 'sub-5', name: 'Computer Science', description: 'Algorithms, data structures, and programming fundamentals.', icon: '💻' },
  { id: 'sub-6', name: 'Biology', description: 'Molecular biology, genetics, and ecology.', icon: '🧬' },
  { id: 'sub-7', name: 'History', description: 'World history from ancient civilizations to modern era.', icon: '🏛️' },
  { id: 'sub-8', name: 'Music Theory', description: 'Harmony, composition, and musical analysis.', icon: '🎵' }
];

export const TUTORS = [
  {
    id: 't-1',
    name: 'Dr. Sarah Chen',
    email: 'sarah.chen@tutorix.com',
    avatar: 'SC',
    profile: {
      qualifications: ["PhD in Applied Mathematics", "10+ years teaching experience", "Published author of 3 textbooks"],
      availability: {
        monday: ["09:00-12:00", "14:00-17:00"],
        wednesday: ["09:00-12:00"],
        friday: ["10:00-14:00"]
      },
      languages: ["English", "Mandarin"],
      experience: "12 years",
      bio: "Passionate about making math intuitive and accessible for all students. I believe every student can excel with the right guidance and methodology."
    },
    hourly_rate: 75.00,
    rating: 4.9,
    total_sessions: 342,
    subjects: ['sub-1', 'sub-2']
  },
  {
    id: 't-2',
    name: 'Marcus Vane',
    email: 'marcus.vane@tutorix.com',
    avatar: 'MV',
    profile: {
      qualifications: ["MSc in Theoretical Physics", "Ex-NASA Intern", "IIT Bombay Gold Medalist"],
      availability: {
        tuesday: ["10:00-15:00"],
        thursday: ["10:00-15:00"],
        saturday: ["09:00-13:00"]
      },
      languages: ["English", "Spanish"],
      experience: "8 years",
      bio: "Exploring the universe one equation at a time. My teaching style focuses on real-world applications and building deep conceptual understanding."
    },
    hourly_rate: 60.00,
    rating: 4.7,
    total_sessions: 218,
    subjects: ['sub-2', 'sub-3']
  },
  {
    id: 't-3',
    name: 'Prof. Aisha Patel',
    email: 'aisha.patel@tutorix.com',
    avatar: 'AP',
    profile: {
      qualifications: ["PhD in Computational Linguistics", "Cambridge University Fellow", "15 years in academia"],
      availability: {
        monday: ["11:00-16:00"],
        tuesday: ["11:00-16:00"],
        thursday: ["14:00-18:00"]
      },
      languages: ["English", "Hindi", "French"],
      experience: "15 years",
      bio: "Language and literature are windows to the world. I help students not just read, but truly understand and appreciate the written word."
    },
    hourly_rate: 65.00,
    rating: 4.8,
    total_sessions: 489,
    subjects: ['sub-4', 'sub-7']
  },
  {
    id: 't-4',
    name: 'Jake Morrison',
    email: 'jake.morrison@tutorix.com',
    avatar: 'JM',
    profile: {
      qualifications: ["MSc Computer Science (Stanford)", "Ex-Google Software Engineer", "Open Source Contributor"],
      availability: {
        monday: ["18:00-21:00"],
        wednesday: ["18:00-21:00"],
        friday: ["15:00-20:00"],
        sunday: ["10:00-15:00"]
      },
      languages: ["English"],
      experience: "6 years",
      bio: "From Silicon Valley to your screen. I teach programming and CS fundamentals with industry-relevant examples and hands-on projects."
    },
    hourly_rate: 85.00,
    rating: 4.9,
    total_sessions: 156,
    subjects: ['sub-5', 'sub-1']
  },
  {
    id: 't-5',
    name: 'Dr. Elena Rossi',
    email: 'elena.rossi@tutorix.com',
    avatar: 'ER',
    profile: {
      qualifications: ["PhD in Molecular Biology", "Published 20+ research papers", "Nobel Prize nominee lab alumni"],
      availability: {
        tuesday: ["08:00-12:00"],
        wednesday: ["14:00-18:00"],
        friday: ["08:00-12:00"]
      },
      languages: ["English", "Italian", "German"],
      experience: "10 years",
      bio: "Biology is the poetry of nature written in molecules. I bring complex biological concepts to life through visualization and storytelling."
    },
    hourly_rate: 70.00,
    rating: 4.6,
    total_sessions: 275,
    subjects: ['sub-6', 'sub-3']
  },
  {
    id: 't-6',
    name: 'Kenji Tanaka',
    email: 'kenji.tanaka@tutorix.com',
    avatar: 'KT',
    profile: {
      qualifications: ["MA in Music Composition (Juilliard)", "Professional Pianist", "Grammy-nominated arranger"],
      availability: {
        monday: ["13:00-18:00"],
        thursday: ["13:00-18:00"],
        saturday: ["10:00-16:00"]
      },
      languages: ["English", "Japanese"],
      experience: "9 years",
      bio: "Music theory doesn't have to be dry. I combine classical training with modern genres to make learning theory an exciting journey."
    },
    hourly_rate: 55.00,
    rating: 4.8,
    total_sessions: 198,
    subjects: ['sub-8']
  }
];

export const SESSIONS = [
  {
    id: 's-1',
    tutor_id: 't-1',
    student_id: 'st-1',
    subject_id: 'sub-1',
    date: '2026-04-10',
    start_time: '10:00',
    end_time: '11:00',
    status: 'completed'
  },
  {
    id: 's-2',
    tutor_id: 't-2',
    student_id: 'st-1',
    subject_id: 'sub-2',
    date: '2026-04-12',
    start_time: '10:00',
    end_time: '11:00',
    status: 'confirmed'
  },
  {
    id: 's-3',
    tutor_id: 't-4',
    student_id: 'st-1',
    subject_id: 'sub-5',
    date: '2026-04-14',
    start_time: '18:00',
    end_time: '19:00',
    status: 'pending'
  },
  {
    id: 's-4',
    tutor_id: 't-3',
    student_id: 'st-1',
    subject_id: 'sub-4',
    date: '2026-04-08',
    start_time: '11:00',
    end_time: '12:00',
    status: 'completed'
  }
];

export const REVIEWS = [
  { id: 'r-1', session_id: 's-1', tutor_id: 't-1', rating: 5, comment: 'Dr. Chen is amazing! She explained calculus so clearly. Best tutor I have ever had!', author: 'Alice J.' },
  { id: 'r-2', session_id: 's-4', tutor_id: 't-3', rating: 5, comment: 'Prof. Patel made Shakespeare come alive. Her passion for literature is truly infectious.', author: 'Alice J.' },
  { id: 'r-3', session_id: 's-2', tutor_id: 't-2', rating: 4, comment: 'Marcus explains physics concepts with great real-world examples. Highly recommend!', author: 'Bob K.' },
  { id: 'r-4', session_id: 's-3', tutor_id: 't-4', rating: 5, comment: 'Jake is fantastic at breaking down complex algorithms. Learned more in one session than a month of lectures.', author: 'Carol M.' },
  { id: 'r-5', session_id: 's-1', tutor_id: 't-5', rating: 4, comment: 'Dr. Rossi makes molecular biology fascinating with her stories from the lab.', author: 'Diana L.' },
  { id: 'r-6', session_id: 's-1', tutor_id: 't-6', rating: 5, comment: 'Kenji is incredibly talented. He taught me jazz harmony in a way I never understood before.', author: 'Eve S.' }
];

export const STATS = {
  totalTutors: 150,
  totalStudents: 2400,
  totalSessions: 18500,
  avgRating: 4.8
};
