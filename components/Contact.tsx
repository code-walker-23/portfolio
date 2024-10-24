/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/hooks/useSectionInView";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";

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
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (data?.error?.message) {
            toast.error("Something went wrong, please try again later!");
            return;
          }
          // console.log(error); it is giving undefined
          toast.success("Email sent successfully!");
        }}
      >
        <input
          type="email"
          name="senderEmail"
          className="px-4 h-14 rounded-lg border border-black/10"
          required
          maxLength={500}
          placeholder="Your Email"
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-4"
          name="message"
          placeholder="Your message"
          required
          maxLength={500}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
