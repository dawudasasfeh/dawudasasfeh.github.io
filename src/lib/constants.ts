export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
] as const;


export const PERSONAL = {
  name: "Dawud AlAsasfeh",
  fullName: "Dawud Salameh AlAsasfeh",
  tagline: "Software Engineer | Mobile & Web Developer",
  location: "Amman, Jordan",
  email: "dawudasasfeh@gmail.com",
  resumeUrl: "/resume.pdf",
  about:
    "I am a recent Computer Engineering graduate from the University of Jordan. I love building mobile apps and web platforms. I mainly use tools like Flutter, Node.js, and PostgreSQL to make fast, reliable software. I also enjoy learning how things work behind the scenes — from hardware parts to car engines. I like using AI tools to help me code faster and smarter, and I am always excited to learn new technologies.",
} as const;


export const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/dawudasasfeh",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dawud-alasasfeh-67275b301/",
    icon: "linkedin",
  },
  {
    label: "Frontend Mentor",
    href: "https://www.frontendmentor.io/profile/dawudasasfeh",
    icon: "frontendmentor",
  },
  {
    label: "Email",
    href: "mailto:dawudasasfeh@gmail.com",
    icon: "email",
  },
] as const;

export const SKILL_CATEGORIES = [
  {
    title: "Programming & Web",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Python",
      "C#",
      ".NET Framework",
    ],
  },
  {
    title: "Mobile & Backend",
    skills: ["Flutter", "Node.js", "PostgreSQL"],
  },
  {
    title: "Hardware",
    skills: ["SystemVerilog"],
  },
  {
    title: "Core Concepts",
    skills: [
      "Clean Coding",
      "State Management",
      "SQL Databases",
      "AI Prompting",
      "Custom UI Design",
    ],
  },
] as const;

export const STRENGTHS = [
  {
    title: "Problem Solving",
    description:
      "Breaking complex challenges into manageable, elegant solutions.",
    icon: "puzzle",
  },
  {
    title: "Quick Learner",
    description:
      "Rapidly picking up new frameworks, languages, and paradigms.",
    icon: "bolt",
  },
  {
    title: "Hardware–Software Bridge",
    description:
      "Connecting low-level hardware concepts with high-level software design.",
    icon: "chip",
  },
] as const;

export const PROJECTS = [
  {
    title: "Silsila",
    description:
      "A complete B2B store app featuring a unique \"Split-Cart\" system and a robust database architecture for handling complex orders. This was my final graduation project, earning a Distinction Grade.",
    tech: ["Flutter", "Node.js", "PostgreSQL"],
    role: "Full-Stack Developer",
    link: null,
    featured: true,
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "Project Tilawa",
    description:
      "A Quran app featuring Qibla direction, Adhkar, Tafseer, and a word-by-word interactive modal showing meaning, recitation, Tajweed, I'rab, and Nahwu. Includes AI voice recognition to correct reading mistakes like a real Sheikh.",
    tech: ["Flutter"],
    role: "Developer",
    link: null,
    featured: true,
    badge: "Work in Progress",
    gradient: "from-violet-500/20 to-blue-500/20",
  },
  {
    title: "Social Links Profile",
    description:
      "A clean, responsive social links page built as a Frontend Mentor challenge.",
    tech: ["HTML", "CSS", "JavaScript"],
    role: "Front-End Developer",
    link: "https://dawudasasfeh.github.io/Social-links-profile/",
    featured: false,
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "QR Code Component",
    description:
      "A minimal QR code card component with pixel-perfect responsive design.",
    tech: ["HTML", "CSS"],
    role: "Front-End Developer",
    link: "https://dawudasasfeh.github.io/QR-code-component/",
    featured: false,
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Blog Preview Card",
    description:
      "A modern blog card component with hover animations and clean typography.",
    tech: ["HTML", "CSS", "JavaScript"],
    role: "Front-End Developer",
    link: "https://dawudasasfeh.github.io/Blog-preview-card/",
    featured: false,
    gradient: "from-sky-500/20 to-indigo-500/20",
  },
  {
    title: "FAQ Accordion",
    description:
      "An interactive FAQ accordion with smooth expand/collapse animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    role: "Front-End Developer",
    link: "https://dawudasasfeh.github.io/FAQ-accordion/",
    featured: false,
    gradient: "from-teal-500/20 to-green-500/20",
  },
] as const;

export const EXPERIENCE = [
  {
    title: "University Internship",
    company: "University of Jordan — Computer Center",
    duration: "July 2025 – September 2025",
    details:
      "Completed required university training, gaining hands-on experience working in a professional IT and computer center environment.",
  },
] as const;

export const EDUCATION = {
  degree: "Bachelor of Science in Computer Engineering",
  institution: "University of Jordan",
  duration: "September 2021 – February 2026",
  gpa: "3.4 / 4.0 — Very Good",
} as const;

export const CERTIFICATES = [
  {
    title: "Cursor & Claude Code Professional AI Setup",
    issuer: "Steve Kinney",
    pdf: "/certs/pro-ai.pdf",
  },
  {
    title: "Practical Prompt Engineering",
    issuer: "Sabrina Goldfarb",
    pdf: "/certs/prompt-engineering.pdf",
  },
] as const;

export const AWARDS = [
  {
    title: "2nd Place — Jordan Semiconductor Design Competition (JoSDC'23)",
    description:
      "Designed a computer processor using SystemVerilog, competing against engineering teams across Jordan.",
  },
] as const;
