export type SocialLink = {
  label: string;
  href: string;
};

export type Tool = {
  name: string;
  file: string;
};

export type Project = {
  name: string;
  company: string;
  period: string;
  title: string;
  summary: string;
  points: string[];
  stack: string[];
  group: "Xsofts" | "Runsystem";
  art: "pos" | "booking" | "alert" | "team" | "loan" | "leave";
};

export type Job = {
  company: string;
  role: string;
  period: string;
};

export type PageId =
  | "home"
  | "about"
  | "service"
  | "projects"
  | "news"
  | "contact";

export const roles = [
  "Frontend Developer",
  "Next.js Developer",
  "React Developer",
  "TypeScript Developer",
  "JavaScript Developer",
];

export const profile = {
  name: "Quach Trong Nhan",
  short: "Nhan",
  role: "Frontend Developer",
  email: "dhnhan19999@gmail.com",
  phone: "084 911 9919",
  phoneHref: "tel:+84849119919",
  location: "Ho Chi Minh City",
  github: "https://github.com/qtnkaca1003",
  linkedin: "https://linkedin.com/in/qtnkaca",
  facebook: "https://www.facebook.com/qtn.kaca",
  cvHref: "/TrongNhan_FrontendEngineer.pdf",
  portrait: "/portrait.jpg",
  nhan: "/nhanqt.jpg",
  summary:
    "Frontend Software Engineer with 3+ years across POS, banking, workforce management, and enterprise applications. I build responsive, maintainable interfaces with React.js, Next.js, TypeScript, Redux, and Material UI, and integrate them with REST APIs.",
  about:
    "I have shipped a salon POS platform serving 3,000+ merchants and enterprise applications for Japanese clients. I work with designers and backend developers in Agile teams, and I use AI coding agents such as GitHub Copilot, Codex, Claude Code, and Cursor. " +
    "One specialty is taking a module from a requirement through to a screen that staff can use every day, then staying with the bugs and the QC notes after it ships.",
  // Temporary until the CV lists these fields.
  birthday: "10.03.1999",
  age: new Date().getFullYear() - 1999,
  nationality: "Vietnam",
  interest: "Product interfaces",
  freelance: "Available",
};

export const pages: { id: PageId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  /* { id: "service", label: "Service" }, */
  { id: "projects", label: "Projects" },
  /* { id: "news", label: "News" }, */
  { id: "contact", label: "Contact" },
];

export const tools: Tool[] = [
  { name: "React", file: "/icons/react.svg" },
  { name: "TypeScript", file: "/icons/typescript.svg" },
  { name: "JavaScript", file: "/icons/javascript.svg" },
  { name: "Next.js", file: "/icons/nextjs.svg" },
  { name: "Vue.js", file: "/icons/vue.svg" },
  { name: "Tailwind CSS", file: "/icons/tailwindcss.svg" },
  { name: "Firebase", file: "/icons/firebase.svg" },
  { name: "Jira", file: "/icons/jira.svg" },
  { name: "GitHub", file: "/icons/github.svg" },
];

export const jobs: Job[] = [
  {
    company: "Xsofts",
    role: "Frontend developer",
    period: "Dec 2025 – Jul 2026",
  },
  {
    company: "GMO-Z.com Runsystem",
    role: "Frontend developer",
    period: "Oct 2022 – Dec 2025",
  },
];

export const education = {
  school: "Saigon University of Technology",
  degree: "Information technology",
  note: "Classification Good",
  period: "2017 – 2021",
};

export const programSkills = [
  { name: "React", value: 90 },
  { name: "TypeScript", value: 85 },
  { name: "JavaScript", value: 88 },
  { name: "Next.js", value: 75 },
  { name: "Vue.js", value: 70 },
];

export const languageSkills = [
  { name: "Vietnamese", value: 100 },
  { name: "English", value: 70 },
];

export const knowledge = [
  "React, TypeScript, Next.js",
  "Vue, Nuxt, Redux",
  "Tailwind, Material UI, Ant Design",
  "REST, Axios, TanStack Query",
  "Firebase, Socket.IO, DexieJS",
];

export const interests = [
  "Product interfaces",
  "Booking flows",
  "Salon POS screens",
  "API-backed pages",
  "Accessible UI",
];

export const services = [
  {
    number: "01",
    title: "Product interfaces",
    text: "React and TypeScript screens for tools that staff use all day.",
    body: "I build the screens a team actually ships: lists, forms, and the states between them. The work stays close to the product, from the first layout through the fixes that show up after release.",
  },
  {
    number: "02",
    title: "Appointment systems",
    text: "Scheduling, waiting lists, check-in, and the ticket that follows.",
    body: "On Xsofts POS I owned appointment scheduling, the waiting list, customer management, the portal, and check-in. The day also covers tickets, payment, and receipt printing for about 3,000 merchants.",
  },
  {
    number: "03",
    title: "Booking flows",
    text: "A shorter path from choosing a service to leaving a deposit.",
    body: "Booking Online covers nail appointments across salon locations. The flow keeps the deposit, the OTP check, and reCAPTCHA, and I shortened the steps so a customer can finish a reservation more easily.",
  },
  {
    number: "04",
    title: "API screens",
    text: "Pages that load, post, and update through a REST API.",
    body: "Gensai, Remote Work Cloud, Sumika Kanri, and Kobelco ER all sit on REST. I wire the screens with Axios, TanStack Query, Redux, or RxJS, depending on the product.",
  },
  {
    number: "05",
    title: "Production support",
    text: "Bugs from merchants, QC notes, and the release that follows.",
    body: "I investigate production issues, ship improvements from QC and QA, and sit with stakeholders when a requirement is still vague. The goal is a screen that stays stable after it goes out.",
  },
  {
    number: "06",
    title: "Shared components",
    text: "Reusable Vue and React pieces so the next screen starts further along.",
    body: "Remote Work Cloud uses Vue 3 and Nuxt 3 components the team can pick up again. On the React products I keep forms, lists, and layout pieces consistent across modules.",
  },
];

export const facts = [
  { value: 6, suffix: "", label: "Products shipped" },
  { value: 3, suffix: "", label: "Years in production" },
  { value: 3000, suffix: "+", label: "Merchants on the POS" },
];

export const projects: Project[] = [
  {
    name: "POS System",
    company: "Xsofts POS",
    period: "Jul 2024 – Now",
    title: "Runs the salon day",
    summary:
      "Point of sale for salon and retail. The day covers appointment scheduling, customers, the waiting list, check-in, tickets, payment, the portal, and receipt printing. The platform serves 3,000 merchants.",
    points: [
      "Built and maintained features from business requirements, merchant requests, and daily operations.",
      "Owned Appointment Scheduling, Waiting List, Customer Management, Portal, and Check-in.",
      "Shipped improvements from QC/QA feedback.",
      "Investigated bugs and production issues reported by merchants.",
      "Supported Ticket Management and Receipt Printing.",
      "Worked with the team, QC/QA, and stakeholders to clarify requirements.",
      "Proposed changes that improved usability, performance, and the interface.",
    ],
    stack: [
      "ReactJS",
      "DexieJS",
      "Material UI",
      "Socket.IO",
      "Syncfusion",
      "Redux",
      "React Hook Form",
    ],
    group: "Xsofts",
    art: "pos",
  },
  {
    name: "Booking Online",
    company: "Xsofts POS",
    period: "2024 – Now",
    title: "Books a nail appointment",
    summary:
      "Online booking for nail appointments across salon locations. The flow also takes a deposit, an OTP check, and reCAPTCHA.",
    points: [
      "Built and updated booking features from business and merchant requirements.",
      "Fixed bugs in the booking interface and the workflow.",
      "Shortened the steps so a customer can finish a reservation more easily.",
      "Kept deposit payment, OTP verification, and reCAPTCHA on the flow.",
      "Worked with the team on the existing booking screens.",
    ],
    stack: ["ReactJS", "React Query", "MobX", "Ant Design", "Tailwind", "SCSS"],
    group: "Xsofts",
    art: "booking",
  },
  {
    name: "Gensai",
    company: "GMO-Z.com Runsystem",
    period: "Oct 2024 – Dec 2025",
    title: "Posts a disaster alert",
    summary:
      "Disaster alerts for Japan, built in the same months as Remote Work Cloud. People photograph an event, post the image, and share the location while it is happening.",
    points: [
      "A visitor can register, or post an alert without an account.",
      "The post takes a camera photo or an upload, plus the disaster location.",
      "Each alert has comments, and the screens load from a REST API.",
    ],
    stack: ["React 18", "Tailwind CSS", "Axios", "REST API", "TanStack Query"],
    group: "Runsystem",
    art: "alert",
  },
  {
    name: "Remote Work Cloud",
    company: "GMO-Z.com Runsystem",
    period: "Oct 2024 – Dec 2025",
    title: "Tracks a remote team",
    summary:
      "Remote workforce management, with reusable Vue 3 and Nuxt 3 screens.",
    points: [
      "Built responsive screens and reusable components for workforce features.",
      "Integrated the REST API through Axios with the backend team.",
    ],
    stack: ["Vue 3", "Nuxt 3", "Axios", "REST API"],
    group: "Runsystem",
    art: "team",
  },
  {
    name: "Sumika Kanri",
    company: "GMO-Z.com Runsystem",
    period: "Nov 2022 – Oct 2024",
    title: "Lists a bank loan",
    summary:
      "Loan information for a Japanese bank: listings, application forms, and approval steps.",
    points: [
      "Built the modules in React.js and TypeScript.",
      "Integrated REST APIs and Firebase, and managed async data with Redux and RxJS.",
      "Kept the interface stable across screen sizes.",
    ],
    stack: ["React.js", "TypeScript", "Redux", "RxJS", "Firebase"],
    group: "Runsystem",
    art: "loan",
  },
  {
    name: "Kobelco ER",
    company: "GMO-Z.com Runsystem",
    period: "Oct 2022 – Nov 2022",
    title: "Files a leave request",
    summary:
      "Internal leave management: create, update, and read an employee leave request.",
    points: [
      "Built the React.js forms for the leave workflow.",
      "Integrated REST APIs with Axios and kept state in Redux.",
    ],
    stack: ["React.js", "Redux", "Axios", "REST API"],
    group: "Runsystem",
    art: "leave",
  },
];

export const testimonials = [
  {
    quote:
      "The appointment board is clear, and the waiting list matches the way the salon actually runs the morning.",
    name: "Sample note",
    role: "Placeholder · salon desk",
  },
  {
    quote:
      "Booking used to take too many steps. The deposit and the OTP check are still there, and the path is shorter.",
    name: "Sample note",
    role: "Placeholder · booking",
  },
  {
    quote:
      "The loan screens stayed readable on a small laptop, and the form errors showed up where the clerk was typing.",
    name: "Sample note",
    role: "Placeholder · bank desk",
  },
];

export const posts = [
  {
    title: "What the salon day actually contains",
    date: "Jul 2024",
    category: "POS",
    art: "pos" as const,
    body: "A salon POS is not one screen. The morning moves through appointments, the waiting list, check-in, a ticket, payment, and a printed receipt. I kept those modules on Xsofts POS, including the portal and customer records, for a platform used by about 3,000 merchants.",
  },
  {
    title: "A booking that still takes a deposit",
    date: "2024",
    category: "Booking",
    art: "booking" as const,
    body: "Online nail booking has to work across locations. I kept the deposit, the OTP check, and reCAPTCHA on the flow, and cut steps that were only slowing the reservation down.",
  },
  {
    title: "An alert you can post without an account",
    date: "Oct 2024",
    category: "Gensai",
    art: "alert" as const,
    body: "Gensai ran in parallel with Remote Work Cloud. A person can register, or post a disaster alert with no account: a photo from the camera or an upload, a location, and comments under the post.",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Facebook", href: profile.facebook },
];

export const navItems = pages.map((page) => ({
  id: page.id,
  label: page.label,
}));


export const marks: Record<string, string> = {
  GitHub: "M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.3-.8-.8-1-.8-1-.7-.5.1-.5.1-.5.7.1 1.1.8 1.1.8.7 1.2 1.8.8 2.2.6.1-.5.3-.8.5-1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.5 7.5 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.6 4 .3.3.6.8.6 1.5v2.2c0 .2.1.5.5.4A8 8 0 0 0 16 8c0-4.4-3.6-8-8-8Z",
  LinkedIn: "M3.6 1.8a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM2 6.2h3.2V14H2V6.2ZM6.4 6.2H9.5v1.1h.1c.4-.8 1.5-1.6 3.1-1.6 3.3 0 3.9 2.2 3.9 5V14H13.4v-4.3c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V14H7.2V6.2h-.8Z",
  Facebook: "M9.1 14V8.7h1.8l.3-2.1H9.1V5.3c0-.6.2-1 1-1h1.1V2.4C10.9 2.4 10.2 2.2 9.4 2.2c-1.6 0-2.7 1-2.7 2.8v1.6H5v2.1h1.7V14h2.4Z",
  Mail: "M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z",
  Phone: "M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328Z",
  Download: "M7.2 1.4h1.6v5.15l2.15-2.15 1.13 1.13L8 10.61 3.92 5.53l1.13-1.13 2.15 2.15V1.4ZM2.3 12.15h11.4v1.7H2.3v-1.7Z",

}