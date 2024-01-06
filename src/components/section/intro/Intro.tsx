"use client";

import React, { useEffect } from "react";
import Mountain from "@/components/section/intro/Mountain";
import { introWords } from "@/constants";
import useTypingWords from "@/hooks/useTypingWords";
import Api from "@/api/remotes";

const Intro = () => {
  const typing = useTypingWords({
    completeWords: introWords,
    delay: 100,
  });

  const getIntro = async () => {
    await Api.v1GetIntro()
      .then((res) => console.log(res))
      .catch((err) => err);
  };

  useEffect(() => {
    getIntro();
  }, []);

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
