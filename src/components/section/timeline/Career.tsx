"use client";

import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItems from "@/components/section/timeline/CareerItems";
import SubButton from "@/components/common/SubButton";
import { TimelineData } from "@/constants/timeline";
import { useMoveToSection } from "@/hooks/useMoveToSection";

const Career = () => {
  const { handleMove } = useMoveToSection();

  return (
    <section id="timeline">
      <div className="timeline__inner">
        <h2 className="timeline__title">TimeLine</h2>
        <div className="timeline__box">
          <Timeline>
            {TimelineData.map((data, idx) => (
              <TimelineItems
                key={`timeline${idx}`}
                data={data}
                time={idx * 300 + 500}
                lastCheck={TimelineData.length - 1 === idx}
              />
            ))}
          </Timeline>
        </div>
      </div>
      <div className="button">
        <SubButton onClick={() => handleMove("project")} />
      </div>
    </section>
  );
};

export default Career;
