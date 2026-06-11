import { motion } from "framer-motion";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="text-[#5eacff]"> Gonzalo De Castro</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 ${
              isMobile ? "mt-20" : ""
            }`}
          >
            Full-stack Software Engineer — React, Node.js, PostgreSQL{" "}
            <br className="sm:block hidden" />
            Based in Italy · Open to opportunities across Europe · Available immediately
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="bg-[#5eacff] py-3 px-8 rounded-xl text-white font-bold shadow-md hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-secondary py-3 px-8 rounded-xl text-white font-bold hover:border-white transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      {!isMobile && <ComputersCanvas />}

      <div
        className={`absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center top-[${
          isMobile ? "440px" : "430px"
        }]`}
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className={`w-3 h-3 rounded-full bg-secondary mb-1 ${
                isMobile ? "mt-5" : ""
              }`}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
