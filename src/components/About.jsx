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
        I am a dedicated and talented Frontend Developer with a creative flare for creating visually appealing web experiences. 
        Proficient in HTML, CSS, JavaScript, and Typescript, I specialize at transforming business designs into dynamic and
         responsive web apps using frameworks such as React and Next.js
        My unquenchable desire for constant learning and adaptability to developing technologies drives
         me to make a significant influence in the tech business and also ensure elegant and efficient solutions to difficulties.
      </motion.p>

      {/* <div className="mt-20 flex flex-wrap justify-evenly gap-10">
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div> */}
    </>
  );
};


export {About}
export default LayoutWrapper(About, 'about');
// export default <LayoutWrapper idName='about'><About /></LayoutWrapper>
