export type SocialLink = {
  label: string
  href: string
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type Project = {
  name: string
  company: string
  period: string
  summary: string
  highlights: string[]
  stack: string[]
}

export type Job = {
  company: string
  role: string
  period: string
}

export const profile = {
  name: "Quach Trong Nhan",
  nameVi: "Quách Trọng Nhân",
  role: "Frontend Software Engineer",
  email: "dhnhan19999@gmail.com",
  phone: "084 911 9919",
  phoneHref: "tel:+84849119919",
  location: "Ho Chi Minh City, Vietnam",
  summary:
    "Frontend Software Engineer with 3+ years across POS, banking, workforce management, and enterprise applications. I build responsive, maintainable interfaces with React.js, Next.js, TypeScript, Redux, and Material UI, and integrate them with REST APIs.",
  about:
    "I have shipped a salon POS platform serving 3,000+ merchants and enterprise applications for Japanese clients. I work with designers and backend developers in Agile teams, and I use AI coding agents such as GitHub Copilot, Codex, Claude Code, and Cursor.",
  github: "https://github.com/qtnkaca1003",
  linkedin: "https://linkedin.com/in/qtnkaca",
  facebook: "https://www.facebook.com/qtn.kaca",
  cvHref: "/cv.pdf",
  portrait: "/portrait.jpg",
  nhanqt: "/nhanqt.jpg",
}

export const roles = ["Frontend Software Engineer", "React Developer", "JavaScript Developer"]

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Core",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SCSS"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Vue 3", "Nuxt 3", "Tailwind CSS", "Material UI", "Ant Design", "Syncfusion"],
  },
  {
    title: "State & API",
    items: ["Redux", "RxJS", "MobX", "TanStack Query", "React Hook Form", "REST APIs", "Axios", "Firebase"],
  },
  {
    title: "Tools & Delivery",
    items: ["Git", "GitHub", "Jira", "DexieJS", "Socket.IO", "Copilot", "Cursor", "Claude Code"],
  },
  {
    title: "Soft Skills",
    items: ["Communication", "Presentation", "Teamwork", "Time management"],
  },
]

export const jobs: Job[] = [
  { company: "Xsofts", role: "Frontend Developer", period: "Dec 2025 – Jul 2026" },
  { company: "GMO-Z.COM RUNSYSTEM", role: "Frontend Developer", period: "Oct 2022 – Dec 2025" },
]

export const education = {
  school: "Saigon University of Technology",
  degree: "Information Technology",
  period: "2017 – 2021",
  note: "Classification: Good",
}

export const projects: Project[] = [
  {
    name: "Gensai",
    company: "Japan",
    period: "Disaster alerts",
    summary:
      "Disaster notification app for Japan. People can photograph an ongoing event, post the image, and share the location so others can see what is happening.",
    highlights: [
      "Users can register an account, or post an alert without signing up.",
      "Supports photo capture, photo upload, and sharing the disaster location.",
      "Includes comments on alert posts, with data loaded through REST APIs.",
    ],
    stack: ["React 18", "Tailwind CSS", "Axios", "REST API", "TanStack Query"],
  },
  {
    name: "POS System",
    company: "Xsofts POS",
    period: "Jul 2024 – Now",
    summary:
      "Point of Sale system for salon and retail businesses. Daily workflows include appointment scheduling, customer management, waiting lists, check-in, ticket processing, payment, portal, and receipt printing.",
    highlights: [
      "Developed, enhanced, and maintained features from business requirements, merchant requests, and operational needs.",
      "Owned key modules: Appointment Scheduling, Waiting List, Customer Management, Portal, and Check-in.",
      "Shipped improvements based on feedback from the QC/QA team.",
      "Investigated and fixed bugs and production issues reported by merchants during daily use.",
      "Supported Ticket Management and Receipt Printing.",
      "Worked with the team, QC/QA, and stakeholders to clarify requirements and improve features.",
      "Proposed technical and functional changes to improve usability, performance, and UX.",
    ],
    stack: ["ReactJS", "DexieJS", "Material UI", "Socket.IO", "Syncfusion", "Redux", "React Hook Form"],
  },
  {
    name: "Booking Online",
    company: "Xsofts",
    period: "Dec 2025 – Jul 2026",
    summary:
      "Online booking site for scheduling nail appointments ahead of time across salon locations. The flow also supports deposit payment, OTP verification, and reCAPTCHA.",
    highlights: [
      "Built and updated booking features from business and merchant requirements.",
      "Fixed bugs and improved the booking interface and workflow.",
      "Simplified booking steps so customers can finish a reservation more easily.",
      "Implemented deposit payment, OTP verification, and reCAPTCHA on the booking flow.",
      "Worked with the team to improve existing booking screens and user flows.",
    ],
    stack: ["React", "React Query", "MobX", "Ant Design", "Tailwind CSS", "SCSS"],
  },
  {
    name: "Sumika Kanri",
    company: "GMO-Z.COM RUNSYSTEM",
    period: "Nov 2022 – Oct 2024",
    summary:
      "Bank loan information system for a Japanese client: loan listings, application forms, and approval workflows.",
    highlights: [
      "Developed the modules with React.js and TypeScript.",
      "Integrated REST APIs and Firebase, and managed async data with Redux and RxJS.",
      "Kept responsive UI behavior stable across screens.",
    ],
    stack: ["React.js", "TypeScript", "Redux", "RxJS", "Firebase"],
  },
  {
    name: "Remote Work Cloud",
    company: "GMO-Z.COM RUNSYSTEM",
    period: "Oct 2024 – Dec 2025",
    summary: "Remote workforce management product with reusable Vue 3 and Nuxt 3 interfaces.",
    highlights: [
      "Built responsive screens and reusable frontend components for workforce features.",
      "Integrated backend REST APIs through Axios with the backend team.",
    ],
    stack: ["Vue 3", "Nuxt 3", "Axios", "REST API"],
  },
  {
    name: "Kobelco ER",
    company: "GMO-Z.COM RUNSYSTEM",
    period: "Oct 2022 – Nov 2022",
    summary: "Internal leave-management application for creating, updating, and viewing employee leave requests.",
    highlights: [
      "Built the React.js forms for leave request workflows.",
      "Integrated REST APIs with Axios and managed state with Redux.",
    ],
    stack: ["React.js", "Redux", "Axios", "REST API"],
  },
]

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: profile.facebook },
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Instagram", href: "" },
]

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]
