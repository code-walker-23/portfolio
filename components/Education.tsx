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
              background: "#f3f4f6",
              boxShadow: "none",
              border: "1px solid rgba(0,0,0,0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid #9ca3ef",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: "white",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="font-semibold capitalize">{item.title}</h3>
            <p className="font-normal !mt-0">{item.college}</p>
            <p className="!mt-1 !font-normal text-gray-700">
              {item.percentage}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Education;
