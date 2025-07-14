import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import LayoutWrapper from "../Layout/LayoutWrapper";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import { MdMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { Link } from "react-router-dom";

const Contact = () => {

  return (
    <div className="xl:mt-12 md:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
          <div className="flex flex-row flex-wrap justify-start gap-6 my-3">
            <Link to="mailto:victorbassey767@gmail.com" target="_blank" className="rounded-full bg-tertiary w-14 h-14 flex justify-center items-center shadow-sm shadow-secondary">
              <MdMailOutline className="w-[80%] h-[80%] rounded-full text-secondary"/>
            </Link>
            <Link to="https://www.linkedin.com/in/hyonam-bassey-482191207" target="_blank" className="rounded-full bg-tertiary w-14 h-14 flex justify-center items-center shadow-sm shadow-secondary">
              <BiLogoLinkedinSquare  className="w-[80%] h-[80%] rounded-full text-secondary"/>
            </Link>
            <Link to="https://github.com/Hyonam99" target="_blank" className="rounded-full bg-tertiary w-14 h-14 flex justify-center items-center shadow-sm shadow-secondary">
              <FaGithub  className="w-[80%] h-[80%] rounded-full text-secondary"/>
            </Link>
          </div>

          <div className="text-secondary mt-4">
            <p className="mb-2">victorbassey767@gmail.com</p>
            <p>08180387593, 07084804237</p>
          </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto sm:h-[180px] sm:w-[250px] md:h-[320px] h-[140px] w-[120px] mx-auto my-0"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default LayoutWrapper(Contact, "contact");
