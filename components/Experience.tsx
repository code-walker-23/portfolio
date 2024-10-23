"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  const { ref } = useSectionInView({
    sectionName: "Experience",
    threshold: 0.75,
  });
  return (
    <section id="experience" className="scroll-mt-28" ref={ref}>
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline>
        <VerticalTimelineElement></VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
