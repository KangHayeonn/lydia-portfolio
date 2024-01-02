import React from "react";
import ProjectDetailTitle from "@/components/section/project/ProjectDetailTitle";
import ProjectDetailContent from "@/components/section/project/ProjectDetailContent";
import { IProjectDetail } from "@/types/project";

const ProjectDetail = ({ data }: IProjectDetail) => {
  return (
    <section id="detail">
      <div className="detail__inner">
        <h2 className="detail__title">project detail</h2>
        <div className="detail__content">
          <ProjectDetailTitle data={data} />
          <ProjectDetailContent data={data} />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
