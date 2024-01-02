import React from "react";
import ProjectCard from "@/components/section/project/ProjectCard";

const Project = () => {
  return (
    <section id="project">
      <div className="project__inner">
        <h2 className="project__title">project</h2>
        <div className="project__content">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Project;
