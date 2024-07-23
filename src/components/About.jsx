import { motion } from "framer-motion";
import { styles } from "../styles";
// import { services } from "../constants/mocked-data";
import { fadeIn, textVariant } from "../utils/motion";
import LayoutWrapper from '../Layout/LayoutWrapper';
// import ServiceCard from "./ServiceCard";

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
        I am a dedicated and talented Frontend Developer with a reative eye for designing appealing websites. 
        I am Proficient in HTML, CSS, SCSS JavaScript, and Typescript, UI frameworks and I specialize in converting business designs into standard and
         responsive web apps using frameworks such as React and Next.js
        My desire to constantly learn and adapt to new technologies drives me to make a significant impact in the tech industry while I ensure elegant and efficient solutions to difficulties.
      </motion.p>
    </>
  );
};


export {About}
export default LayoutWrapper(About, 'about');
// export default <LayoutWrapper idName='about'><About /></LayoutWrapper>
