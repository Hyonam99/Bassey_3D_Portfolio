import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  maesan,
  cryptoApp,
  bankApp,
  nextjs,
  evergreen,
  jest,
  chakra
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web App Developer",
    icon: web,
  },
  {
    title: "Web Site Developer",
    icon: mobile,
  },
  {
    title: "Software developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Chakra UI",
    icon: chakra,
  },
  {
    name: "Evergreen UI",
    icon: evergreen,
  },
  {
    name: "Jest & RTL",
    icon: jest,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "TiideLab",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Dec 2022",
    points: [
      "Collaborated with backend devs to build a crowdfunding platform",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in user research and analysis",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Code Boulevard",
    icon: typescript,
    iconBg: "#E6DEDD",
    date: "Apr 2023",
    points: [
      "Implementing responsive design and ensuring cross-browser compatibility using evergreen-UI, SCSS, Next.Js and TypeScript",
      "Participating in code reviews, maintenance and code refactoring ",
      "Carried out unit testing per implementation of components and features for optimal performance, using React testing Library and Jest",
    ],
  },
];

const projects = [
  {
    name: "Charity Foundation",
    description:
      "Web application that enables users to make donations to a charitable cause, view activities carried out by the foundation, and read health blogs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "chakra-UI",
        color: "blue-text-gradient",
      },
    ],
    image: maesan,
    source_code_link: "https://github.com/",
    live_link: "https://maesan-foundation.vercel.app/",
  },
  {
    name: "Crypto news app",
    description:
      "Web application that enables users to search for details on crypto currencies openings, view price changes over a time period, and price chart analysis.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Antd-UI",
        color: "blue-text-gradient",
      },
    ],
    image: cryptoApp,
    source_code_link: "https://github.com/",
    live_link: "https://bh-crypto-app.vercel.app/",
  },
  {
    name: "Ecentric Bank app",
    description:
      "Web site landing page that depicts a modern web3 bank application.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: bankApp,
    source_code_link: "https://github.com/",
    live_link: "https://bh-bank-app.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
