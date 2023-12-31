import React from "react";
import Mountain from "@/components/section/intro/Mountain";
import { introWords } from "@/constants";

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro__inner">
        <h2 className="intro__title">intro</h2>
        <div className="intro__text">
          {introWords.map((word, key) => (
            <span key={`intro${key}`}>{word}</span>
          ))}
        </div>
      </div>
      <Mountain />
    </section>
  );
};

export default Intro;
