// import React from "react";
import { useState, useRef } from "react";
// import emailJs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import LayoutWrapper from "../Layout/LayoutWrapper";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";

const Contact = () => {

  const formRef = useRef();

  const [formdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading] = useState(false);

  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={formdata.name}
              placeholder="Enter your name here..."
              onChange={handleChange}
              className="bg-tertiary py-4 px-4 
                placeholder:text-secondary text-white 
                rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={formdata.email}
              placeholder="Enter your email here..."
              onChange={handleChange}
              className="bg-tertiary py-4 px-4 
                placeholder:text-secondary text-white 
                rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              name="message"
              rows="7"
              value={formdata.message}
              placeholder="Enter your message here..."
              onChange={handleChange}
              className="bg-tertiary py-4 px-4 
                placeholder:text-secondary text-white 
                rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 my-0 mx-auto w-3/5 outline-none 
            text-white font-bold shadow-md shadow-primary rounded-xl text-center"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default LayoutWrapper(Contact, "contact");
