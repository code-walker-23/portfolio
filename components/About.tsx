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
          React.js, Next.js, JavaScript, TypeScript,
        </span>{" "}
        and{" "}
        <span className="font-medium">
          Data Structures and Algorithms (DSA)
        </span>
        .I'm eager to keep growing in frontend development and technology. I
        enjoy tackling complex problems and building systems that are both
        efficient and user-friendly. My goal is to develop solutions that make a
        real impact. Through my internships in frontend development, I’ve gained
        valuable experience that has strengthened my skills and passion for
        creating scalable, high-performance applications.
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
