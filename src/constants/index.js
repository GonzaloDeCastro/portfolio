import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  git,
  linux,
  docker,
  damasOnline,
  python,
  mysql,
  nodejs,
  pythonIcon2,
  reactDeveloper,
  datascience,
  webDeveloper,
  notebook,
  eventNow,
  windfarmIcon,
  codeIcon,
  redux,
  mongodb,
  presuflow,
  tailwind,
  typescript,
  postgresql,
  express,
  essentia,
  servimac,
  figprojects,
  cervezasantadiabla,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "SCADA Engineer",
    icon: backend,
  },
  {
    title: "UI/UX Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express.js",
    icon: express,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Docker & CI/CD",
    icon: docker,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Linux",
    icon: linux,
  },
];

const experiences = [
  {
    title: "Web Designer",
    company_name: "Pronexo",
    icon: codeIcon,
    iconBg: "#383E56",
    date: "Oct 2016 - Nov 2019",
    points: [
      "Designed and developed websites using WordPress.",
      "Implemented UI/UX improvements for clients.",
    ],
  },
  {
    title: "Operator COG",
    company_name: "BLC Global",
    icon: windfarmIcon,
    iconBg: "#383E56",
    date: "Nov 2019 - Jun 2022",
    points: [
      "Telecommunications monitoring of wind, solar, and biogas energy parks.",
      "Oversaw alerts and operational continuity.",
    ],
  },
  {
    title: "Frontend Web Developer",
    company_name: "Gloouds",
    icon: reactDeveloper,
    iconBg: "#383E56",
    date: "Jun 2022 - Apr 2023",
    points: [
      "Developed UI components, layouts, and interfaces.",
      "Migrated state management from useContext to Redux.",
      "Integrated REST APIs and performed debugging and maintenance.",
    ],
  },
  {
    title: "SCADA Engineer",
    company_name: "BLC Global",
    icon: pythonIcon2,
    iconBg: "#383E56",
    date: "Apr 2023 - Mar 2024",
    points: [
      "Developed SCADA system screens for monitoring, alarms, trend analysis, and equipment control.",
      "Analyzed existing SCADA solutions and implemented improvements focused on optimization and automation.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "SEIDOR Analytics",
    icon: nodejs,
    iconBg: "#383E56",
    date: "Mar 2024 - Present",
    points: [
      "Delivered full-stack solutions across multiple consulting client engagements, from small internal tools to larger multi-user applications.",
      "Designed and implemented numerous REST API endpoints, extending legacy systems and building greenfield features with Node.js, Express, React, and Redux Toolkit.",
      "Integrated PostgreSQL and MongoDB, created stored procedures, optimized queries, and improved KPI dashboards with better visualizations and data modeling.",
      "Worked with Docker and CI/CD workflows; documented systems with JSDoc and Markdown; coordinated delivery via Jira.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible for someone so great to exist, and Leo appeared and changed the paradigm.",
    name: "Federico Bustamante",
    designation: "Data Analyst",
    company: "BLC Global",

  },
  {
    testimonial:
      "I have known Gonzalo for a long time and he is passionate about life. His constant training and proactive approach to problem solving make him invaluable to any development team.",
    name: "Lucas Delmonte",
    designation: "Frontend Developer",
    company: "Innovate",

  },
];

const projects = [
  {
    name: "FIG Projects",
    description:
      "End-to-end product showcasing professional web development services — full-stack architecture with TypeScript, Docker, GitHub Actions CI/CD, and VPS deployment. Demonstrates ability to own a product from infrastructure to UI.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "purple-text-gradient",
      },
      {
        name: "Docker",
        color: "orange-text-gradient",
      },
      {
        name: "GitHub Actions",
        color: "yellow-text-gradient",
      },
    ],
    image: figprojects,
    source_code_link: "https://www.figprojects.com/",
    github_link: null,
  },
  {
    name: "Presuflow",
    description:
      "Presuflow is an online quotation platform that allows businesses to create budgets in multiple currencies and manage composite products with reusable sub-components, enabling both complete and individual product sales through a simple and efficient interface.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },  {
        name: "Redux",
        color: "purple-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "orange-text-gradient",
      },
      {
        name: "Express",
        color: "yellow-text-gradient",
      },
    ],
    image: presuflow,
    source_code_link: "https://presuflow.vercel.app/",
    github_link: null,
  },
  {
    name: "Event Now",
    description:
      "Project using React on the frontend side and Node.js, Express, and MySQL on the backend. It’s an event-management application with user registration and login features. Once logged in, users can browse events, view details, and interact with organizers through a simple and intuitive interface.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "purple-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "red-text-gradient",
      },
      {
        name: "MySQL",
        color: "orange-text-gradient",
      },
    ],
    image: eventNow,
    source_code_link: "https://event-now-frontend.vercel.app/",
    github_link: null,
  },
  {
    name: "Damas Online",
    description:
      "Classic board game of checkers, but online, where you can play with a friend, customize each player's names, and, of course, with a board that keeps track of each player's points.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: damasOnline,
    source_code_link:
      "https://gonzalodecastro.github.io/Juego-de-Damas-Personalizado",
    github_link: "https://github.com/GonzaloDeCastro/Juego-de-Damas-Personalizado",
  },
  {
    name: "Essentia Fitness",
    description:
      "Corporate gym website focused on training programs, premium equipment, and a clear value proposition for new members.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "Responsive",
        color: "green-text-gradient",
      },
    ],
    image: essentia,
    source_code_link: "https://essentiafitness.com/",
    github_link: null,
  },
  {
    name: "Servymac",
    description:
      "Commercial website for fitness equipment sales, featuring product catalog sections and conversion-oriented business messaging.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "UX/UI",
        color: "purple-text-gradient",
      },
    ],
    image: servimac,
    source_code_link: "https://www.servymac.com/#about",
    github_link: null,
  },
  {
    name: "Cerveza Santa Diabla",
    description:
      "Craft brewery website with beer style catalog, event services, and strong brand storytelling for digital presence.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "Branding",
        color: "red-text-gradient",
      },
    ],
    image: cervezasantadiabla,
    source_code_link: "https://www.cervezasantadiabla.com/",
    github_link: null,
  },
];

export { services, technologies, experiences, testimonials, projects };
