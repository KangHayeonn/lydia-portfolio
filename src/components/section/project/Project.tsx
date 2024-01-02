"use client";

import React, { useState } from "react";
import ProjectCard from "@/components/section/project/ProjectCard";
import ProjectDetail from "@/components/section/project/ProjectDetail";
import { projects } from "@/constants/project";

const Project = () => {
  const [openDetail, setOpenDetail] = useState<number>(0);

  const handleDetail = (idx?: number) => {
    !idx ? setOpenDetail(0) : setOpenDetail(idx);
  };

  return (
    <>
      <section id="project">
        <div className="project__inner">
          <h2 className="project__title">project</h2>
          <div className="project__content">
            <ProjectCard handleDetail={handleDetail} />
          </div>
        </div>
        <ProjectDetail data={projects[openDetail]} />
      </section>
    </>
  );
};

export default Project;
