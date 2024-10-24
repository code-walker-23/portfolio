"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/hooks/useSectionInView";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const handleSubmit = () => {};

const Contact = () => {
  const { ref } = useSectionInView({
    sectionName: "Contact",
    threshold: 0.75,
  });

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-28 sm:mb-40 w-[min(100%,38rem)]  text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-5">
        Please contact me directly at{" "}
        <a
          className="underline text-gray-600 hover:text-gray-800 transition duration-200 font-semibold"
          href="mailto:chhabravinay549@gmail.com"
        >
          chhabravinay549@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        className="mt-10 flex flex-col"
        onSubmit={handleSubmit}
        action={(formData) => {
          console.log(formData);
        }}
      >
        <input
          type="email"
          className="px-4 h-14 rounded-lg border border-black/10"
          required
          maxLength={500}
          placeholder="Your Email"
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-4"
          placeholder="Your message"
          required
          maxLength={500}
        />
        <button
          type="submit"
          className="group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex items-center justify-center gap-2 focus:scale-110 hover:scale-105 active:scale-105 hover:bg-gray-950"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all  group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
