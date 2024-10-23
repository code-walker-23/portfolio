"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/hooks/useSectionInView";

const Contact = () => {
  const { ref } = useSectionInView({
    sectionName: "Contact",
    threshold: 0.5,
  });

  return (
    <section ref={ref} id="contact" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Contact</SectionHeading>
    </section>
  );
};

export default Contact;
