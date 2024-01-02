import React from "react";
import ProjectDetailTitle from "@/components/section/project/ProjectDetailTitle";
import ProjectDetailContent from "@/components/section/project/ProjectDetailContent";
import SubButton from "@/components/common/SubButton";
import { IProjectDetail } from "@/types/project";
import { useMoveToSection } from "@/hooks/useMoveToSection";

const ProjectDetail = ({ data }: IProjectDetail) => {
  const { handleMove } = useMoveToSection();

  return (
    <section id="detail">
      <div className="detail__inner">
        <h2 className="detail__title">project detail</h2>
        <div className="detail__content">
          <ProjectDetailTitle data={data} />
          <ProjectDetailContent data={data} />
        </div>
      </div>
      <SubButton
        rotate={270}
        onClick={() => {
          handleMove("project");
        }}
      />
    </section>
  );
};

export default ProjectDetail;
