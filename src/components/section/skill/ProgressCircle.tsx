import React from "react";
import { IProgressCircle } from "@/types/skill";

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const ProgressCircle = ({ value, name, open }: IProgressCircle) => {
  const strokeOffset = name ? CIRCUMFERENCE * (1 - value / 100) : CIRCUMFERENCE;

  document.documentElement.style.setProperty(
    "--strokeOffset",
    `${strokeOffset}`,
  );
  document.documentElement.style.setProperty(
    "--strokeArray",
    `${CIRCUMFERENCE}`,
  );

  return (
    <div className="progress">
      <div className="progress__inner">
        <svg className="progress__svg">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e8e3f7" />
              <stop offset="50%" stopColor="#d2c4fc" />
              <stop offset="90%" stopColor="#906ff3" />
            </linearGradient>
          </defs>
          <circle
            className="frame"
            cx={60}
            cy={60}
            r={RADIUS}
            strokeWidth="6"
          />
          <circle
            className={`bar ${open ? "animate" : ""}`}
            cx={60}
            cy={60}
            r={RADIUS}
            strokeWidth="6"
          />
        </svg>
        <strong className="progress__text">{name}</strong>
      </div>
    </div>
  );
};

export default ProgressCircle;
