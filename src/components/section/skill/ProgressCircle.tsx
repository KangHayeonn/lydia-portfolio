import React from "react";
import { IProgressCircle } from "@/types/skill";
import { RADIUS, CIRCUMFERENCE } from "@/constants/skills";

const ProgressCircle = ({ value, name, type, open }: IProgressCircle) => {
  const strokeOffset = name ? CIRCUMFERENCE * (1 - value / 100) : CIRCUMFERENCE;
  const barElement = document.querySelector(`.${type} .bar`) as SVGElement;
  if (barElement) {
    barElement.style.strokeDashoffset = `${strokeOffset}`;
    barElement.style.strokeDasharray = `${CIRCUMFERENCE}`;
  }

  if (open) {
    const animateElement = document.querySelector(
      `.${type} .animate`,
    ) as SVGElement;

    if (animateElement) {
      animateElement.style.strokeDashoffset = `${
        CIRCUMFERENCE * (1 - value / 100)
      }`;
    }
  }

  return (
    <div className="progress">
      <div className="progress__inner">
        <svg className={`progress__svg ${type}`}>
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
