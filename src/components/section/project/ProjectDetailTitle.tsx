import React from "react";
import Image from "next/image";
import { IProjectDetail } from "@/types/project";

const ProjectDetailTitle = ({ data }: IProjectDetail) => {
  return (
    <div className="detail-title">
      <Image
        src={data.mainImage}
        alt={`${data.nav.content}`}
        className="image"
        width={400}
        height={270}
      />
      <div className="detail-title__box">
        <h5 className="detail-title__name"> {data.nav.name} </h5>
        <p>{data.nav.type} project</p>
        {data.nav.link.map(({ title, href }, index) => (
          <div key={index}>
            <p className="title">{title}</p>
            <a
              className="link"
              href={href}
              target="_blank"
              aria-label="프로젝트 링크"
            >
              {href}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetailTitle;
