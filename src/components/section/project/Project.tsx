"use client";

import React, { useState, useEffect } from "react";
import ProjectCard from "@/components/section/project/ProjectCard";
import ProjectDetail from "@/components/section/project/ProjectDetail";
import { projects } from "@/constants/project";
import Api from "@/api/remotes";
import { IProjects } from "@/types/project";

const Project = () => {
  const [openDetail, setOpenDetail] = useState<number>(0);
  const [projectList, setProjectList] = useState<Array<IProjects>>(projects);

  const handleDetail = (idx?: number) => {
    !idx ? setOpenDetail(0) : setOpenDetail(idx);
  };

  const getProjects = async () => {
    const data = await Api.v1GetProject()
      .then((res) => res.data)
      .catch((err) => err);
    setProjectList(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <section id="project">
        <div className="project__inner">
          <h2 className="project__title">project</h2>
          <div className="project__content">
            <ProjectCard handleDetail={handleDetail} />
          </div>
        </div>
        <ProjectDetail data={projectList[openDetail]} />
      </section>
    </>
  );
};

export default Project;
