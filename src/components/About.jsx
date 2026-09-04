import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  const isMobile = window.innerWidth <= 768;

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Summary</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Software Engineer based in Riposto, Italy, building full-stack applications across frontend, backend, databases, and deployment. I work with React, Redux Toolkit, Node.js, and Express to deliver REST APIs, role-based access, and maintainable UI architectures for production environments.
        <br />
        <br />
        At SEIDOR Analytics I deliver solutions across multiple consulting client engagements — from extending legacy systems to building new APIs and KPI dashboards. On the FIG Projects platform I ship production SaaS products — GymFlow, PresuFlow, SocioFlow, GsaFlow, and Notas de Pedido — using TypeScript, PostgreSQL, Docker, GitHub Actions, and VPS deployment. Experienced with PostgreSQL, MySQL, and MongoDB, including schema design, query optimization, and data analytics workflows.
        <br />
        <br />
        Authorized to work in Italy (Permesso di soggiorno). Available immediately for remote, hybrid, or on-site roles.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
