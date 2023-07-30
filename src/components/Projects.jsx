import LayoutWrapper from "../Layout/LayoutWrapper";
import { projects } from "../constants/mocked-data";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";
// import { Carousel } from 'flowbite-react';

// import { maesan, cryptoApp, bankApp } from '../assets/index'

// import Swiper from 'swiper/bundle';

// import styles bundle
// import 'swiper/css/bundle';


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
          Take your time to explore how I aim to achieve the perfect blend between aesthetics and functionality
           by converting ideas into code iteratively, and continuously refining the final product until it meets
            or surpasses expectations. .
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-evenly gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={`project-${project.name}-${i}`} index={i} {...project} />
        ))}
      </div>

{/* <div className="swiper">

  <div className="swiper-wrapper">
    <div className="swiper-slide">Slide 1</div>
    <div className="swiper-slide">Slide 2</div>
    <div className="swiper-slide">Slide 3</div>
    ...
  </div>
  <div className="swiper-pagination"></div>

  <div className="swiper-button-prev"></div>
  <div className="swiper-button-next"></div>
</div> */}
    </>
  )
}

export {Projects}
export default LayoutWrapper(Projects, 'projects');
