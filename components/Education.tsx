"use client";
import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeading from "./SectionHeading";

const Education = () => {
  const { ref } = useSectionInView({
    sectionName: "Education",
    threshold: 0.75,
  });
  return (
    <section ref={ref} id="education" className="scroll-mt-28">
      <SectionHeading>Education</SectionHeading>
    </section>
  );
};

export default Education;
