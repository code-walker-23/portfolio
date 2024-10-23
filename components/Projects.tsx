"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";

import { useSectionInView } from "@/hooks/useSectionInView";

const Projects = () => {
  const { ref } = useSectionInView({ threshold: 0.2, sectionName: "Projects" });

  return (
    <section className="mb-28 sm:mb-40 scroll-mt-28" id="projects" ref={ref}>
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
