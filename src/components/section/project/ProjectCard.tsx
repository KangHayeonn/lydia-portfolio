import React from "react";
import { projects } from "@/constants/project";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="card__inner">
      <p className="text">
        <span className="strong">클릭</span>
        하면 프로젝트를 자세히 볼 수 있어요!
      </p>
      <div className="card__box-container">
        {projects.map((ele, idx) => (
          <div key={`project${idx}`} className="card__box">
            <div className="card__contents">
              <div className="card__contents--light" />
              <Image
                src={ele.mainImage}
                alt="프로젝트 이미지"
                className="image"
                width={310}
                height={200}
              />
              <div className="title">
                <h6>{ele.nav.name}</h6>
                <p>{ele.nav.type} project</p>
              </div>
              <div className="content">
                <p>{ele.nav.content}</p>
                <div className="sub-title">Stack</div>
                <p className="stack">{ele.nav.stack}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
