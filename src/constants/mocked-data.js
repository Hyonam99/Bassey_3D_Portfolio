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
  chakra,
  altruFunds,
  fxfactor,
  carmpus,
  visionwell,
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
  }
];

const projects = [
	{
		name: "Visionwell",
		description:
			"E-commerce Web app that allows customers to completely and seamless purchase contact lens, contact lens accesories and get delivery in one-go",
		tags: [
			{
				name: "NextJs",
				color: "orange-text-gradient",
			},
			{
				name: "Typescript",
				color: "green-text-gradient",
			},
			{
				name: "Tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "Chakra-UI",
				color: "blue-text-gradient",
			},
		],
		image: visionwell,
		source_code_link: "https://github.com/Hyonam99",
		live_link: "https://oscwell-commerce.vercel.app/",
	},
	{
		name: "Carmpus",
		description:
			"An online learning Hub, that encompasses both Computer Based Test (CBT) and Learning Management System (LMS) features",
		tags: [
			{
				name: "Next.js",
				color: "orange-text-gradient",
			},
			{
				name: "Typescript",
				color: "green-text-gradient",
			},
			{
				name: "SCSS",
				color: "pink-text-gradient",
			},
			{
				name: "Evergreen-UI",
				color: "blue-text-gradient",
			},
		],
		image: carmpus,
		source_code_link: "https://github.com/Hyonam99",
		live_link: "https://carmpus.ng/",
	},
	{
		name: "Fx-Factor",
		description:
			"Forex Website that allows members of a forex community to gain access to live exchange rates, purchase trading courses, and get updates from the community.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Typescript",
				color: "green-text-gradient",
			},
			{
				name: "SCSS",
				color: "pink-text-gradient",
			},
			{
				name: "Material-UI",
				color: "blue-text-gradient",
			},
		],
		image: fxfactor,
		source_code_link: "https://github.com/Hyonam99",
		live_link: "https://www.thefxfactor.com/",
	},
	{
		name: "Maesan Foundation",
		description:
			"Charity Foundation Web application that enables users to make donations to a charitable cause, view activities carried out by the foundation, and read health blogs.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "JavaScript",
				color: "green-text-gradient",
			},
			{
				name: "SCSS",
				color: "pink-text-gradient",
			},
			{
				name: "Chakra-UI",
				color: "blue-text-gradient",
			},
		],
		image: maesan,
		source_code_link: "https://github.com/Hyonam99",
		live_link: "https://www.maesanfoundation.com/",
	},
	{
		name: "Crypto news app",
		description:
			"Web application that enables users to search for details on crypto currencies openings, view price changes over a time period, and price chart analysis.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "JavaScript",
				color: "green-text-gradient",
			},
			{
				name: "Antd-UI",
				color: "pink-text-gradient",
			},
		],
		image: cryptoApp,
		source_code_link: "https://github.com/Hyonam99",
		live_link: "https://bh-crypto-app.vercel.app/",
	},
	{
		name: "FundRaising app",
		description:
			"Web application that enables users to seek funds through donation, by creating a campaign, and interested individuals can make donations.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Chakra-UI",
				color: "green-text-gradient",
			},
			{
				name: "JavaScript",
				color: "pink-text-gradient",
			},
		],
		image: altruFunds,
		source_code_link: "https://github.com/Hyonam99",
		live_link: "https://altru-funds-react-fe.vercel.app/",
	},
	{
		name: "Ecentric Bank app",
		description:
			"Web site landing page that depicts a modern web3 bank application.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: bankApp,
		source_code_link: "https://github.com/Hyonam99/bank_app",
		live_link: "https://bh-bank-app.vercel.app/",
	},
];

export { services, technologies, experiences, projects };
