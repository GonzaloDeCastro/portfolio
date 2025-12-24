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
  figma,
  docker,
  damasOnline,
  salesanalisis,
  c,
  python,
  pandas,
  excel,
  mysql,
  nodejs,
  pythonIcon2,
  reactDeveloper,
  datascience,
  cDeveloper,
  webDeveloper,
  leandrofritzler,
  ernestolondero,
  ivobertoni,
  gonzalodecastro,
  apiMarvel,
  lucasdelmonte,
  federicobustamante,
  cintiaavendaño,
  ezequielespinosa,
  notebook,
  eventNow,
  windfarmIcon,
  codeIcon,
  redux,
  mongodb,
  presuflow,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About me",
  },
  {
    id: "work",
    title: "Development projects",
  },
];

const services = [
  {
    title: "Developer Web",
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
    title: "Developer UI/UX",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

  {
    name: "python",
    icon: python,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "mongodb",
    icon: mongodb,
  },
];

const experiences = [
  {
    title: "Web developer and Odoo implementer",
    company_name: "Pronexo",
    icon: codeIcon,
    iconBg: "#383E56",
    date: "October 2016 - November 2019",
    points: [
      "Design and development of websites mainly using WordPress. Additionally, I worked as an implementer and module developer for Odoo V8",
    ],
  },
  {
    title: "Operator COG",
    company_name: "BLC Global",
    icon: windfarmIcon,
    iconBg: "#383E56",
    date: "November 2019 - April 2022",
    points: [
      "Telecommunications and monitoring of Wind, Solar and Biogas parks.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Gloouds",
    icon: reactDeveloper,
    iconBg: "#383E56",
    date: "April 2022 - April 2023",
    points: [
      "I worked as a Frontend developer using React as the main library, creating new components and functionalities such as endpoints, search filters, data analysis, full screens with different tailored requirements, in a performance analysis project for soccer players.",
    ],
  },
  {
    title: "SCADA Engineer",
    company_name: "BLC Global",
    icon: pythonIcon2,
    iconBg: "#383E56",
    date: "April 2023 - March 2024",
    points: [
      "Design and development of SCADA system screens for process monitoring, control commands, trend analysis, alarms, and equipment management, primarily tailored for sustainable energy parks. Reviewing the SCADA solutions available in the market, with a focus on optimization and automation. Developing a versatile tool applicable to all projects.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Seidor Analytics",
    icon: nodejs,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "As a Full-Stack Software Engineer, I contributed to a performance analysis project for soccer players, primarily using React for frontend development. I was responsible for creating new components, integrating search filters, and implementing data analysis features. Additionally, I worked on both frontend and backend functionalities, including designing API endpoints and ensuring seamless integration. I collaborated closely with cross-functional teams in daily meetings with clients based in the United States to align on requirements and deliver tailored solutions.",
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
    image: federicobustamante,
  },
  {
    testimonial:
      "I have known Gonzalo for a long time and he is passionate about life. His constant training and proactive approach to problem solving make him invaluable to any development team.",
    name: "Lucas Delmonte",
    designation: "Frontend Developer",
    company: "Innovate",
    image: lucasdelmonte,
  },
];

const projects = [
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
        name: "Express ",
        color: "red-text-gradient",
      },
      {
        name: "MySQL",
        color: "orange-text-gradient",
      },
    ],
    image: eventNow,
    source_code_link: "https://event-now-frontend.vercel.app/",
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
        name: "Javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: damasOnline,
    source_code_link:
      "https://gonzalodecastro.github.io/Juego-de-Damas-Personalizado",
  },
  {
    name: "API Marvel",
    description:
      "This project contains all the Marvel heroes. You can browse the different pages or just search for your favorite hero. We also have its comics available.",
    tags: [
      {
        name: "HTML",
        color: "skyblue-text-gradient",
      },
      {
        name: "CSS",
        color: "purple-text-gradient",
      },
      {
        name: "Jasvascript",
        color: "pink-text-gradient",
      },
      {
        name: "REST-API",
        color: "yellow-text-gradient",
      },
    ],
    image: apiMarvel,
    source_code_link: "https://gonzalodecastro.github.io/API-Marvel/",
  },
];

export { services, technologies, experiences, testimonials, projects };
