export type PageId = "home" | "about" | "products" | "contact"

export type SocialLink = {
  label: string
  href: string
}

export type Project = {
  name: string
  company: string
  period: string
  stack: string[]
  group: "XSofts" | "Runsystem"
}

export const pages: { id: PageId }[] = [
  { id: "home" },
  { id: "about" },
  { id: "products" },
  { id: "contact" },
]

export const profile = {
  name: "Quach Trong Nhan",
  email: "dhnhan19999@gmail.com",
  phone: "084 911 9919",
  phoneHref: "tel:+84849119919",
  github: "https://github.com/qtnkaca1003",
  linkedin: "https://linkedin.com/in/qtnkaca",
  facebook: "https://www.facebook.com/qtn.kaca",
  cvHref: "/TrongNhan_FrontEndEngineer.pdf",
  portrait: "/portrait.jpg",
  birthday: "10.03.1999",
  age: new Date().getFullYear() - 1999,
}

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Facebook", href: profile.facebook },
]

export const resume = {
  education: {
    period: "2017 – 2021",
  },
  jobs: [
    {
      company: "Xsofts",
      period: "Dec 2025 – Jul 2026",
    },
    {
      company: "GMO-Z.com Runsystem",
      period: "Oct 2022 – Dec 2025",
    },
  ],
  programSkills: [
    { name: "React", value: 90, file: "/icons/react.svg" },
    { name: "TypeScript", value: 85, file: "/icons/typescript.svg" },
    { name: "JavaScript", value: 88, file: "/icons/javascript.svg" },
    { name: "Next.js", value: 75, file: "/icons/nextjs.svg" },
    { name: "Vue.js", value: 70, file: "/icons/vue.svg" },
  ],
  languageSkills: [
    { name: "Vietnamese", value: 100 },
  ],
  knowledge: [
    "React, TypeScript, Next.js",
    "Vue, Nuxt, Redux",
    "Tailwind, Material UI, Ant Design",
    "REST, Axios, TanStack Query",
    "Firebase, Socket.IO, DexieJS",
  ],
}

export const projects: Project[] = [
  {
    name: "POS System",
    company: "XSofts",
    period: "Dec 2025 – Jul 2026",
    stack: ["ReactJS", "DexieJS", "Material UI", "Socket.IO", "Syncfusion", "Redux", "React Hook Form"],
    group: "XSofts",
  },
  {
    name: "Booking Online",
    company: "XSofts",
    period: "Dec 2025 – Jul 2026",
    stack: ["ReactJS", "React Query", "MobX", "Ant Design", "Tailwind", "SCSS"],
    group: "XSofts",
  },
  {
    name: "Gensai",
    company: "GMO-Z.com Runsystem",
    period: "Oct 2024 – Dec 2025",
    stack: ["React 18", "Tailwind CSS", "Axios", "REST API", "TanStack Query"],
    group: "Runsystem",
  },
  {
    name: "Remote Work Cloud",
    company: "GMO-Z.com Runsystem",
    period: "Oct 2024 – Dec 2025",
    stack: ["Vue 3", "Nuxt 3", "Axios", "REST API"],
    group: "Runsystem",
  },
  {
    name: "Sumika Kanri",
    company: "GMO-Z.com Runsystem",
    period: "Nov 2022 – Oct 2024",
    stack: ["React.js", "TypeScript", "Redux", "RxJS", "Firebase"],
    group: "Runsystem",
  },
  {
    name: "Kobelco ER",
    company: "GMO-Z.com Runsystem",
    period: "Oct 2022 – Nov 2022",
    stack: ["React.js", "Redux", "Axios", "REST API"],
    group: "Runsystem",
  },
]

export const marks: Record<string, string> = {
  GitHub:
    "M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.3-.8-.8-1-.8-1-.7-.5.1-.5.1-.5.7.1 1.1.8 1.1.8.7 1.2 1.8.8 2.2.6.1-.5.3-.8.5-1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.5 7.5 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.6 4 .3.3.6.8.6 1.5v2.2c0 .2.1.5.5.4A8 8 0 0 0 16 8c0-4.4-3.6-8-8-8Z",
  LinkedIn:
    "M3.6 1.8a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM2 6.2h3.2V14H2V6.2ZM6.4 6.2H9.5v1.1h.1c.4-.8 1.5-1.6 3.1-1.6 3.3 0 3.9 2.2 3.9 5V14H13.4v-4.3c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V14H7.2V6.2h-.8Z",
  Facebook:
    "M9.1 14V8.7h1.8l.3-2.1H9.1V5.3c0-.6.2-1 1-1h1.1V2.4C10.9 2.4 10.2 2.2 9.4 2.2c-1.6 0-2.7 1-2.7 2.8v1.6H5v2.1h1.7V14h2.4Z",
  Mail: "M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z",
  Phone:
    "M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328Z",
  Download: "M7.2 1.4h1.6v5.15l2.15-2.15 1.13 1.13L8 10.61 3.92 5.53l1.13-1.13 2.15 2.15V1.4ZM2.3 12.15h11.4v1.7H2.3v-1.7Z",
}
