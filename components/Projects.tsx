"use client";
import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  // do not set state during rendering always use useffect
  useEffect(() => {
    // disabling for a second when we clicking other sections -> it acts as observer
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  
  return (
    <section className="scroll-mt-28" id="projects" ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          // <Project key={index} /> or
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
