import { useLocation } from "react-router-dom";
import {
	Navbar,
	About,
	Contact,
	Experience,
	Projects,
	Certifications,
	Tech,
	Hero,
	StarsCanvas,
} from "./components";
import { useEffect } from "react";

const scrollToHash = (hash: string) => {
	const id = hash.replace("#", "");
	const el = document.getElementById(id);
	if (el) {
		el.scrollIntoView({ behavior: "smooth" });
	}
};

const App = () => {
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			// short delay to ensure the DOM is ready
			setTimeout(() => {
				scrollToHash(location.hash);
			}, 200);
		}
	}, [location]);

	return (
		<section className="relative z-0 bg-primary">
			<Navbar />
			<Hero />
			<About />
			<Experience />
			<Tech />
			<Projects />
			<Certifications />
			<div className="relative z-0">
				<Contact />
				<StarsCanvas />
			</div>
		</section>
	);
};

export default App;
