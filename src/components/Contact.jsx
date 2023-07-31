// import React from "react";
import { useState, useRef } from "react";
// import emailJs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import LayoutWrapper from "../Layout/LayoutWrapper";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import { Textarea, Input } from '@chakra-ui/react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";

const Contact = () => {

  const formRef = useRef();

  const [loading] = useState(false);


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>

        <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={Yup.object({
                name: Yup.string().required('name is required'),
                email: Yup.string().email('Invalid email address').required('email is required'),
                message: Yup.string().required('message is required'),
            })}
            onSubmit={() => {}}
        >
            {({ handleSubmit, getFieldProps, touched, errors, values }) => (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <Input
                type="text"
                name="name"
                placeholder="Enter your name here..."
                {...getFieldProps('name')}
                className="bg-tertiary py-4 px-4 
                  placeholder:text-secondary text-white 
                  rounded-lg outline-none border-none font-medium"
              />
              {touched.name && errors.name ? (<small className="text-red-600">{errors.name}</small>): null}
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email here..."
                {...getFieldProps('email')}
                className="bg-tertiary py-4 px-4 
                  placeholder:text-secondary text-white 
                  rounded-lg outline-none border-none font-medium"
              />
              {touched.email && errors.email ? (<small className="text-red-600">{errors.email}</small>): null}
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <Textarea
                name="message"
                rows="7"
                resize='none'
                placeholder="Enter your message here..."
                {...getFieldProps('message')}
                className="bg-tertiary py-4 px-4 
                  placeholder:text-secondary text-white 
                  rounded-lg outline-none border-none font-medium"
              />
              {touched.message && errors.message ? (<small className="text-red-600">{errors.message}</small>): null}
            </label>

            <Link to={`mailto:victorbassey767@gmail.com?subject=Name: ${values.name}&body=${values.message}`} className="w-3/5 text-center my-0 mx-auto">
            <button
              type="button"
              className="bg-tertiary py-3 px-8 my-0 mx-auto w-full outline-none 
              text-white font-bold shadow-md shadow-primary rounded-xl text-center"
            >
              {loading ? "Sending..." : "Send"}
            </button>
            </Link>
          </form>
          )}
        </Formik>
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
