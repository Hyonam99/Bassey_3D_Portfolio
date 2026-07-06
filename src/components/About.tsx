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
				I&#39;m Bassey Hyonam Victor, a Frontend Engineer with 4+ years
				of experience building high-performance, scalable web and
				mobile applications with React, Next.js, React Native, Expo and
				TypeScript. I turn business requirements into technical
				blueprints and ship them as fast, accessible, SEO-friendly
				products — backed by a strong testing culture with Jest and
				React Testing Library. <br />
				Beyond writing code, I lead code reviews, mentor and coach
				developers, and collaborate closely with designers, QA and
				backend teams. I&#39;m open to frontend engineering roles —
				remote with global teams, or on-site and hybrid in Lagos,
				Nigeria.
			</motion.p>
		</>
	);
};

export { About };
export default LayoutWrapper(About, "about");
// export default <LayoutWrapper idName='about'><About /></LayoutWrapper>
