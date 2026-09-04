import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../style";

const Tech = () => {
  return (
    <div>
      <p className={styles.sectionSubText}>Resources:</p>
      <h2 className={styles.sectionHeadText}>Technologies</h2>
      <div className="mt-10 flex flex-row flex-wrap justify-center gap-8">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            title={technology.name}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-tertiary shadow-card flex items-center justify-center p-4 hover:scale-110 transition-transform duration-200"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
