import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import LayoutWrapper from "../Layout/LayoutWrapper";

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Get to know me...</p>
				<h2 className={styles.sectionHeadText}>Introduction.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				I am a dedicated and talented Frontend Developer with a reactive eye for
				designing responsive and appealing websites, proficient in HTML, CSS,
				SCSS JavaScript, and Typescript, and UI frameworks. <br />I specialize
				in converting business designs into standard and optimized web apps
				using frameworks such as React and Next.js.
			</motion.p>
		</>
	);
};

export { About };
export default LayoutWrapper(About, "about");
// export default <LayoutWrapper idName='about'><About /></LayoutWrapper>
