"use client";
import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView({ sectionName: "Skills", threshold: 0.75 });
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28
    text-center sm:mb-40
    "
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 font-semibold"
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
