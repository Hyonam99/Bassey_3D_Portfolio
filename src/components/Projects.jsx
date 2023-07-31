import { useState, useEffect } from "react";
import LayoutWrapper from "../Layout/LayoutWrapper";
import { projects } from "../constants/mocked-data";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Grid } from "swiper/modules";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// import styles bundle
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
	const [windowSize, setWindowSize] = useState(getWindowSize());

	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>What i have done so far...</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					Take your time to explore how I aim to achieve the perfect blend
					between aesthetics and functionality by converting ideas into code
					iteratively, and continuously refining the final product until it
					meets or surpasses expectations. .
				</motion.p>
			</div>

			<div className="mt-20">
				<div className="flex items-center justify-center gap-5 py-5">
					<BsArrowLeft size={22} /> swipe to view more{" "}
					<BsArrowRight size={22} />
				</div>
				<Swiper
					slidesPerView={
						windowSize.innerWidth < 764
							? 1
							: windowSize.innerWidth < 1082
							? 2
							: 3
					}
					grid={{
						rows: 1,
					}}
					spaceBetween={
						windowSize.innerWidth < 768
							? 30
							: windowSize.innerWidth < 828
							? 110
							: windowSize.innerWidth < 964
							? 60
							: windowSize.innerWidth < 1084
							? 60
							: windowSize.innerWidth < 1138
							? 250
							: 30
					}
					navigation={true}
					modules={[Grid, Pagination, Navigation]}
				>
					{projects.map((project, i) => (
						<SwiperSlide key={`project-${project.name}-${i}`}>
							<ProjectCard index={i} {...project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};

function getWindowSize() {
	const { innerWidth, innerHeight } = window;
	return { innerWidth, innerHeight };
}

export { Projects };
export default LayoutWrapper(Projects, "projects");
