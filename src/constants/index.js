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
  furnitureAppMain,
  windfarmIcon,
  codeIcon,
  redux,
  mongodb,
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
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Developer Web",
    icon: web,
  },
  {
    title: "Data Science Developer",
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
    date: "April 2023 - Currently",
    points: [
      "Design and development of SCADA system screens for process monitoring, control commands, trend analysis, alarms, and equipment management, primarily tailored for sustainable energy parks. Reviewing the SCADA solutions available in the market, with a focus on optimization and automation. Developing a versatile tool applicable to all projects.",
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
  //    {
  //      testimonial:
  //        "El mejor primo del universo",
  //      name: "Gonzalo de Castro",
  //      designation: "Developer Full Stack",
  //      company: "Gloouds",
  //      image: gonzalodecastro
  //    },
  //    {
  //      testimonial:
  //        "El mejor compañero de trabajo que tuve en la vida, sabe hacer de todo el hijo de puta",
  //      name: "Ernesto Londero",
  //      designation: "Developer Full Stack",
  //     company: "",
  //    image: ernestolondero,
  // },

  //
];

const projects = [
  {
    name: "Furniture App",
    description:
      "Project using React on the frontend side and for the backend, I used Node.js, Express, and MongoDB as the database. It's a simple application with a login and registration feature. Once logged in, it includes menus to add products and suppliers.",
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
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "red-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
    ],
    image: furnitureAppMain,
    source_code_link:
      "https://furniture-app-vdu3-67aqfpobw-gonzamdc.vercel.app/auth/login",
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
