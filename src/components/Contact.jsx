import { motion } from "framer-motion";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const contactLinks = [
  {
    label: "Email",
    value: "ing.gonzalodecastro@gmail.com",
    href: "mailto:ing.gonzalodecastro@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/gonzalo-de-castro",
    href: "https://www.linkedin.com/in/gonzalo-de-castro/",
  },
  {
    label: "GitHub",
    value: "github.com/GonzaloDeCastro",
    href: "https://github.com/GonzaloDeCastro",
  },
];

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="mt-6 bg-tertiary p-8 rounded-2xl max-w-3xl"
      >
        <p className="text-secondary text-[17px] leading-[30px]">
          Based in <span className="text-white">Riposto, Italy</span>. Authorized
          to work in Italy (Permesso di soggiorno). Available for{" "}
          <span className="text-white">remote, hybrid, or on-site</span> roles
          across Italy and Europe — open to relocation within Italy.
        </p>

        <ul className="mt-8 flex flex-col gap-4">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <span className="text-secondary text-[14px] uppercase tracking-wider">
                {link.label}
              </span>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="block text-white text-[18px] font-medium hover:text-[#5eacff] transition-colors mt-1"
              >
                {link.value}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
