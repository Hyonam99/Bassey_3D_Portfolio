import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants/mocked-data";
import { fadeIn, textVariant } from "../utils/motion";
import LayoutWrapper from '../Layout/LayoutWrapper';
import ServiceCard from "./ServiceCard";

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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod,
        aspernatur! Facilis veniam, quisquam est non doloribus cupiditate
        minima, dolor corrupti perspiciatis ea sunt ducimus accusamus quos
        beatae nemo animi? Necessitatibus esse accusamus commodi facere ea ipsum
        labore quaerat, aut accusantium veniam, totam quae temporibus optio
        explicabo veritatis sapiente beatae libero.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-evenly gap-10">
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </>
  );
};


export {About}
export default LayoutWrapper(About, 'about');
// export default <LayoutWrapper idName='about'><About /></LayoutWrapper>
