"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeading from "./SectionHeading";
import { experiencesData } from "@/lib/data";

const Experience = () => {
  const { ref } = useSectionInView({
    sectionName: "Experience",
    threshold: 0.75,
  });

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40" ref={ref}>
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline>
        {experiencesData.length > 0 ? (
          experiencesData.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              <h3>{experience.title}</h3>
              <h4>{experience.location}</h4>
              <p>{experience.description}</p>
            </VerticalTimelineElement>
          ))
        ) : (
          <VerticalTimelineElement>
            <h3>No experiences available.</h3>
          </VerticalTimelineElement>
        )}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
