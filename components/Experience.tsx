"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeading from "./SectionHeading";
import { experiencesData } from "@/lib/data";
import React from "react";

const Experience = () => {
  const { ref } = useSectionInView({
    sectionName: "Experience",
    threshold: 0.75,
  });

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40" ref={ref}>
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline>
        {experiencesData.map((experience, index) => (
          <VerticalTimelineElement
            key={index} // Ideally, use a unique identifier
            date={experience.date} // Ensure each experience has a date property
            icon={experience.icon} // Use the icon from the data
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} // Customize icon style
          >
            <h3>{experience.title}</h3> {/* Use title instead of location */}
            <h4>{experience.location}</h4> {/* Display location separately */}
            <p>{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
