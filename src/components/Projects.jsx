import LayoutWrapper from "../Layout/LayoutWrapper";
import { projects } from "../constants/mocked-data";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod,
          aspernatur! Facilis veniam, quisquam est non doloribus cupiditate
          minima, dolor corrupti perspiciatis ea sunt ducimus accusamus quos
          beatae nemo animi? Necessitatibus esse accusamus commodi facere ea ipsum
          labore quaerat, aut accusantium veniam, totam quae temporibus optio
          explicabo veritatis sapiente beatae libero.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-evenly gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={`project-${project.name}-${i}`} index={i} {...project} />
        ))}
      </div>
    </>
  )
}

export {Projects}
export default LayoutWrapper(Projects, 'projects');
