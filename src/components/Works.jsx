import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { github } from "../assets/";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  github_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end gap-2 m-3">
            <button
              type="button"
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center card-img_hover cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
              aria-label={`Open live demo of ${name}`}
              title="Live demo"
            >
              <span className="text-white text-lg font-bold">↗</span>
            </button>
            {github_link && (
              <button
                type="button"
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center card-img_hover cursor-pointer"
                onClick={() => window.open(github_link, "_blank")}
                aria-label={`View ${name} source code on GitHub`}
                title="Source code"
              >
                <img
                  src={github}
                  alt="GitHub"
                  className="w-1/2 h-1/2 object-contain"
                />
              </button>
            )}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[23px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] min-h-[72px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
        <a
          href={source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View live project ${name}`}
          className="inline-flex mt-5 text-[14px] text-white font-medium hover:text-secondary transition-colors duration-200 underline underline-offset-4"
        >
          View live project
        </a>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Selected work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Full-stack products and client-facing applications. Featured projects
          demonstrate end-to-end delivery — architecture, APIs, databases, and
          deployment. Client websites show UI/UX and front-end execution for
          real businesses.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
