import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

import LayoutWrapper from "../Layout/LayoutWrapper";
import ExperienceCard from "./ExperienceCard";
import { styles } from "../styles";

import "react-vertical-timeline-component/style.min.css";

const Experience = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Where i have performed...</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <ExperienceCard />
      </div>
    </>
  );
};

export {Experience}
export default LayoutWrapper(Experience, "work");
// export default <LayoutWrapper idName='work'><Experience /></LayoutWrapper>
