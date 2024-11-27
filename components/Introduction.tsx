"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/hooks/useSectionInView";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const Introduction = () => {
  const { ref } = useSectionInView({ threshold: 0.5, sectionName: "Home" });
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://avatars.githubusercontent.com/u/116024992?v=4"
              alt="Vinay Chhabra"
              width="292"
              height="292"
              quality="95"
              priority={true}
              className="rounded-full h-24 w-24 border-[0.35rem] border-white shadow-xl object-cover dark:border-white/10"
            />
          </motion.div>

          <motion.span
            className="text-4xl absolute right-0 bottom-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 150,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Vinay Chhabra.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">internship experience</span> in{" "}
        <span className="italic">building websites</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className=" group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 
          hover:text-gray-950 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:hover:text-white hover:dark:bg-white/5"
          href="/vinay-resume.pdf"
          download={true}
        >
          Download Resume
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10  dark:bg-white/10  dark:text-white/60 dark:hover:text-gray-200"
          href="https://www.linkedin.com/in/vinaychhabra27/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
          {""}
        </a>

        <a
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10  dark:text-white/60  dark:bg-white/10 dark:hover:text-gray-200"
          href="https://github.com/code-walker-23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
          {""}
        </a>
      </motion.div>
    </section>
  );
};

export default Introduction;
