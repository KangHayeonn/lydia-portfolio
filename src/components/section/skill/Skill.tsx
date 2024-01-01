"use client";

import React, { useState, useEffect } from "react";
import ProgressCircle from "@/components/section/skill/ProgressCircle";
import { skills } from "@/constants/skills";
import { ISkillSet, ISkills, IOpenSkillSet, ISkillDetail } from "@/types/skill";
import { useInView } from "react-intersection-observer";

const Skill = () => {
  const [openSkillSet, setOpenSkillSet] = useState<IOpenSkillSet>({
    frontend: false,
    backend: false,
    etc: false,
  });
  const [lastOpenSkillSet, setLastOpenSkillSet] = useState<string>("frontend");
  const [skillDetail, setSkillDetail] = useState<ISkillDetail>({
    skillSet: "",
    name: "",
    content: "",
  });
  const [openSkillDetail, setOpenSkillDetail] = useState<boolean>(false);

  const handleOpenSkillSet = (skillSetType: string) => {
    setOpenSkillSet((prevState) => ({
      frontend: skillSetType === "frontend" ? !prevState.frontend : false,
      backend: skillSetType === "backend" ? !prevState.backend : false,
      etc: skillSetType === "etc" ? !prevState.etc : false,
    }));
    setLastOpenSkillSet(skillSetType);
  };

  const handleModal = (
    isOpen: boolean,
    skillData?: ISkillSet,
    skillSet?: string,
  ) => {
    if (isOpen && skillData && skillSet) {
      setSkillDetail({
        skillSet,
        name: skillData.name,
        content: skillData.content,
      });
    }
    setOpenSkillDetail(isOpen);
  };

  const isOpenSkill = (type: string) => {
    return type === "frontend"
      ? openSkillSet.frontend
      : type === "backend"
        ? openSkillSet.backend
        : openSkillSet.etc;
  };

  const getCircleStyle = (skillSet: ISkills, idx: number) => {
    const isRotate = isOpenSkill(skillSet.type);
    const rotation = (360 / skillSet.list.length) * idx;

    const circleStyle = {
      transform: isRotate
        ? `rotate(${rotation}deg) translate(200px) rotate(-${rotation}deg)`
        : `rotate(0deg) translate(0px)`,
    };

    return circleStyle;
  };

  const getSkillCircleStyle = (type: string) => {
    let skillCircleStyle;

    if (type === "frontend") {
      skillCircleStyle = {
        left: openSkillSet.frontend ? "40vw" : "0vw",
        top: openSkillSet.frontend ? "37vh" : "16vh",
      };
    } else if (type === "backend") {
      skillCircleStyle = {
        left: openSkillSet.backend ? "40vw" : "0vw",
        top: "37vh",
      };
    } else {
      skillCircleStyle = {
        left: openSkillSet.etc ? "40vw" : "0vw",
        top: openSkillSet.etc ? "37vh" : "58vh",
      };
    }

    return skillCircleStyle;
  };

  // SkillSet Open Observer Event
  const { ref: skillRef, inView } = useInView({
    threshold: 0.35,
    delay: 500,
    trackVisibility: true,
  });

  useEffect(() => {
    if (inView) {
      handleOpenSkillSet(lastOpenSkillSet);
    }

    return () => {
      setOpenSkillSet({
        frontend: false,
        backend: false,
        etc: false,
      });
    };
  }, [inView, lastOpenSkillSet]);

  return (
    <section id="skill">
      <div className="skill__inner">
        <h2 className="skill__title">skill</h2>
        <div className="skill__content" ref={skillRef}>
          {skills.map((skillSet, key) => (
            <div
              key={`skillSet${key}`}
              className={`${skillSet.type}`}
              style={getSkillCircleStyle(skillSet.type)}
            >
              {skillSet.list.map((skill, idx) => (
                <div key={`skill${idx}`}>
                  <div
                    className="circle-animation"
                    style={getCircleStyle(skillSet, idx)}
                  >
                    <ProgressCircle
                      type={skill.name}
                      value={skill.value}
                      open={isOpenSkill(skillSet.type)}
                    />
                    <div
                      className={`${skill.className} skills`}
                      onMouseEnter={() =>
                        handleModal(true, skill, skillSet.type)
                      }
                      onMouseLeave={() => handleModal(false)}
                    />
                  </div>
                </div>
              ))}
              <div
                onClick={() => handleOpenSkillSet(skillSet.type)}
                className="skill-circle"
              >
                <ProgressCircle
                  name={skillSet.type}
                  type={`${skillSet.type}-sub`}
                  value={100}
                  open={false}
                />
              </div>
              {openSkillDetail && skillDetail.skillSet === skillSet.type && (
                <div className="skill-detail__card">
                  <div className="skill-detail__name">{skillDetail.name}</div>
                  <div className="skill-detail__content">
                    {skillDetail.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
