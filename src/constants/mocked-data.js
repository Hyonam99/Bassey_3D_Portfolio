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
	nextjs,
	evergreen,
	jest,
	chakra,
	fxfactor,
	carmpus,
	visionwell,
	revamp,
	aisha,
    malariadata
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
		title: "Frontend Engineer",
		company_name: "Sproxil",
		icon: typescript,
		iconBg: "#E6DEDD",
		date: "Jan 2025",
		points: [
			"Refactoring old code base and user interface, improving performance and user experience",
			"System design flowcharts",
			"Unit testing per implementation of components and features for optimal performance, using React testing Library and Jest",
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
];

const projects = [
	{
		name: "Aisha",
		description:
			"An online AI health assistant, accessible directly via whatsApp, that provides users with first hand health guide",
		tags: [
			{
				name: "React.js",
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
				name: "Framer-motion",
				color: "blue-text-gradient",
			},
		],
		image: aisha,
		source_code_link: "https://github.com/Hyonam99",
		live_link: "https://aisha.ng/",
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
		name: "Revamp",
		description:
			"Online resume and portfolio builder with ATS scanning and optimizing features",
		tags: [
			{
				name: "React.js",
				color: "blue-text-gradient",
			},
			{
				name: "React Query",
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
		],
		image: revamp,
		source_code_link: "https://github.com/Hyonam99",
		live_link: "http://revamp.cv/",
	},
	{
		name: "Malaria Data",
		description:
			"Point of contact for online malaria data collection and analysis platform that allows users to collect, analyze and visualize malaria data",
		tags: [
			{
				name: "Next.js",
				color: "blue-text-gradient",
			},
			{
				name: "React Query",
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
		],
		image: malariadata,
		source_code_link: "https://github.com/Hyonam99",
		live_link: "https://www.malariadata.net/",
	},
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
];

export { services, technologies, experiences, projects };
