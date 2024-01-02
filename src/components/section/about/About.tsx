"use client";

import React from "react";
import SubButton from "@/components/common/SubButton";
import { profile } from "@/constants";
import { useMoveToSection } from "@/hooks/useMoveToSection";

const About = () => {
  const { handleMove } = useMoveToSection();

  return (
    <section id="about">
      <div className="about__inner">
        <h2 className="about__title">about</h2>
        <div className="about__content">
          <ul>
            <li>
              <span>
                <span className="underline">
                  <span className="strong">사소한</span> 불편함
                </span>
                을
              </span>
              <br />
              <span>그냥 지나치지 않습니다.</span>
            </li>
            <li>
              <span>
                <span className="underline">
                  <span className="strong">디테일</span>한 부분
                </span>
                에서
              </span>
              <br />
              <span>
                <span className="underline">
                  <span className="strong">퀄리티</span> 높은 서비스
                </span>
                를 완성합니다.
              </span>
            </li>
            <li>
              <span>문제 해결을 통해</span>
              <br />
              <span>
                <span className="underline">
                  <span className="strong">성장</span>하는 기쁨
                </span>
                을 느낍니다.
              </span>
            </li>
          </ul>
          <div className="about__card-container">
            {profile.map((info, key) => (
              <div key={`profile${key}`} className="about__card-box">
                <div className="about__card-content">
                  <div className="icon">
                    <info.icon />
                  </div>
                  <div className="text-box">
                    <p className="text-box__type">{info.type}</p>
                    <p className="text-box__content">{info.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SubButton onClick={() => handleMove("skill")} />
    </section>
  );
};

export default About;
