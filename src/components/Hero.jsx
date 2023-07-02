import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";

const Hero = () => {

  return (
    
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} inset-0 absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&#39;m <span className="text-[#915eff]">Hyonam</span>
          </h1>
          <p>
            I develop user centric web apps, <br className="sm:block hidden" />{" "}
            web sites and 3D web-visuals
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute w-full xs:bottom-8 bottom-24 flex justify-center items-center">
        <a href="#about">
          <div className="w-[24px] h-[54px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: "Infinity",
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
