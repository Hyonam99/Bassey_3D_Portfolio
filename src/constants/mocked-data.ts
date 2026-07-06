import {
	mobile,
	creator,
	web,
	javascript,
	typescript,
	docker,
	git,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nextjs,
	evergreen,
	jest,
	chakra,
	expo,
	fxfactor,
	carmpus,
	visionwell,
	// revamp,
	aisha,
	malariadata,
} from "../assets";
import aiCareerEssentialsCert from "../assets/certificates/ai-career-essentials-certificate.png";
import reactNativeCert from "../assets/certificates/react-native-certificate-udemy.jpg";
import softSkillsCert from "../assets/certificates/hyonam_bassey_softskill_certificate.png";
import hiitWebDesignCert from "../assets/certificates/HIIT-web-design-certificate.jpeg";
import wtmGdgCoachCert from "../assets/certificates/WTM-GDG-coach-certificate-Hyonam-Bassey.jpg";
import wtmGdgMenteeFeedbackCert from "../assets/certificates/WTM-GDG-mentee-feedback-certificate.jpg";
import tiidelabCoachCert from "../assets/certificates/tiidelab-coach-certificate.jpeg";
import tiidelabFrontendCert from "../assets/certificates/tiidelab-frontend-developer-certificate.png";
import tiidelabVolunteerCert from "../assets/certificates/tiidelab-volunteer-certificate.png";
import sproxilHackathonCert from "../assets/certificates/sproxil-hackathon-certificate.png";
import stuternHackathonCert from "../assets/certificates/stutern-hackathon-certificate-Bassey-Hyonam-VictoR.png";
import type {
	NavLink,
	Service,
	Technology,
	ExperienceItem,
	Project,
	Certification,
} from "../types";

export const navLinks: NavLink[] = [
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
		id: "certifications",
		title: "Certifications",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services: Service[] = [
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

const technologies: Technology[] = [
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
		name: "React Native",
		icon: reactjs,
	},
	{
		name: "Expo",
		icon: expo,
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
	{
		name: "Git",
		icon: git,
	},
	{
		name: "Docker",
		icon: docker,
	},
];

const experiences: ExperienceItem[] = [
	{
		title: "Frontend Engineer",
		company_name: "Sproxil",
		icon: typescript,
		iconBg: "#E6DEDD",
		date: "Jan 2025 - Present | Lagos, Nigeria (Hybrid)",
		points: [
			"Leading frontend development of the Sproxil Track & Trace platform — a PWA and web solution with GS1 and NAFDAC integrations for end-to-end supply-chain traceability",
			"Migrated legacy codebases into maintainable, typed architectures with TypeScript and Redux, reducing production bugs by 45%",
			"Built the first version of an enterprise survey platform with advanced conditional logic, dynamic question flows, validations and branching rules",
			"Built a call-center portal with integrated third-party calling and custom contact management, powered by survey-generated respondent data",
			"Manage frontend repositories, deployment pipelines and code reviews while mentoring developers on the team",
			"Collaborated with QA engineers on rigorous edge-case testing, achieving 98.9% stability across critical user journeys",
		],
	},
	{
		title: "Frontend Developer",
		company_name: "CodeBoulevard Systems",
		icon: typescript,
		iconBg: "#E6DEDD",
		date: "Apr 2023 - Dec 2024 | Germany (Remote)",
		points: [
			"Engineered Carmpus (carmpus.io), a performant, SEO-optimized learning management system, from the ground up with Next.js server-side rendering for thousands of concurrent students",
			"Established a culture of testing with Jest and React Testing Library — every unit maintained at least 75% coverage, significantly reducing post-release hotfixes",
			"Designed complex Redux state management patterns synchronizing user dashboards, course progress trackers and real-time notifications",
			"Integrated third-party APIs (Stripe, Paystack, Twilio) with backend developers for secure fintech and e-commerce data handling",
		],
	},
	{
		title: "Frontend Developer Intern",
		company_name: "TIIDELab",
		icon: javascript,
		iconBg: "#E6DEDD",
		date: "Apr 2022 - Dec 2022 | Lagos, Nigeria (Hybrid)",
		points: [
			"Designed and developed a crowdfunding platform in an intensive Agile environment, building intuitive donation flows and transparent campaign tracking with React.js",
			"Ensured 100% responsiveness across mobile, tablet and desktop, adhering to WCAG standards for color contrast and screen-reader compatibility",
			"Engaged in data-driven user research and sprint planning, contributing to user personas that shaped core product features",
		],
	},
];

const projects: Project[] = [
	{
		name: "Aisha",
		description:
			"AI health assistant accessible directly via WhatsApp, giving users first-hand health guidance around the clock — no app download required",
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
		name: "Sproxil Track & Trace",
		description:
			"Anti-counterfeit track & trace platform (PWA + web) with GS1 and NAFDAC integrations for end-to-end supply-chain traceability. Led the frontend; migrating to a typed architecture cut production bugs by 45%",
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
				name: "Redux",
				color: "pink-text-gradient",
			},
			{
				name: "PWA",
				color: "blue-text-gradient",
			},
		],
		internal: true,
		company: "Sproxil",
	},
	{
		name: "Carmpus",
		description:
			"SEO-optimized learning hub engineered from the ground up with Next.js SSR, combining Computer Based Testing (CBT) and LMS features for thousands of concurrent students",
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
		live_link: "https://carmpus.io/",
	},
	{
		name: "Enterprise Survey Platform",
		description:
			"Survey builder with advanced conditional logic, dynamic question flows, validations and branching rules — built from version one, powering internal data collection ahead of a public v2 launch",
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
				name: "Redux",
				color: "pink-text-gradient",
			},
		],
		internal: true,
		company: "Sproxil",
	},
	{
		name: "Visionwell",
		description:
			"E-commerce storefront for contact lenses with real-time inventory and secure payments — a streamlined one-go purchase journey that boosted business conversion rates by 20%",
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
		name: "Call Center Portal",
		description:
			"Call-center portal with integrated third-party calling and custom contact management, leveraging survey-generated respondent data to handle customer reach and support issues",
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
				name: "RESTful APIs",
				color: "blue-text-gradient",
			},
		],
		internal: true,
		company: "Sproxil",
	},

	// {
	// 	name: "Revamp",
	// 	description:
	// 		"Online resume and portfolio builder with ATS scanning and optimizing features",
	// 	tags: [
	// 		{
	// 			name: "React.js",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "React Query",
	// 			color: "orange-text-gradient",
	// 		},
	// 		{
	// 			name: "Typescript",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "Tailwind",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: revamp,
	// 	source_code_link: "https://github.com/Hyonam99",
	// 	live_link: "http://revamp.cv/",
	// },
	{
		name: "Malaria Data",
		description:
			"Online malaria data platform enabling health workers and researchers to collect, analyze and visualize malaria data — supporting data-driven public health decisions",
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
		name: "Fx-Factor",
		description:
			"Forex community platform with TradingView live chart integrations and secure course enrollment — zero-latency market data serving 1,000+ active traders",
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

const certifications: Certification[] = [
	{
		title: "Frontend Engineering",
		issuer: "HIIT",
		note: "Awarded with Distinction",
		status: "Certified",
		images: [tiidelabFrontendCert, reactNativeCert, hiitWebDesignCert],
	},
	{
		title: "Backend Engineering",
		issuer: "Udemy",
		status: "In progress",
	},
	{
		title: "Developer Coaching & Mentorship",
		issuer: "GDG Ilorin × Women Techmakers · TIIDELab",
		note: "WTM mentorship program cohort 2 · Coach & mentor, TIIDELab",
		status: "Certified",
		images: [tiidelabCoachCert, wtmGdgCoachCert, wtmGdgMenteeFeedbackCert],
	},
	{
		title: "Hackathon Participation",
		issuer: "Stutern Klusterthon 2023 · Sproxil Hackathon",
		note: "Frontend specialisation · solution pitch contribution",
		status: "Certified",
		images: [sproxilHackathonCert, stuternHackathonCert],
	},
	{
		title: "Career Essentials",
		issuer: "ALX",
		note: "Soft skills, AI essentials",
		status: "Certified",
		images: [aiCareerEssentialsCert, softSkillsCert],
	},
	{
		title: "Volunteering",
		issuer: "TIIDELab · ITF-NECA",
		note: "Volunteering Service Honors Award",
		status: "Certified",
		images: [tiidelabVolunteerCert],
	},
];

export { services, technologies, experiences, projects, certifications };
