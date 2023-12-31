"use client";

import React from "react";
import Mountain from "@/components/section/intro/Mountain";
import { introWords } from "@/constants";
import useTypingWords from "@/hooks/useTypingWords";

const Intro = () => {
  const typing = useTypingWords({
    completeWords: introWords,
    delay: 100,
  });

  return (
    <section id="intro">
      <div className="intro__inner">
        <h2 className="intro__title">intro</h2>
        <div className="intro__text">
          <span className="intro__text--typing">{typing}</span>
        </div>
      </div>
      <Mountain />
    </section>
  );
};

export default Intro;
