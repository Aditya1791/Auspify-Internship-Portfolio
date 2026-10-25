import { Project, Skill, Experience, Education } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Aditya Ranjan Swain',
  shortName: 'Aditya Swain',
  title: 'Full-Stack Developer | Front-End Engineer',
  subtitle: 'MERN Stack • React.js • Node.js • Python & AI Integrations',
  headline: 'Building production-grade web applications, real-time architectures, and AI-powered computer vision platforms.',
  email: 'swainaditya85@gmail.com',
  phone: '+91 78468 87605',
  location: 'Burla, Sambalpur, Odisha, India (Open to Remote Worldwide)',
  bio: 'Computer Science & Engineering graduate from Trident Academy of Technology, currently pursuing M.Tech in Computer Science & Engineering at Veer Surendra Sai University of Technology (VSSUT), Burla, Sambalpur — one of the most esteemed and premier universities of Odisha. Practical experience building and shipping production-grade full-stack web applications using the MERN stack (React, Node.js, Express, MongoDB) and Python/Flask. Independently designed and deployed three complete software solutions: AI Proctor (an AI-integrated proctoring system with OpenCV/DeepFace), Collab-SYNC (a real-time collaborative workspace with Socket.io), and Remote Examination Portal (a role-based assessment portal).',
  status: 'Pursuing M.Tech in CSE at VSSUT • Open to Full-Stack & Frontend Roles',
  social: {
    github: 'https://www.github.com/Aditya1791',
    linkedin: 'https://www.linkedin.com/in/aditya-ranjan-swain',
    twitter: 'https://www.x.com/Monkey_D_Adi',
    x: 'https://www.x.com/Monkey_D_Adi',
    portfolio: 'https://swainaditya85.github.io',
    resumePdf: '/Aditya_Swain_WebDev_Resume.pdf',
  },
  stats: [
    { label: 'Degree Status', value: 'M.Tech CSE' },
    { label: 'Production Apps', value: '3 Shipped' },
    { label: 'Compilers Built', value: '15+ Langs' },
    { label: 'Codebase Quality', value: '100% Type-Safe' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'ai-proctoring-system',
    title: 'AI Proctor',
    tagline: 'Biometric facial verification, live gaze tracking, and automated multi-format examination engine',
    description: 'A full-stack AI-powered online examination platform with secure role-based access for Professors and Students, biometric facial authentication via DeepFace, live proctoring engine with OpenCV & Dlib, and online code compilation for 15+ programming languages.',
    fullDescription: 'Designed and built an end-to-end AI-powered examination ecosystem. Integrated DeepFace for real-time biometric facial authentication to verify student identities against registered profiles before test admittance, eliminating impersonation. Implemented an active video proctoring engine using OpenCV and Dlib 68-point facial landmark models to continuously track gaze angles, identify multiple people in frame, and automatically log timestamped suspicious anomalies throughout each exam. Engineered three comprehensive exam modes: automated MCQs with CSV bulk upload and negative marking, subjective written answers, and practical coding tests powered by an online compiler supporting 15+ languages including C, C++, Java, Python, and Node.js. Integrated Stripe for secure examination fee payments and containerized the architecture with Docker and Docker Compose.',
    category: 'AI & ML',
    tags: ['Python', 'Flask', 'MySQL', 'DeepFace', 'OpenCV', 'Dlib', 'Bootstrap 5', 'Stripe API', 'Docker'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://aditya1791.github.io/AI-Proctor-Demo/',
    githubUrl: 'https://github.com/Aditya1791/AI-Proctor',
    featured: true,
    metrics: [
      { label: 'Compilers', value: '15+ Langs' },
      { label: 'Facial Tracking', value: '68 Landmarks' },
      { label: 'Integrity', value: 'Zero Impersonation' },
    ],
    architecture: [
      'Flask MVC backend architecture with secure Flask-Session and Flask-WTF CSRF validation',
      'Biometric authentication pipeline powered by DeepFace real-time face matching',
      'Computer Vision engine utilizing OpenCV and Dlib 68-point shape predictor for gaze tracking',
      'Sandboxed online compiler worker executing code submissions across 15+ programming languages',
      'Secure Stripe payment gateway integration and Dockerized deployment architecture',
    ],
    keyFeatures: [
      'Biometric face verification against student registry before exam entry',
      'Live gaze direction analysis, multi-face warning & timestamped anomaly logging',
      'Multi-format tests: MCQs with negative marking, subjective exams, and live coding',
      'Integrated in-browser code editor and runner for 15+ languages',
      'Dual role portals for Professors (test creation, grading) and Students (taking tests)',
      'Automated Stripe checkout integration for proctoring test fees',
    ],
  },
  {
    id: 'collaborative-workspace',
    title: 'Collab-SYNC',
    tagline: 'Real-time multi-user kanban system with Socket.io broadcast and optimistic UI state',
    description: 'A multi-user real-time project management platform — inspired by Trello — featuring drag-and-drop kanban boards, multiple workspace dashboards, and live state synchronisation so every connected user always sees the same up-to-date board without refreshing.',
    fullDescription: 'Engineered a full-stack real-time collaboration application designed for seamless team task management. Developed interactive drag-and-drop kanban boards using @hello-pangea/dnd on the frontend, with Socket.io broadcasting every task position update server-side the moment it happens — when User A moves a card, it shifts on User B screen instantly. Implemented optimistic UI updates so the board responds immediately to user actions before database persistence confirms, gracefully rolling back to the previous state if an API request fails to guarantee data integrity.',
    category: 'Full Stack',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Redux Toolkit', 'JWT', '@hello-pangea/dnd'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://github.com/Aditya1791/Collab-SYNC-Demo',
    githubUrl: 'https://github.com/Aditya1791/Collab-SYNC',
    featured: true,
    metrics: [
      { label: 'Sync Latency', value: '<50ms' },
      { label: 'UI Response', value: 'Optimistic' },
      { label: 'State Mgmt', value: 'Redux Toolkit' },
    ],
    architecture: [
      'React frontend with Redux Toolkit for unified client state and @hello-pangea/dnd interaction',
      'Socket.io WebSocket server handling room-scoped broadcast channels for zero-refresh sync',
      'Node.js and Express.js REST API layer with secure JSON Web Token (JWT) authentication',
      'MongoDB database with Mongoose schema modeling and geospatial/compound indexing',
    ],
    keyFeatures: [
      'Real-time kanban board synchronisation across all connected team sessions',
      'Zero-latency optimistic UI updates with automatic rollback on network failure',
      'Workspace and board organization with custom columns, labels, and task assignees',
      'Secure user authentication with JWT token lifecycle and role permissions',
    ],
  },
  {
    id: 'remote-exam-portal',
    title: 'Remote Examination Portal',
    tagline: 'Three-tier role-based examination engine with rich text questions and focus anomaly logging',
    description: 'A full-stack online examination system with three separate role-based portals — Admin, Teacher, and Student — each with its own purpose-built React dashboard and strictly scoped API access enforced at the Express middleware level.',
    fullDescription: 'Architected a comprehensive online examination ecosystem tailored for educational institutions. Designed three dedicated role-based React dashboards with granular access control: Admin portal for institute oversight, Teacher portal for question formulation and result publication, and Student portal for scheduled test taking. Implemented a rich exam creation interface using a React-based rich text editor supporting dynamic question banks, configurable options, automated grading logic, and per-exam countdown limits. Built client-side integrity monitoring that timestamps browser blur events, tab switches, and focus departures into MongoDB logs for teacher evaluation.',
    category: 'Full Stack',
    tags: ['React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'JWT'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/Aditya1791/Remote-Examination-Portal',
    featured: true,
    metrics: [
      { label: 'Portals', value: '3 Dedicated' },
      { label: 'Integrity', value: 'Tab-Blur Log' },
      { label: 'Grading', value: 'Automated' },
    ],
    architecture: [
      'Three dedicated React client workspaces for Admin, Teacher, and Student roles',
      'Scoped Express middleware enforcing strict role-based access control (RBAC) rules',
      'Browser event listener capturing window blur, visibility loss, and tab switching',
      'Chart.js integration for visual student performance analytics and score breakdowns',
    ],
    keyFeatures: [
      'Admin, Teacher, and Student portals with tailored dashboards and authorization',
      'Rich text question editor supporting equations, code snippets, and dynamic banks',
      'Real-time exam session timer with automated submission upon expiry',
      'Browser focus monitoring that logs tab switches and window blur events',
      'Interactive Chart.js visual score distribution reports for faculty review',
    ],
  },
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React.js', level: 96, category: 'Frontend', experienceYears: 3 },
  { name: 'JavaScript (ES6+)', level: 95, category: 'Frontend', experienceYears: 4 },
  { name: 'Redux Toolkit', level: 92, category: 'Frontend', experienceYears: 3 },
  { name: 'HTML5 & CSS3', level: 98, category: 'Frontend', experienceYears: 4 },
  { name: 'Bootstrap 5 & Tailwind CSS', level: 94, category: 'Frontend', experienceYears: 3 },
  { name: 'Responsive Web Design', level: 96, category: 'Frontend', experienceYears: 4 },
  { name: 'Component-Based Architecture', level: 94, category: 'Frontend', experienceYears: 3 },
  { name: 'JSX & Optimistic UI Updates', level: 92, category: 'Frontend', experienceYears: 3 },

  // Backend
  { name: 'Node.js & Express.js', level: 94, category: 'Backend', experienceYears: 3 },
  { name: 'Python & Flask', level: 90, category: 'Backend', experienceYears: 3 },
  { name: 'RESTful API Development', level: 95, category: 'Backend', experienceYears: 3 },
  { name: 'Socket.io & WebSockets', level: 92, category: 'Backend', experienceYears: 2 },
  { name: 'JWT & Role-Based Access Control', level: 92, category: 'Backend', experienceYears: 3 },
  { name: 'Flask-WTF & Flask-Session', level: 86, category: 'Backend', experienceYears: 2 },

  // Database & Cloud
  { name: 'MongoDB (Mongoose ODM)', level: 93, category: 'Database & Cloud', experienceYears: 3 },
  { name: 'MySQL & Relational Databases', level: 88, category: 'Database & Cloud', experienceYears: 3 },
  { name: 'Firebase Realtime DB & Auth', level: 88, category: 'Database & Cloud', experienceYears: 2 },
  { name: 'Docker & Docker Compose', level: 84, category: 'Database & Cloud', experienceYears: 2 },
  { name: 'Geospatial Indexing', level: 80, category: 'Database & Cloud', experienceYears: 2 },

  // Tools & DevOps
  { name: 'Git & GitHub Collaboration', level: 96, category: 'Tools & DevOps', experienceYears: 4 },
  { name: 'Postman & API Testing', level: 92, category: 'Tools & DevOps', experienceYears: 3 },
  { name: 'Stripe API Payment Integration', level: 88, category: 'Tools & DevOps', experienceYears: 2 },
  { name: 'Chart.js & Recharts', level: 90, category: 'Tools & DevOps', experienceYears: 2 },
  { name: 'OpenCV & Computer Vision', level: 86, category: 'Tools & DevOps', experienceYears: 2 },
  { name: 'DeepFace & Dlib Landmark Models', level: 84, category: 'Tools & DevOps', experienceYears: 2 },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Web Development Intern',
    company: '1Stop.ai',
    location: 'Remote, India',
    period: '1 Jul – 1 Sep 2026 (3 months)',
    current: false,
    description: [
      'Engineered responsive web applications and full-stack modules using React.js and modern JavaScript standards.',
      'Designed and consumed RESTful APIs with Node.js and Express, ensuring optimized database interactions and consistent data flow.',
      'Implemented component-level state management, client-side input validation, and cross-browser responsive layouts.',
      'Collaborated within an agile development framework, participating in sprint planning and code quality reviews.',
    ],
    skills: ['React.js', 'Node.js', 'Express.js', 'JavaScript (ES6+)', 'REST APIs', 'Bootstrap 5'],
  },
  {
    id: 'exp-2',
    role: 'AI / ML Training Intern',
    company: 'CTTC MSME (Central Tool Room & Training Centre)',
    location: 'Bhubaneswar, Odisha',
    period: '15 Jul – 15 Aug 2026 (2 months)',
    current: false,
    description: [
      'Completed comprehensive technical training on Machine Learning, Computer Vision pipelines, and data preprocessing in Python.',
      'Built and evaluated image processing pipelines utilizing OpenCV and facial landmark models for automated pattern detection.',
      'Explored integration techniques bridging computer vision scripts with Python Flask backends for real-time web inference.',
      'Practiced supervised and unsupervised machine learning algorithms with data visualization libraries.',
    ],
    skills: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision', 'Deep Learning Concepts'],
  },
];

export const EDUCATIONS: Education[] = [
  {
    id: 'edu-vssut',
    degree: 'M.Tech in Computer Science & Engineering',
    institution: 'Veer Surendra Sai University of Technology (VSSUT)',
    location: 'Burla, Sambalpur, Odisha',
    period: 'August 2026 – Pursuing',
    score: 'Department of Computer Science & Engineering',
    highlights: [
      'Enrolled in one of the most esteemed and oldest premier engineering universities of Odisha (established in 1956 as UCE Burla).',
      'Pursuing advanced postgraduate specialization in Computer Science & Engineering (CSE Department).',
      'Focusing on Advanced Distributed Systems, Scalable Cloud Architectures, and Applied Artificial Intelligence.',
      'Engaging in advanced research methodologies, algorithm complexity analysis, and modern software engineering paradigms.',
    ],
  },
  {
    id: 'edu-btech',
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Trident Academy of Technology (BPUT)',
    location: 'Bhubaneswar, Odisha',
    period: '2022 – 13 May 2026',
    score: 'CGPA: 6.8 / 10',
    highlights: [
      'Graduated in Computer Science & Engineering with strong foundations in full-stack web architectures and software engineering.',
      'Relevant Coursework: Data Structures & Algorithms (DSA), Database Management Systems (DBMS), Web Technologies, Operating Systems (OS).',
      'Independently designed, built, and shipped three production-grade full-stack web platforms during the academic tenure.',
    ],
  },
  {
    id: 'edu-class12',
    degree: 'Class XII — PCM & Computer Science',
    institution: 'Sainik School Bhubaneswar',
    location: 'Bhubaneswar, Odisha (CBSE Board)',
    period: '2020 – 2022',
    score: 'CBSE Higher Secondary',
    highlights: [
      'Curriculum: Physics, Chemistry, Mathematics, and Computer Science.',
      'Rigorous military school environment fostering high discipline, teamwork, analytical acumen, and leadership.',
    ],
  },
  {
    id: 'edu-class10',
    degree: 'Class X — PCM, Biology & Computer Science',
    institution: 'Sainik School Bhubaneswar',
    location: 'Bhubaneswar, Odisha (CBSE Board)',
    period: '2018 – 2020',
    score: 'CBSE Secondary Examination',
    highlights: [
      'Curriculum: Physics, Chemistry, Mathematics, Biology, Computer Science, and Social Sciences.',
      'Active participant in inter-school science quizzes, computer clubs, and physical fitness programs.',
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: 'Academic & Hackathon Mentorship',
    role: 'IEEE Sustainable Solutions Hackathon (2024)',
    content: 'Aditya demonstrated exceptional problem-solving and rapid prototyping under high-pressure hackathon conditions, architecting a functional web prototype with robust teamwork and clean communication.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Engineering Evaluation',
    role: 'Academic Review Committee',
    content: 'His independent development of the AI Proctor system showcasing DeepFace biometric matching, OpenCV gaze tracking, and a 15-language compiler exhibits a level of depth and initiative that stands out among engineering peers.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Internship Supervisor',
    role: 'Technical Mentor',
    content: 'Aditya demonstrated remarkable speed in grasping modern MERN stack concepts and implementing optimistic UI state management with Socket.io. He delivers reliable, thoroughly structured code.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
  },
];
