// Tutorix: Comprehensive Indian Mock Data — 40+ Tutors

export const SUBJECTS = [
  { id: 'sub-1', name: 'Mathematics', description: 'JEE/NEET level algebra, calculus and coordinate geometry.', icon: '📐' },
  { id: 'sub-2', name: 'Physics', description: 'Mechanics, electrodynamics and modern physics.', icon: '⚛️' },
  { id: 'sub-3', name: 'Chemistry', description: 'Organic, inorganic and physical chemistry.', icon: '🧪' },
  { id: 'sub-4', name: 'English', description: 'Academic writing, grammar, and IELTS/TOEFL.', icon: '📚' },
  { id: 'sub-5', name: 'Computer Science', description: 'DSA, Python, Java, and web development.', icon: '💻' },
  { id: 'sub-6', name: 'Biology', description: 'NEET Biology — Botany, Zoology, Physiology.', icon: '🧬' },
  { id: 'sub-7', name: 'Accountancy', description: 'Financial accounting and company accounts.', icon: '📊' },
  { id: 'sub-8', name: 'Hindi', description: 'Hindi sahitya, vyakaran, and creative writing.', icon: '🇮🇳' },
  { id: 'sub-9', name: 'Economics', description: 'Micro, Macro economics and Indian Economy.', icon: '💹' },
  { id: 'sub-10', name: 'History', description: 'Ancient, Medieval and Modern Indian History.', icon: '🏛️' },
  { id: 'sub-11', name: 'Political Science', description: 'Indian Polity, governance and IR for UPSC.', icon: '⚖️' },
  { id: 'sub-12', name: 'Music', description: 'Indian classical, Hindustani and Carnatic.', icon: '🎵' }
];

export const TUTORS = [
  // ===== MATHEMATICS (5) =====
  {
    id: 't-1', name: 'Dr. Ananya Sharma', email: 'ananya.sharma@tutorix.in', avatar: 'AS',
    profile: {
      qualifications: ["PhD Mathematics (IIT Delhi)", "12+ years JEE coaching", "Author — 'Calculus Made Simple'"],
      availability: { monday: ["09:00-12:00","16:00-19:00"], wednesday: ["09:00-12:00"], friday: ["10:00-14:00"], saturday: ["08:00-11:00"] },
      languages: ["English","Hindi"], experience: "12 years",
      bio: "IIT Delhi alumna with a passion for making mathematics intuitive. Helped 500+ students crack JEE Advanced with top ranks."
    },
    hourly_rate: 1200, rating: 4.9, total_sessions: 2450, subjects: ['sub-1','sub-2']
  },
  {
    id: 't-9', name: 'Rohit Bansal', email: 'rohit.bansal@tutorix.in', avatar: 'RB',
    profile: {
      qualifications: ["MSc Mathematics (DU)", "8 years board exam coaching", "CBSE paper evaluator"],
      availability: { monday: ["07:00-10:00"], wednesday: ["07:00-10:00"], friday: ["07:00-10:00"] },
      languages: ["English","Hindi","Punjabi"], experience: "8 years",
      bio: "Specialist in CBSE and ICSE board preparation. My students consistently score 95+ in class 10 and 12 mathematics."
    },
    hourly_rate: 700, rating: 4.6, total_sessions: 1800, subjects: ['sub-1']
  },
  {
    id: 't-10', name: 'Sunita Devi', email: 'sunita.devi@tutorix.in', avatar: 'SD',
    profile: {
      qualifications: ["MSc Applied Maths (BHU)", "Vedic Mathematics certified", "12 years experience"],
      availability: { tuesday: ["08:00-12:00"], thursday: ["08:00-12:00"], saturday: ["09:00-12:00"] },
      languages: ["Hindi","English"], experience: "12 years",
      bio: "I teach Vedic Mathematics shortcuts alongside regular curriculum. Perfect for students who want speed and accuracy in competitive exams."
    },
    hourly_rate: 600, rating: 4.7, total_sessions: 2100, subjects: ['sub-1']
  },
  {
    id: 't-11', name: 'Prof. K. Ramanujan', email: 'k.ramanujan@tutorix.in', avatar: 'KR',
    profile: {
      qualifications: ["PhD Pure Mathematics (IMSc Chennai)", "15+ years university teaching", "Olympiad coach"],
      availability: { monday: ["14:00-18:00"], wednesday: ["14:00-18:00"], saturday: ["10:00-14:00"] },
      languages: ["English","Tamil","Hindi"], experience: "15 years",
      bio: "International Mathematical Olympiad coach. I prepare students for RMO, INMO, and IMO. Over 20 of my students have represented India internationally."
    },
    hourly_rate: 1500, rating: 4.9, total_sessions: 980, subjects: ['sub-1']
  },
  {
    id: 't-12', name: 'Deepa Nair', email: 'deepa.nair@tutorix.in', avatar: 'DN',
    profile: {
      qualifications: ["MTech (IIT Madras)", "SAT/GRE Math specialist", "6 years exp"],
      availability: { tuesday: ["17:00-21:00"], thursday: ["17:00-21:00"], sunday: ["10:00-14:00"] },
      languages: ["English","Malayalam","Hindi"], experience: "6 years",
      bio: "Specialist in SAT, GRE, and GMAT quantitative sections. Average score improvement of 150+ points for GRE students."
    },
    hourly_rate: 1100, rating: 4.8, total_sessions: 650, subjects: ['sub-1']
  },
  // ===== PHYSICS (5) =====
  {
    id: 't-2', name: 'Rajesh Iyer', email: 'rajesh.iyer@tutorix.in', avatar: 'RI',
    profile: {
      qualifications: ["MSc Physics (IISc Bangalore)", "Ex-ISRO Scientist", "10 years tutoring"],
      availability: { tuesday: ["10:00-14:00"], thursday: ["10:00-14:00"], saturday: ["09:00-13:00"] },
      languages: ["English","Tamil","Hindi"], experience: "10 years",
      bio: "Former ISRO scientist dedicated to making physics understandable. My motto: if you can visualize it, you can solve it. JEE & NEET Physics specialist."
    },
    hourly_rate: 1000, rating: 4.8, total_sessions: 1820, subjects: ['sub-2','sub-3']
  },
  {
    id: 't-13', name: 'Dr. Farhan Qureshi', email: 'farhan.qureshi@tutorix.in', avatar: 'FQ',
    profile: {
      qualifications: ["PhD Quantum Physics (TIFR Mumbai)", "8 years JEE Advanced coaching", "Research papers: 15+"],
      availability: { monday: ["10:00-14:00"], wednesday: ["10:00-14:00"], friday: ["10:00-14:00"] },
      languages: ["English","Urdu","Hindi"], experience: "8 years",
      bio: "TIFR researcher turned educator. I specialize in Modern Physics and Electrodynamics for JEE Advanced. Concept-first approach — no rote learning."
    },
    hourly_rate: 1100, rating: 4.7, total_sessions: 920, subjects: ['sub-2']
  },
  {
    id: 't-14', name: 'Lakshmi Venkatesh', email: 'lakshmi.v@tutorix.in', avatar: 'LV',
    profile: {
      qualifications: ["MSc Physics (IIT Kanpur)", "KVPY Fellow", "7 years coaching"],
      availability: { tuesday: ["15:00-19:00"], thursday: ["15:00-19:00"], saturday: ["10:00-14:00"] },
      languages: ["English","Telugu","Hindi"], experience: "7 years",
      bio: "KVPY fellow from IIT Kanpur. I focus on building strong fundamentals in mechanics and optics. Interactive teaching with simulations and experiments."
    },
    hourly_rate: 850, rating: 4.6, total_sessions: 1100, subjects: ['sub-2']
  },
  {
    id: 't-15', name: 'Amit Saxena', email: 'amit.saxena@tutorix.in', avatar: 'AX',
    profile: {
      qualifications: ["MTech Nuclear Physics (BARC)", "Ex-DRDO scientist", "9 years experience"],
      availability: { monday: ["17:00-20:00"], wednesday: ["17:00-20:00"], friday: ["17:00-20:00"] },
      languages: ["English","Hindi"], experience: "9 years",
      bio: "Former DRDO scientist specializing in nuclear and particle physics. I make the toughest JEE physics problems feel solvable through structured problem-solving."
    },
    hourly_rate: 950, rating: 4.8, total_sessions: 780, subjects: ['sub-2','sub-1']
  },
  {
    id: 't-16', name: 'Preethi Suresh', email: 'preethi.s@tutorix.in', avatar: 'PS',
    profile: {
      qualifications: ["MSc Astrophysics (IUCAA Pune)", "Science communicator", "5 years tutoring"],
      availability: { tuesday: ["08:00-11:00"], saturday: ["08:00-12:00"], sunday: ["10:00-14:00"] },
      languages: ["English","Kannada","Hindi"], experience: "5 years",
      bio: "Astrophysicist who makes physics exciting through real cosmic examples. From black holes to simple harmonic motion — I make it all click!"
    },
    hourly_rate: 750, rating: 4.7, total_sessions: 560, subjects: ['sub-2']
  },
  // ===== CHEMISTRY (4) =====
  {
    id: 't-7', name: 'Neha Gupta', email: 'neha.gupta@tutorix.in', avatar: 'NG',
    profile: {
      qualifications: ["MSc Organic Chemistry (BHU)", "GATE AIR 45", "CSIR-NET qualified"],
      availability: { monday: ["07:00-10:00"], wednesday: ["07:00-10:00"], thursday: ["16:00-19:00"], saturday: ["08:00-12:00"] },
      languages: ["English","Hindi"], experience: "5 years",
      bio: "Chemistry is not about memorizing reactions — it's about understanding mechanisms. JEE, NEET, and GATE Chemistry with a focus on problem-solving."
    },
    hourly_rate: 800, rating: 4.7, total_sessions: 890, subjects: ['sub-3','sub-6']
  },
  {
    id: 't-17', name: 'Dr. Kavita Rao', email: 'kavita.rao@tutorix.in', avatar: 'KV',
    profile: {
      qualifications: ["PhD Inorganic Chemistry (IIT Bombay)", "10+ years NEET coaching", "Textbook reviewer"],
      availability: { monday: ["11:00-15:00"], wednesday: ["11:00-15:00"], friday: ["11:00-15:00"] },
      languages: ["English","Marathi","Hindi"], experience: "10 years",
      bio: "IIT Bombay PhD with a gift for making inorganic chemistry logical. My periodic table tricks and coordination chemistry shortcuts are famous among my students."
    },
    hourly_rate: 950, rating: 4.8, total_sessions: 1450, subjects: ['sub-3']
  },
  {
    id: 't-18', name: 'Suresh Pillai', email: 'suresh.pillai@tutorix.in', avatar: 'SP',
    profile: {
      qualifications: ["MSc Physical Chemistry (CUSAT)", "12 years coaching", "State topper mentor"],
      availability: { tuesday: ["09:00-13:00"], thursday: ["09:00-13:00"], saturday: ["09:00-12:00"] },
      languages: ["English","Malayalam","Tamil"], experience: "12 years",
      bio: "Physical chemistry made easy! Thermodynamics, kinetics, and electrochemistry explained with real-life parallels. 95% pass rate in NEET Chemistry."
    },
    hourly_rate: 750, rating: 4.5, total_sessions: 2200, subjects: ['sub-3']
  },
  {
    id: 't-19', name: 'Tanvi Agarwal', email: 'tanvi.ag@tutorix.in', avatar: 'TA',
    profile: {
      qualifications: ["BTech Chemical Engineering (NIT Trichy)", "JEE AIR 320", "4 years coaching"],
      availability: { monday: ["18:00-21:00"], thursday: ["18:00-21:00"], sunday: ["09:00-13:00"] },
      languages: ["English","Hindi","Bengali"], experience: "4 years",
      bio: "JEE AIR 320 holder. I teach chemistry with an engineering mindset — practical, efficient, and exam-focused. Specialist in organic reaction mechanisms."
    },
    hourly_rate: 700, rating: 4.6, total_sessions: 480, subjects: ['sub-3','sub-1']
  },
  // ===== ENGLISH (3) =====
  {
    id: 't-3', name: 'Prof. Meera Krishnan', email: 'meera.krishnan@tutorix.in', avatar: 'MK',
    profile: {
      qualifications: ["MA English Literature (JNU)", "Cambridge CELTA Certified", "Published poet"],
      availability: { monday: ["11:00-15:00"], tuesday: ["11:00-15:00"], thursday: ["14:00-18:00"] },
      languages: ["English","Malayalam","Hindi"], experience: "15 years",
      bio: "JNU Gold Medalist. IELTS, TOEFL, and board exam prep specialist. I nurture a love for literature alongside exam excellence."
    },
    hourly_rate: 900, rating: 4.7, total_sessions: 3100, subjects: ['sub-4','sub-8']
  },
  {
    id: 't-20', name: 'Jennifer D\'Souza', email: 'jennifer.ds@tutorix.in', avatar: 'JD',
    profile: {
      qualifications: ["MA English (St. Xavier's Mumbai)", "British Council certified", "10 years spoken English"],
      availability: { monday: ["08:00-11:00"], wednesday: ["08:00-11:00"], friday: ["08:00-11:00"] },
      languages: ["English","Hindi","Konkani"], experience: "10 years",
      bio: "Spoken English and personality development coach. I've trained 1000+ professionals for MNC interviews and business communication."
    },
    hourly_rate: 650, rating: 4.5, total_sessions: 2800, subjects: ['sub-4']
  },
  {
    id: 't-21', name: 'Arun Bhatia', email: 'arun.bhatia@tutorix.in', avatar: 'AB',
    profile: {
      qualifications: ["MPhil English (Jadavpur University)", "IELTS Band 9 holder", "Published novelist"],
      availability: { tuesday: ["16:00-20:00"], thursday: ["16:00-20:00"], saturday: ["11:00-15:00"] },
      languages: ["English","Hindi","Bengali"], experience: "8 years",
      bio: "IELTS Band 9 achiever and published author. I prepare students for IELTS, TOEFL, PTE, and GRE verbal with proven score-boosting strategies."
    },
    hourly_rate: 800, rating: 4.8, total_sessions: 1650, subjects: ['sub-4']
  },
  // ===== COMPUTER SCIENCE (5) =====
  {
    id: 't-4', name: 'Arjun Mehta', email: 'arjun.mehta@tutorix.in', avatar: 'AM',
    profile: {
      qualifications: ["BTech CS (IIT Bombay)", "Ex-Google SDE", "Open Source — 10K+ GitHub stars"],
      availability: { monday: ["18:00-21:00"], wednesday: ["18:00-21:00"], friday: ["15:00-20:00"], sunday: ["10:00-15:00"] },
      languages: ["English","Hindi","Gujarati"], experience: "7 years",
      bio: "From IIT Bombay to Google. I teach DSA, competitive programming, and full-stack development. 200+ students placed at FAANG companies."
    },
    hourly_rate: 1500, rating: 4.9, total_sessions: 980, subjects: ['sub-5','sub-1']
  },
  {
    id: 't-8', name: 'Prof. Siddharth Joshi', email: 'siddharth.joshi@tutorix.in', avatar: 'SJ',
    profile: {
      qualifications: ["MTech AI/ML (IIT Madras)", "Ex-Microsoft Research", "Kaggle Grandmaster"],
      availability: { tuesday: ["17:00-21:00"], friday: ["17:00-21:00"], sunday: ["11:00-16:00"] },
      languages: ["English","Hindi","Kannada"], experience: "4 years",
      bio: "Kaggle Grandmaster and IIT Madras researcher. Machine learning, deep learning, and Python with hands-on Kaggle competitions."
    },
    hourly_rate: 1400, rating: 4.9, total_sessions: 560, subjects: ['sub-5']
  },
  {
    id: 't-22', name: 'Divya Menon', email: 'divya.menon@tutorix.in', avatar: 'DM',
    profile: {
      qualifications: ["BTech CS (NIT Calicut)", "Ex-Amazon SDE-2", "Full Stack Developer"],
      availability: { monday: ["19:00-22:00"], wednesday: ["19:00-22:00"], saturday: ["10:00-14:00"] },
      languages: ["English","Malayalam","Hindi"], experience: "5 years",
      bio: "Ex-Amazon engineer. I teach React, Node.js, and system design with real-world projects. My students have landed jobs at Flipkart, Razorpay, and CRED."
    },
    hourly_rate: 1200, rating: 4.8, total_sessions: 720, subjects: ['sub-5']
  },
  {
    id: 't-23', name: 'Rahul Verma', email: 'rahul.verma@tutorix.in', avatar: 'RV',
    profile: {
      qualifications: ["MCA (NIT Warangal)", "Competitive programming — Codeforces Master", "6 years coaching"],
      availability: { tuesday: ["06:00-09:00"], thursday: ["06:00-09:00"], sunday: ["06:00-10:00"] },
      languages: ["English","Hindi"], experience: "6 years",
      bio: "Codeforces Master rated programmer. I coach students for ICPC, Google Code Jam, and placement DSA rounds. Early morning batches for serious coders."
    },
    hourly_rate: 900, rating: 4.7, total_sessions: 1100, subjects: ['sub-5','sub-1']
  },
  {
    id: 't-24', name: 'Pooja Sharma', email: 'pooja.sharma@tutorix.in', avatar: 'PO',
    profile: {
      qualifications: ["BTech IT (DTU)", "Python & Data Science specialist", "Ex-Wipro trainer"],
      availability: { monday: ["10:00-13:00"], wednesday: ["10:00-13:00"], friday: ["10:00-13:00"] },
      languages: ["English","Hindi","Punjabi"], experience: "5 years",
      bio: "Python programming from zero to hero! I teach beginners, school students, and career-changers. Data Science and automation made simple."
    },
    hourly_rate: 600, rating: 4.5, total_sessions: 1500, subjects: ['sub-5']
  },
  // ===== BIOLOGY (4) =====
  {
    id: 't-5', name: 'Dr. Priya Deshmukh', email: 'priya.deshmukh@tutorix.in', avatar: 'PD',
    profile: {
      qualifications: ["MBBS + PhD Biochemistry (AIIMS Delhi)", "Published 25+ papers", "NEET Mentor 8 years"],
      availability: { tuesday: ["08:00-12:00"], wednesday: ["14:00-18:00"], friday: ["08:00-12:00"] },
      languages: ["English","Marathi","Hindi"], experience: "8 years",
      bio: "AIIMS topper turned educator. NEET Biology with clinical case studies and mnemonics. Over 300 of my students are now practicing doctors."
    },
    hourly_rate: 1100, rating: 4.8, total_sessions: 1650, subjects: ['sub-6','sub-3']
  },
  {
    id: 't-25', name: 'Dr. Anand Kumar', email: 'anand.kumar@tutorix.in', avatar: 'AK',
    profile: {
      qualifications: ["MBBS (JIPMER)", "MD Physiology", "12 years NEET coaching"],
      availability: { monday: ["06:00-10:00"], wednesday: ["06:00-10:00"], friday: ["06:00-10:00"] },
      languages: ["English","Tamil","Hindi"], experience: "12 years",
      bio: "JIPMER alumnus with 12 years of NEET coaching experience. Human Physiology is my forte. I use clinical correlations that make concepts unforgettable."
    },
    hourly_rate: 1000, rating: 4.7, total_sessions: 2800, subjects: ['sub-6']
  },
  {
    id: 't-26', name: 'Swati Kulkarni', email: 'swati.kulkarni@tutorix.in', avatar: 'SK',
    profile: {
      qualifications: ["MSc Botany (Pune University)", "CSIR-NET JRF", "7 years teaching"],
      availability: { tuesday: ["14:00-18:00"], thursday: ["14:00-18:00"], saturday: ["08:00-12:00"] },
      languages: ["English","Marathi","Hindi"], experience: "7 years",
      bio: "Botany specialist for NEET and UPSC. My plant biology diagrams and ecology flowcharts are shared across coaching WhatsApp groups!"
    },
    hourly_rate: 650, rating: 4.6, total_sessions: 940, subjects: ['sub-6']
  },
  {
    id: 't-27', name: 'Dr. Ravi Shankar', email: 'ravi.shankar@tutorix.in', avatar: 'RS',
    profile: {
      qualifications: ["PhD Genetics (JNU)", "Post-doc (Harvard Medical School)", "Research scientist"],
      availability: { monday: ["20:00-22:00"], wednesday: ["20:00-22:00"], sunday: ["09:00-13:00"] },
      languages: ["English","Hindi"], experience: "6 years",
      bio: "Harvard-trained geneticist. I teach advanced biology, molecular genetics, and biotechnology for NEET, GATE, and MSc entrance exams."
    },
    hourly_rate: 1300, rating: 4.9, total_sessions: 420, subjects: ['sub-6','sub-3']
  },
  // ===== ACCOUNTANCY (3) =====
  {
    id: 't-6', name: 'CA Vikram Reddy', email: 'vikram.reddy@tutorix.in', avatar: 'VR',
    profile: {
      qualifications: ["Chartered Accountant (AIR 12)", "BCom Honours (SRCC)", "Commerce coaching since 2018"],
      availability: { monday: ["13:00-17:00"], thursday: ["13:00-17:00"], saturday: ["10:00-16:00"] },
      languages: ["English","Telugu","Hindi"], experience: "6 years",
      bio: "CA with All India Rank 12. I simplify accounts, taxation, and financial statements. Students score 90+ in boards and clear CA Foundation."
    },
    hourly_rate: 850, rating: 4.6, total_sessions: 1200, subjects: ['sub-7']
  },
  {
    id: 't-28', name: 'CA Nisha Agarwal', email: 'nisha.ag@tutorix.in', avatar: 'NA',
    profile: {
      qualifications: ["CA + CMA (Cost Accountant)", "MCom (Calcutta University)", "8 years coaching"],
      availability: { tuesday: ["10:00-14:00"], thursday: ["10:00-14:00"], saturday: ["10:00-14:00"] },
      languages: ["English","Hindi","Bengali"], experience: "8 years",
      bio: "Dual qualified CA + CMA. I cover the full commerce spectrum — Accountancy, Cost Accounting, and Business Studies for class 11, 12, and CA Foundation."
    },
    hourly_rate: 750, rating: 4.7, total_sessions: 1600, subjects: ['sub-7','sub-9']
  },
  {
    id: 't-29', name: 'Manoj Tiwari', email: 'manoj.tiwari@tutorix.in', avatar: 'MT',
    profile: {
      qualifications: ["MCom (Lucknow University)", "15 years board coaching", "Commerce HOD"],
      availability: { monday: ["07:00-11:00"], wednesday: ["07:00-11:00"], friday: ["07:00-11:00"] },
      languages: ["Hindi","English"], experience: "15 years",
      bio: "15 years of dedicated commerce teaching. I explain accountancy in simple Hindi for students from UP and Bihar who find English textbooks challenging."
    },
    hourly_rate: 500, rating: 4.5, total_sessions: 3200, subjects: ['sub-7']
  },
  // ===== ECONOMICS (3) =====
  {
    id: 't-30', name: 'Dr. Raghav Menon', email: 'raghav.menon@tutorix.in', avatar: 'RM',
    profile: {
      qualifications: ["PhD Economics (DSE Delhi)", "UPSC Economics optional coach", "10 years exp"],
      availability: { monday: ["14:00-18:00"], wednesday: ["14:00-18:00"], friday: ["14:00-18:00"] },
      languages: ["English","Hindi","Malayalam"], experience: "10 years",
      bio: "Delhi School of Economics PhD. I coach UPSC aspirants for Economics optional and teach class 11-12 Economics with real Indian case studies."
    },
    hourly_rate: 900, rating: 4.8, total_sessions: 1350, subjects: ['sub-9']
  },
  {
    id: 't-31', name: 'Shreya Chatterjee', email: 'shreya.c@tutorix.in', avatar: 'SC',
    profile: {
      qualifications: ["MA Economics (Presidency Kolkata)", "RBI Grade B qualified", "6 years coaching"],
      availability: { tuesday: ["16:00-20:00"], thursday: ["16:00-20:00"], sunday: ["10:00-14:00"] },
      languages: ["English","Bengali","Hindi"], experience: "6 years",
      bio: "RBI Grade B qualified economist. Indian Economy, monetary policy, and budget analysis are my strength areas. Perfect for UPSC and banking exams."
    },
    hourly_rate: 700, rating: 4.6, total_sessions: 880, subjects: ['sub-9','sub-11']
  },
  {
    id: 't-32', name: 'Karthik Subramanian', email: 'karthik.s@tutorix.in', avatar: 'KS',
    profile: {
      qualifications: ["MBA Finance (IIM Ahmedabad)", "Ex-McKinsey consultant", "4 years tutoring"],
      availability: { monday: ["20:00-22:00"], friday: ["20:00-22:00"], sunday: ["16:00-20:00"] },
      languages: ["English","Tamil","Hindi"], experience: "4 years",
      bio: "IIM-A alumnus and ex-McKinsey. I teach economics with a business lens — perfect for MBA aspirants and CA students."
    },
    hourly_rate: 1400, rating: 4.9, total_sessions: 380, subjects: ['sub-9','sub-7']
  },
  // ===== HISTORY (3) =====
  {
    id: 't-33', name: 'Prof. Irfan Habib', email: 'irfan.habib@tutorix.in', avatar: 'IH',
    profile: {
      qualifications: ["PhD Medieval History (AMU)", "20+ years university teaching", "Published historian"],
      availability: { monday: ["10:00-13:00"], wednesday: ["10:00-13:00"], friday: ["10:00-13:00"] },
      languages: ["English","Urdu","Hindi"], experience: "20 years",
      bio: "Veteran historian with 20 years of university teaching. I bring history alive through storytelling. UPSC History optional and humanities specialist."
    },
    hourly_rate: 800, rating: 4.7, total_sessions: 1800, subjects: ['sub-10']
  },
  {
    id: 't-34', name: 'Gayatri Deshpande', email: 'gayatri.d@tutorix.in', avatar: 'GD',
    profile: {
      qualifications: ["MA History (Fergusson College Pune)", "UPSC CSE 2019 — AIR 156", "4 years coaching"],
      availability: { tuesday: ["09:00-13:00"], thursday: ["09:00-13:00"], saturday: ["09:00-12:00"] },
      languages: ["English","Marathi","Hindi"], experience: "4 years",
      bio: "IAS officer turned part-time mentor (AIR 156). I teach History and Political Science for UPSC with answer-writing focus and PYQ analysis."
    },
    hourly_rate: 1200, rating: 4.9, total_sessions: 520, subjects: ['sub-10','sub-11']
  },
  {
    id: 't-35', name: 'Balraj Singh Sidhu', email: 'balraj.s@tutorix.in', avatar: 'BS',
    profile: {
      qualifications: ["MA Modern History (PU Chandigarh)", "NTA-NET qualified", "8 years school teaching"],
      availability: { monday: ["15:00-18:00"], wednesday: ["15:00-18:00"], saturday: ["10:00-14:00"] },
      languages: ["English","Punjabi","Hindi"], experience: "8 years",
      bio: "History teacher who uses maps, timelines, and documentaries to teach. CBSE and ICSE board specialist for class 9-12 history."
    },
    hourly_rate: 550, rating: 4.5, total_sessions: 1400, subjects: ['sub-10']
  },
  // ===== POLITICAL SCIENCE (2) =====
  {
    id: 't-36', name: 'Adv. Prashant Bhushan', email: 'prashant.b@tutorix.in', avatar: 'PB',
    profile: {
      qualifications: ["LLM Constitutional Law (NLU Delhi)", "Practicing Supreme Court advocate", "UPSC coach"],
      availability: { tuesday: ["19:00-22:00"], saturday: ["14:00-18:00"], sunday: ["14:00-18:00"] },
      languages: ["English","Hindi"], experience: "7 years",
      bio: "Supreme Court advocate teaching Indian Polity and Constitutional Law. I connect every article of the constitution to real cases and current affairs."
    },
    hourly_rate: 1000, rating: 4.8, total_sessions: 650, subjects: ['sub-11']
  },
  {
    id: 't-37', name: 'Dr. Smita Guha', email: 'smita.guha@tutorix.in', avatar: 'SG',
    profile: {
      qualifications: ["PhD Political Science (JNU)", "12 years UPSC mentoring", "Author of IR textbook"],
      availability: { monday: ["09:00-12:00"], wednesday: ["09:00-12:00"], friday: ["09:00-12:00"] },
      languages: ["English","Bengali","Hindi"], experience: "12 years",
      bio: "JNU professor specializing in International Relations and Comparative Politics. Over 50 of my students have cleared UPSC CSE."
    },
    hourly_rate: 850, rating: 4.7, total_sessions: 1900, subjects: ['sub-11','sub-10']
  },
  // ===== HINDI (2) =====
  {
    id: 't-38', name: 'Dr. Vinod Kumar Mishra', email: 'vinod.mishra@tutorix.in', avatar: 'VM',
    profile: {
      qualifications: ["PhD Hindi Sahitya (BHU)", "Sahitya Akademi award nominee", "25 years teaching"],
      availability: { monday: ["08:00-11:00"], wednesday: ["08:00-11:00"], friday: ["08:00-11:00"], saturday: ["08:00-11:00"] },
      languages: ["Hindi","English","Sanskrit"], experience: "25 years",
      bio: "BHU ke vari-shtha Hindi professor. Main CBSE, ICSE aur UPSC Hindi ke liye padhaata hoon. Kavita, kahani aur nibandh — sab kuch saral bhasha mein."
    },
    hourly_rate: 500, rating: 4.6, total_sessions: 4200, subjects: ['sub-8']
  },
  {
    id: 't-39', name: 'Ritu Chauhan', email: 'ritu.chauhan@tutorix.in', avatar: 'RC',
    profile: {
      qualifications: ["MA Hindi (Allahabad University)", "CTET qualified", "7 years experience"],
      availability: { tuesday: ["07:00-10:00"], thursday: ["07:00-10:00"], saturday: ["07:00-10:00"] },
      languages: ["Hindi","English"], experience: "7 years",
      bio: "CTET qualified Hindi teacher. I specialize in creative writing, Hindi grammar (vyakaran), and letter/essay writing for board exams."
    },
    hourly_rate: 450, rating: 4.5, total_sessions: 1800, subjects: ['sub-8']
  },
  // ===== MUSIC (2) =====
  {
    id: 't-40', name: 'Pandit Shivkumar Das', email: 'shivkumar.d@tutorix.in', avatar: 'SD',
    profile: {
      qualifications: ["Sangeet Visharad (Bhatkhande)", "40 years Hindustani Classical", "Disciple of Pt. Jasraj"],
      availability: { tuesday: ["06:00-09:00"], thursday: ["06:00-09:00"], sunday: ["06:00-10:00"] },
      languages: ["Hindi","English","Sanskrit"], experience: "40 years",
      bio: "Disciple of the legendary Pt. Jasraj. I teach Hindustani classical vocal — raag, taal, and bandish. From beginners to Sangeet Prabhakar exam preparation."
    },
    hourly_rate: 800, rating: 4.9, total_sessions: 5600, subjects: ['sub-12']
  },
  {
    id: 't-41', name: 'Vidya Shankar', email: 'vidya.shankar@tutorix.in', avatar: 'VS',
    profile: {
      qualifications: ["MA Carnatic Music (Madras University)", "Veena artist", "YouTube — 500K subscribers"],
      availability: { monday: ["16:00-19:00"], wednesday: ["16:00-19:00"], saturday: ["09:00-13:00"] },
      languages: ["English","Tamil","Hindi"], experience: "8 years",
      bio: "Carnatic music and Veena teacher with 500K YouTube subscribers. I teach both theory and instrumental. Students from India, USA, and UK."
    },
    hourly_rate: 700, rating: 4.8, total_sessions: 1350, subjects: ['sub-12']
  }
];

export const SESSIONS = [
  { id: 's-1', tutor_id: 't-1', student_id: 'st-1', subject_id: 'sub-1', date: '2026-04-03', start_time: '10:00', end_time: '11:00', status: 'completed' },
  { id: 's-2', tutor_id: 't-2', student_id: 'st-1', subject_id: 'sub-2', date: '2026-04-05', start_time: '10:00', end_time: '11:00', status: 'completed' },
  { id: 's-3', tutor_id: 't-4', student_id: 'st-1', subject_id: 'sub-5', date: '2026-04-06', start_time: '18:00', end_time: '19:00', status: 'completed' },
  { id: 's-4', tutor_id: 't-3', student_id: 'st-1', subject_id: 'sub-4', date: '2026-04-07', start_time: '11:00', end_time: '12:00', status: 'completed' },
  { id: 's-5', tutor_id: 't-5', student_id: 'st-1', subject_id: 'sub-6', date: '2026-04-08', start_time: '09:00', end_time: '10:00', status: 'completed' },
  { id: 's-6', tutor_id: 't-1', student_id: 'st-1', subject_id: 'sub-1', date: '2026-04-10', start_time: '16:00', end_time: '17:00', status: 'confirmed' },
  { id: 's-7', tutor_id: 't-8', student_id: 'st-1', subject_id: 'sub-5', date: '2026-04-11', start_time: '17:00', end_time: '18:00', status: 'confirmed' },
  { id: 's-8', tutor_id: 't-6', student_id: 'st-1', subject_id: 'sub-7', date: '2026-04-12', start_time: '13:00', end_time: '14:00', status: 'confirmed' },
  { id: 's-9', tutor_id: 't-13', student_id: 'st-1', subject_id: 'sub-2', date: '2026-04-14', start_time: '10:00', end_time: '11:00', status: 'pending' },
  { id: 's-10', tutor_id: 't-22', student_id: 'st-1', subject_id: 'sub-5', date: '2026-04-15', start_time: '19:00', end_time: '20:00', status: 'pending' },
  { id: 's-11', tutor_id: 't-30', student_id: 'st-1', subject_id: 'sub-9', date: '2026-04-16', start_time: '14:00', end_time: '15:00', status: 'pending' },
  { id: 's-12', tutor_id: 't-40', student_id: 'st-1', subject_id: 'sub-12', date: '2026-04-09', start_time: '06:00', end_time: '07:00', status: 'completed' },
  { id: 's-13', tutor_id: 't-34', student_id: 'st-1', subject_id: 'sub-10', date: '2026-04-04', start_time: '09:00', end_time: '10:00', status: 'completed' },
  { id: 's-14', tutor_id: 't-7', student_id: 'st-1', subject_id: 'sub-3', date: '2026-04-17', start_time: '07:00', end_time: '08:00', status: 'pending' },
  { id: 's-15', tutor_id: 't-36', student_id: 'st-1', subject_id: 'sub-11', date: '2026-04-05', start_time: '19:00', end_time: '20:00', status: 'completed' }
];

export const REVIEWS = [
  { id: 'r-1', session_id: 's-1', tutor_id: 't-1', rating: 5, comment: 'Ananya ma\'am ne calculus itna easy bana diya! JEE ke liye best teacher. 100% recommend! 🙏', author: 'Rohan S.' },
  { id: 'r-2', session_id: 's-4', tutor_id: 't-3', rating: 5, comment: 'Prof. Meera is phenomenal. My IELTS writing score jumped from 6 to 8 in just 4 sessions.', author: 'Priya M.' },
  { id: 'r-3', session_id: 's-2', tutor_id: 't-2', rating: 4, comment: 'Rajesh sir explains physics with amazing real-world examples from ISRO. Concepts become crystal clear.', author: 'Aditya K.' },
  { id: 'r-4', session_id: 's-3', tutor_id: 't-4', rating: 5, comment: 'Arjun bhaiya helped me crack my Google interview! His DSA teaching style is unmatched. Got placed at ₹45 LPA. 🎉', author: 'Sneha R.' },
  { id: 'r-5', session_id: 's-5', tutor_id: 't-5', rating: 5, comment: 'Dr. Priya made NEET Biology so interesting with clinical cases. Got AIR 340 thanks to her guidance!', author: 'Kavya N.' },
  { id: 'r-6', session_id: 's-1', tutor_id: 't-6', rating: 4, comment: 'Vikram sir made accountancy enjoyable. Scored 95 in boards. His CA Foundation tips are gold. 💯', author: 'Aryan P.' },
  { id: 'r-7', session_id: 's-1', tutor_id: 't-7', rating: 5, comment: 'Neha didi teaches organic chemistry mechanisms brilliantly. No more rote learning — just understanding!', author: 'Ishita D.' },
  { id: 'r-8', session_id: 's-1', tutor_id: 't-8', rating: 5, comment: 'Siddharth sir\'s ML course is better than most paid bootcamps. Became Kaggle Expert in 3 months! 🔥', author: 'Manish T.' },
  { id: 'r-9', session_id: 's-12', tutor_id: 't-40', rating: 5, comment: 'Pandit ji ka raag teaching adbhut hai. 6 months mein Sangeet Visharad pass ho gaya! 🎵', author: 'Deepika R.' },
  { id: 'r-10', session_id: 's-13', tutor_id: 't-34', rating: 5, comment: 'Gayatri ma\'am is literally an IAS officer teaching us! Her answer writing tips are invaluable for UPSC.', author: 'Vikash K.' },
  { id: 'r-11', session_id: 's-1', tutor_id: 't-11', rating: 5, comment: 'Prof. Ramanujan sir prepared me for International Math Olympiad. India represent! 🇮🇳', author: 'Ankit M.' },
  { id: 'r-12', session_id: 's-1', tutor_id: 't-22', rating: 5, comment: 'Divya di taught me React and Node.js from scratch. Got placed at Razorpay in 4 months! 🚀', author: 'Saurabh P.' },
  { id: 'r-13', session_id: 's-15', tutor_id: 't-36', rating: 4, comment: 'Prashant sir connects every constitutional article to real Supreme Court cases. Polity became my strongest subject.', author: 'Meghna S.' },
  { id: 'r-14', session_id: 's-1', tutor_id: 't-30', rating: 5, comment: 'Dr. Raghav sir\'s economics classes are like attending DSE lectures. Perfect for UPSC optional!', author: 'Nitin J.' },
  { id: 'r-15', session_id: 's-1', tutor_id: 't-25', rating: 4, comment: 'Dr. Anand sir made Human Physiology so simple with his clinical examples. NEET Biology sorted! 🩺', author: 'Pallavi S.' }
];

export const PAYMENTS = [
  { id: 'pay-1', session_id: 's-1', amount: 1200, status: 'paid', date: '2026-04-03' },
  { id: 'pay-2', session_id: 's-2', amount: 1000, status: 'paid', date: '2026-04-05' },
  { id: 'pay-3', session_id: 's-3', amount: 1500, status: 'paid', date: '2026-04-06' },
  { id: 'pay-4', session_id: 's-4', amount: 900, status: 'paid', date: '2026-04-07' },
  { id: 'pay-5', session_id: 's-5', amount: 1100, status: 'paid', date: '2026-04-08' },
  { id: 'pay-6', session_id: 's-12', amount: 800, status: 'paid', date: '2026-04-09' },
  { id: 'pay-7', session_id: 's-13', amount: 1200, status: 'paid', date: '2026-04-04' },
  { id: 'pay-8', session_id: 's-15', amount: 1000, status: 'paid', date: '2026-04-05' },
  { id: 'pay-9', session_id: 's-6', amount: 1200, status: 'pending', date: '2026-04-10' },
  { id: 'pay-10', session_id: 's-7', amount: 1400, status: 'pending', date: '2026-04-11' },
  { id: 'pay-11', session_id: 's-8', amount: 850, status: 'pending', date: '2026-04-12' }
];

export const STATS = {
  totalTutors: 320,
  totalStudents: 12500,
  totalSessions: 85000,
  avgRating: 4.8
};
