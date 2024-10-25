"use client";
import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { educationData } from "@/lib/data";
import { useThemeContext } from "@/context/ThemeContext";

const Education = () => {
  const { theme } = useThemeContext();
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
              background:
                theme === "light" ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              border:
                theme === "light"
                  ? "1px solid #e5e7eb"
                  : "1px solid rgba(255, 255, 255, 0.1)",
              textAlign: "left",
              padding: "1.5rem 2rem",
              borderRadius: "8px",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background:
                theme === "light" ? "#ffffff" : "rgba(255, 255, 255, 0.5)",
              fontSize: "1.5rem",
              padding: "0.5rem",
              borderRadius: "50%",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3
              className={`font-semibold text-lg ${
                theme === "light" ? "text-gray-800" : "text-white"
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`font-medium text-md ${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              } italic`}
            >
              {item.edu}
            </p>
            <p
              className={`mt-1 ${
                theme === "light" ? "text-gray-500" : "text-white/75"
              }`}
            >
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Education;
