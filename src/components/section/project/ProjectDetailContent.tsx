import React from "react";
import { IProjectDetail } from "@/types/project";

const ProjectDetailContent = ({ data }: IProjectDetail) => {
  return (
    <div className="detail-content">
      <div className="detail-content__intro">
        {data.intro.map(({ title, content }, idx) => (
          <div key={idx}>
            <h5 className="detail-content__intro--title">{title}</h5>
            {content.map((paragraph, idx) => (
              <div
                key={`${idx} content`}
                className="detail-content__intro--content"
              >
                <p>{paragraph}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="detail-content__info">
        {data.info.map(({ title, content }, idx) => (
          <div key={idx} className="info-box">
            <h6 className="detail-content__info--title">{title}</h6>
            <div className="detail-content__info--content">{content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetailContent;
