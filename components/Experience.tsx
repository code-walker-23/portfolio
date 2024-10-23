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
    threshold: 0.5,
  });

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40" ref={ref}>
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="#9ca3ef">
        {experiencesData.length > 0 ? (
          experiencesData.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "#ffffff",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                border: "1px solid #e5e7eb",
                textAlign: "left",
                padding: "1.5rem 2rem",
                borderRadius: "8px",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3ef",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: "#ffffff",
                color: "#4f46e5",
                fontSize: "1.5rem",
                padding: "0.5rem",
                borderRadius: "50%",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <h3 className="font-semibold text-lg text-gray-800">{experience.title}</h3>
              <p className="font-medium text-md text-gray-700">{experience.location}</p>
              <p className="mt-1 text-gray-600">{experience.description}</p>
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
