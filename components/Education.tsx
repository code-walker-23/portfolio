"use client";
import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { educationData } from "@/lib/data";

const Education = () => {
  const { ref } = useSectionInView({
    sectionName: "Education",
    threshold: 0.5,
  });

  return (
    <section ref={ref} id="education" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Education</SectionHeading>
      <VerticalTimeline lineColor="">
        {educationData.map((item, index) => (
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
              borderRight: "0.4rem solid #9ca3af",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: "#ffffff",
              fontSize: "1.5rem",
              padding: "0.5rem",
              borderRadius: "50%",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="font-normal text-md text-gray-800">{item.edu}</p>
            <p className="mt-1 text-gray-600">{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Education;
