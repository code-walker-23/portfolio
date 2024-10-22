import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import Link from "next/link";

const Projects = () => {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          // <Project key={index} /> or
          <React.Fragment key={index}>
            <Link href={""}>
              <Project {...project} />
            </Link>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
