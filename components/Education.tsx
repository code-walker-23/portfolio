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
      <VerticalTimeline lineColor="#9ca3ef">
        {educationData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "#f3f4f6",
              boxShadow: "none",
              border: "1px solid rgba(0,0,0,0.1)",
              textAlign: "left",
              padding: "1.5rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid #9ca3ef",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: "white",
              color: "#4f46e5",
              fontSize: "1.5rem",
              padding: "0.5rem",
              borderRadius: "50%",
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
