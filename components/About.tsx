"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/hooks/useSectionInView";

const About = () => {
  const { ref } = useSectionInView({ threshold: 0.75, sectionName: "About" });

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I’ve been immersing myself in{" "}
        <span className="font-medium">
          React, Next.js, JavaScript, TypeScript,
        </span>{" "}
        and{" "}
        <span className="font-medium">
          Data Structures and Algorithms (DSA)
        </span>
        . I’m excited to continue learning and growing in these areas. I enjoy
        tackling new challenges and love building interfaces that are both
        engaging and visually appealing. My goal is to combine design with
        functionality, ensuring that each project delivers real value to users.
        I’ve also gained hands-on experience through internships in web
        development, which has further fueled my passion for frontend system
        design.
      </p>

      <p>
        <span className="italic">As I look toward my career</span>, I’m eager to
        connect with others in the tech community and collaborate on innovative
        projects. I believe in the power of teamwork and curiosity, and I can’t
        wait to create something amazing together!
      </p>
    </motion.section>
  );
};

export default About;
