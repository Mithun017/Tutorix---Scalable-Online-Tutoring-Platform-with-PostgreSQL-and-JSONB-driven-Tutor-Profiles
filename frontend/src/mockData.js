// Tutorix: Realistic Indian Mock Data matching PostgreSQL Schema

export const SUBJECTS = [
  { id: 'sub-1', name: 'Mathematics', description: 'JEE/NEET level algebra, calculus and coordinate geometry.', icon: '📐' },
  { id: 'sub-2', name: 'Physics', description: 'Mechanics, electrodynamics and modern physics for competitive exams.', icon: '⚛️' },
  { id: 'sub-3', name: 'Chemistry', description: 'Organic, inorganic and physical chemistry for JEE & NEET.', icon: '🧪' },
  { id: 'sub-4', name: 'English', description: 'Academic writing, grammar, and spoken English fluency.', icon: '📚' },
  { id: 'sub-5', name: 'Computer Science', description: 'DSA, Python, Java, and web development.', icon: '💻' },
  { id: 'sub-6', name: 'Biology', description: 'NEET Biology — Botany, Zoology, and Human Physiology.', icon: '🧬' },
  { id: 'sub-7', name: 'Accountancy', description: 'Financial accounting, partnerships, and company accounts for Commerce.', icon: '📊' },
  { id: 'sub-8', name: 'Hindi', description: 'Hindi sahitya, vyakaran, and creative writing.', icon: '🇮🇳' }
];

export const TUTORS = [
  {
    id: 't-1',
    name: 'Dr. Ananya Sharma',
    email: 'ananya.sharma@tutorix.in',
    avatar: 'AS',
    profile: {
      qualifications: ["PhD in Mathematics (IIT Delhi)", "12+ years teaching JEE Advanced", "Author of 'Calculus Made Simple'"],
      availability: {
        monday: ["09:00-12:00", "16:00-19:00"],
        wednesday: ["09:00-12:00"],
        friday: ["10:00-14:00"],
        saturday: ["08:00-11:00"]
      },
      languages: ["English", "Hindi"],
      experience: "12 years",
      bio: "IIT Delhi alumna with a passion for making mathematics intuitive. I've helped over 500 students crack JEE Advanced and clear competitive exams with top ranks."
    },
    hourly_rate: 1200,
    rating: 4.9,
    total_sessions: 2450,
    subjects: ['sub-1', 'sub-2']
  },
  {
    id: 't-2',
    name: 'Rajesh Iyer',
    email: 'rajesh.iyer@tutorix.in',
    avatar: 'RI',
    profile: {
      qualifications: ["MSc Physics (IISc Bangalore)", "Ex-ISRO Scientist", "10 years of tutoring experience"],
      availability: {
        tuesday: ["10:00-14:00"],
        thursday: ["10:00-14:00"],
        saturday: ["09:00-13:00"]
      },
      languages: ["English", "Tamil", "Hindi"],
      experience: "10 years",
      bio: "Former ISRO scientist who now dedicates his time to making physics understandable. My motto: if you can visualize it, you can solve it. Specializing in JEE & NEET Physics."
    },
    hourly_rate: 1000,
    rating: 4.8,
    total_sessions: 1820,
    subjects: ['sub-2', 'sub-3']
  },
  {
    id: 't-3',
    name: 'Prof. Meera Krishnan',
    email: 'meera.krishnan@tutorix.in',
    avatar: 'MK',
    profile: {
      qualifications: ["MA English Literature (JNU)", "Cambridge CELTA Certified", "Published poet and essayist"],
      availability: {
        monday: ["11:00-15:00"],
        tuesday: ["11:00-15:00"],
        thursday: ["14:00-18:00"]
      },
      languages: ["English", "Malayalam", "Hindi"],
      experience: "15 years",
      bio: "Language is the bridge between cultures. I've guided students through IELTS, TOEFL, and board exam preparation while nurturing a love for literature. JNU Gold Medalist."
    },
    hourly_rate: 900,
    rating: 4.7,
    total_sessions: 3100,
    subjects: ['sub-4', 'sub-8']
  },
  {
    id: 't-4',
    name: 'Arjun Mehta',
    email: 'arjun.mehta@tutorix.in',
    avatar: 'AM',
    profile: {
      qualifications: ["B.Tech CS (IIT Bombay)", "Ex-Google SDE", "Open Source Contributor — 10K+ GitHub stars"],
      availability: {
        monday: ["18:00-21:00"],
        wednesday: ["18:00-21:00"],
        friday: ["15:00-20:00"],
        sunday: ["10:00-15:00"]
      },
      languages: ["English", "Hindi", "Gujarati"],
      experience: "7 years",
      bio: "From IIT Bombay to Google to your screen. I teach DSA, competitive programming, and full-stack development with real-world projects. 200+ students placed at FAANG companies."
    },
    hourly_rate: 1500,
    rating: 4.9,
    total_sessions: 980,
    subjects: ['sub-5', 'sub-1']
  },
  {
    id: 't-5',
    name: 'Dr. Priya Deshmukh',
    email: 'priya.deshmukh@tutorix.in',
    avatar: 'PD',
    profile: {
      qualifications: ["MBBS + PhD Biochemistry (AIIMS Delhi)", "Published 25+ research papers", "NEET Mentor for 8 years"],
      availability: {
        tuesday: ["08:00-12:00"],
        wednesday: ["14:00-18:00"],
        friday: ["08:00-12:00"]
      },
      languages: ["English", "Marathi", "Hindi"],
      experience: "8 years",
      bio: "AIIMS topper turned educator. I make NEET Biology and Chemistry approachable with clinical case studies and mnemonics. Over 300 of my students are now practicing doctors."
    },
    hourly_rate: 1100,
    rating: 4.8,
    total_sessions: 1650,
    subjects: ['sub-6', 'sub-3']
  },
  {
    id: 't-6',
    name: 'CA Vikram Reddy',
    email: 'vikram.reddy@tutorix.in',
    avatar: 'VR',
    profile: {
      qualifications: ["Chartered Accountant (AIR 12)", "B.Com Honours (SRCC Delhi)", "Commerce coaching since 2018"],
      availability: {
        monday: ["13:00-17:00"],
        thursday: ["13:00-17:00"],
        saturday: ["10:00-16:00"]
      },
      languages: ["English", "Telugu", "Hindi"],
      experience: "6 years",
      bio: "CA with All India Rank 12. I simplify the world of accounts, taxation, and financial statements. My students consistently score 90+ in board exams and clear CA Foundation."
    },
    hourly_rate: 850,
    rating: 4.6,
    total_sessions: 1200,
    subjects: ['sub-7']
  },
  {
    id: 't-7',
    name: 'Neha Gupta',
    email: 'neha.gupta@tutorix.in',
    avatar: 'NG',
    profile: {
      qualifications: ["MSc Organic Chemistry (BHU)", "GATE AIR 45", "CSIR-NET qualified"],
      availability: {
        monday: ["07:00-10:00"],
        wednesday: ["07:00-10:00"],
        thursday: ["16:00-19:00"],
        saturday: ["08:00-12:00"]
      },
      languages: ["English", "Hindi"],
      experience: "5 years",
      bio: "Chemistry is not about memorizing reactions — it's about understanding mechanisms. I teach JEE, NEET, and GATE Chemistry with a focus on problem-solving strategies."
    },
    hourly_rate: 800,
    rating: 4.7,
    total_sessions: 890,
    subjects: ['sub-3', 'sub-6']
  },
  {
    id: 't-8',
    name: 'Prof. Siddharth Joshi',
    email: 'siddharth.joshi@tutorix.in',
    avatar: 'SJ',
    profile: {
      qualifications: ["M.Tech AI/ML (IIT Madras)", "Ex-Microsoft Research Intern", "Kaggle Grandmaster"],
      availability: {
        tuesday: ["17:00-21:00"],
        friday: ["17:00-21:00"],
        sunday: ["11:00-16:00"]
      },
      languages: ["English", "Hindi", "Kannada"],
      experience: "4 years",
      bio: "Kaggle Grandmaster and IIT Madras researcher. I teach machine learning, deep learning, and Python programming with hands-on Kaggle competitions and real datasets."
    },
    hourly_rate: 1400,
    rating: 4.9,
    total_sessions: 560,
    subjects: ['sub-5']
  }
];

export const SESSIONS = [
  {
    id: 's-1',
    tutor_id: 't-1',
    student_id: 'st-1',
    subject_id: 'sub-1',
    date: '2026-04-08',
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
    date: '2026-04-06',
    start_time: '11:00',
    end_time: '12:00',
    status: 'completed'
  },
  {
    id: 's-5',
    tutor_id: 't-5',
    student_id: 'st-1',
    subject_id: 'sub-6',
    date: '2026-04-15',
    start_time: '09:00',
    end_time: '10:00',
    status: 'confirmed'
  }
];

export const REVIEWS = [
  { id: 'r-1', session_id: 's-1', tutor_id: 't-1', rating: 5, comment: 'Ananya ma\'am ne calculus itna easy bana diya! JEE ke liye best teacher. 100% recommend! 🙏', author: 'Rohan S.' },
  { id: 'r-2', session_id: 's-4', tutor_id: 't-3', rating: 5, comment: 'Prof. Meera is phenomenal. My IELTS writing score jumped from 6 to 8 in just 4 sessions.', author: 'Priya M.' },
  { id: 'r-3', session_id: 's-2', tutor_id: 't-2', rating: 4, comment: 'Rajesh sir explains physics with amazing real-world examples from ISRO. Concepts become crystal clear.', author: 'Aditya K.' },
  { id: 'r-4', session_id: 's-3', tutor_id: 't-4', rating: 5, comment: 'Arjun bhaiya helped me crack my Google interview! His DSA teaching style is unmatched. Got placed at ₹45 LPA. 🎉', author: 'Sneha R.' },
  { id: 'r-5', session_id: 's-1', tutor_id: 't-5', rating: 5, comment: 'Dr. Priya made NEET Biology so interesting with clinical cases. Got AIR 340 thanks to her guidance!', author: 'Kavya N.' },
  { id: 'r-6', session_id: 's-1', tutor_id: 't-6', rating: 4, comment: 'Vikram sir made accountancy enjoyable. Scored 95 in boards. His CA Foundation tips are gold. 💯', author: 'Aryan P.' },
  { id: 'r-7', session_id: 's-1', tutor_id: 't-7', rating: 5, comment: 'Neha didi teaches organic chemistry mechanisms brilliantly. No more rote learning — just understanding!', author: 'Ishita D.' },
  { id: 'r-8', session_id: 's-1', tutor_id: 't-8', rating: 5, comment: 'Siddharth sir\'s ML course is better than most paid bootcamps. Became Kaggle Expert in 3 months! 🔥', author: 'Manish T.' }
];

export const STATS = {
  totalTutors: 320,
  totalStudents: 12500,
  totalSessions: 85000,
  avgRating: 4.8
};
