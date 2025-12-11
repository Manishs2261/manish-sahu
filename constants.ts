import { Experience, Project, SkillCategory, CoreValue } from './types';

export const PROFILE = {
  name: "Manish Sahu",
  role: "Flutter Developer",
  email: "manishsahu2609@gmail.com",
  phone: "+91 7389523175",
  location: "Bilaspur, Chhattisgarh",
  summary: "I am a dedicated Flutter Developer with nearly 2 years of experience in creating high-quality mobile applications for Android and iOS. My expertise spans across Flutter, Dart, and Firebase, with a strong focus on delivering applications that balance both functionality and visual appeal. Throughout my career, I have gained extensive experience with state management solutions including Bloc, GetX, and Provider, enabling me to build scalable and maintainable applications.",
  socials: {
    linkedin: "#",
    github: "#",
    stackoverflow: "#",
    medium: "#"
  }
};

export const CORE_VALUES: CoreValue[] = [
  { text: "Quality-driven development" },
  { text: "User-centric design" },
  { text: "Continuous improvement" },
  { text: "Clean code practices" },
  { text: "Collaborative teamwork" }
];

export const TECHNICAL_EXPERTISE: SkillCategory[] = [
  {
    category: "Flutter & Dart",
    description: "Expert-level proficiency in Flutter framework and Dart programming language, creating beautiful, natively compiled applications for mobile platforms with exceptional performance.",
    skills: ["Flutter", "Dart", "Widget Architecture"],
    icon: "layout"
  },
  {
    category: "State Management",
    description: "Extensive experience with Bloc, GetX, and Provider patterns, ensuring efficient data flow and reactive UI updates across complex application architectures.",
    skills: ["Bloc", "GetX", "Provider", "Riverpod"],
    icon: "clock"
  },
  {
    category: "Backend & Database",
    description: "Proficient in Firebase services, MySQL databases, RESTful API integration, and local storage solutions including SharedPreferences and SQLite for comprehensive data management.",
    skills: ["Firebase", "MySQL", "REST APIs", "SQLite"],
    icon: "cloud"
  },
  {
    category: "Deployment & Tools",
    description: "Skilled in Git version control, third-party library integration, push notifications, Google Maps implementation, and deploying applications to both Play Store and App Store.",
    skills: ["Git", "CI/CD", "Google Maps", "App Store Connect"],
    icon: "tool"
  }
];

export const SKILLS_BREAKDOWN: SkillCategory[] = [
  {
    category: "Core Development",
    skills: [
      "Flutter: Expert-level framework knowledge for cross-platform development",
      "Dart: Advanced programming skills with modern language features",
      "State Management: Bloc, GetX, and Provider patterns"
    ]
  },
  {
    category: "Backend & Data",
    skills: [
      "Firebase: Authentication, Firestore, Cloud Storage, and Cloud Functions",
      "MySQL: Relational database design and optimization",
      "RESTful APIs: Integration and consumption of web services",
      "Local Storage: SharedPreferences and SQLite implementation"
    ]
  },
  {
    category: "Integration & Tools",
    skills: [
      "Google Maps: Location services and mapping features",
      "Push Notifications: Firebase Cloud Messaging implementation",
      "Third-party Libraries: Package integration and management",
      "Git/GitHub: Version control and collaborative development"
    ]
  },
  {
    category: "Deployment & Distribution",
    skills: [
      "Google Play Store: Android app publishing and updates",
      "Apple App Store: iOS app submission and management",
      "CI/CD: Automated build and deployment pipelines"
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp_1",
    company: "FixingDots",
    location: "Raipur, (C.G.)",
    role: "Flutter Developer - FixHR Employee Management App",
    period: "Nov 2024 - Present",
    techStack: ["Flutter", "BLoC", "GetX", "Provider", "Freezed", "Google Maps", "Socket.io", "Dio", "Crashlytics"],
    description: [
      "Built key features such as real-time location tracking, calendar view, leave/miss-punch, gate pass, travel & daily allowance, and image composition.",
      "Implemented Google Maps integration, location search functionality, and Google–distance–based amount calculation.",
      "Utilized scalable state management solutions including BLoC, GetX, Provider, and Freezed.",
      "Integrated technologies such as Socket communication, Dio for API handling, Push Notifications, and Crashlytics.",
      "Identified and resolved critical real-time production bugs, significantly improving app performance and stability.",
      "Developed reusable code components and optimized UI for better maintainability and consistency.",
      "Managed deployment and updates on both the Google Play Store and Apple App Store."
    ],
    highlightCards: [
      {
        icon: "calendar",
        title: "Calendar Integration",
        description: "Implemented comprehensive calendar functionality for attendance tracking and scheduling, streamlining workforce management processes."
      },
      {
        icon: "map",
        title: "Real-time Tracking",
        description: "Developed real-time employee tracking features using Google Maps and Socket.io for enhanced operational visibility."
      },
      {
        icon: "dollar",
        title: "Allowance Management",
        description: "Created travel and daily allowance tracking systems to simplify expense management and reimbursement workflows."
      }
    ]
  },
  {
    id: "exp_2",
    company: "Riverhouse Technology",
    location: "Bhilai, Chhattisgarh",
    role: "Software Developer",
    period: "March 2024 - November 2024",
    techStack: ["Flutter", "Firebase", "Stripe", "UI Design"],
    description: [],
    subProjects: [
      {
        name: "Wiki-Fortune App Redesign",
        description: "Led a comprehensive redesign initiative for the Wiki-Fortune application, transforming its user interface by replacing outdated components with contemporary design elements. This modernization effort significantly enhanced both user experience and visual appeal, making the application more intuitive and engaging."
      },
      {
        name: "Collegiate Backer - Crowdfunding Platform",
        description: "Developed an innovative crowdfunding application designed to enable users to financially support athletes aspiring to compete at the international level.",
        columns: [
          {
            title: "Secure Payment Processing",
            description: "Established a robust payment processing and distribution system utilizing Stripe, ensuring seamless and reliable financial transactions."
          },
          {
            title: "Firebase Backend",
            description: "Implemented Firebase to facilitate real-time database management, authentication, and cloud storage."
          },
          {
            title: "User Experience",
            description: "Designed intuitive user flows for both athletes seeking support and donors wanting to contribute."
          }
        ]
      }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj_1",
    name: "Appixo Room Rent Search App",
    description: "Appixo is a comprehensive room rental and tiffin service search application that I developed to connect users with accommodation and meal services. This project showcases my ability to create full-featured applications from concept to deployment.",
    techStack: ["Flutter", "GetX", "Firebase"],
    features: [
      "Secure login and sign-up functionality",
      "Password recovery system",
      "Post room and tiffin services",
      "Edit and manage user posts",
      "Direct call functionality",
      "One-time user rating system",
      "Comprehensive rating summary"
    ],
    repoLink: "https://github.com/Manishs2261/PgRoomApp",
    processSteps: [
      {
        step: 1,
        title: "Interactive Frontend",
        description: "Built with Flutter to create highly interactive and responsive user interfaces that provide seamless navigation across all device sizes."
      },
      {
        step: 2,
        title: "Firebase Integration",
        description: "Utilized Firebase for comprehensive database management, storing and managing product information, user data, and authentication."
      },
      {
        step: 3,
        title: "State Management",
        description: "Implemented GetX for efficient state management, ensuring smooth data flow and reactive UI updates throughout the application lifecycle."
      }
    ]
  }
];

export const EDUCATION = {
  degree: "Bachelor's Degree in Computer Science",
  program: "Computer Science and Information Technology (Honors)",
  university: "Guru Ghasidas Central University, Bilaspur",
  period: "2020 - 2023",
  description: "During my academic journey, I built a strong foundation in computer science fundamentals, including data structures, algorithms, software engineering principles, and database management systems."
};

// System instruction for the AI model
export const SYSTEM_INSTRUCTION = `You are an AI assistant representing Manish Sahu, a Flutter Developer.
You are embedded in his dark-themed portfolio website.
Use the following context to answer questions about his experience, skills, and background.
Be professional, concise, and helpful.
If asked about contact info, provide the email: ${PROFILE.email}.

Context:
Name: ${PROFILE.name}
Role: ${PROFILE.role}
Summary: ${PROFILE.summary}

Skills:
${TECHNICAL_EXPERTISE.map(s => `${s.category}: ${s.skills.join(", ")}`).join("\n")}

Experience:
${EXPERIENCE.map(e => `${e.role} at ${e.company} (${e.period}). Key work: ${e.description.join(" ")}`).join("\n")}

Projects:
${PROJECTS.map(p => `${p.name}: ${p.description} Tech: ${p.techStack.join(", ")}`).join("\n")}

Education:
${EDUCATION.degree} at ${EDUCATION.university} (${EDUCATION.period}).
`;