import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { ISubButton } from "@/types/common";

const SubButton = ({ rotate, onClick }: ISubButton) => {
  const getRotateStyle = () => {
    const rotateStyle = {
      rotate: `${rotate ? `${rotate}deg` : `90deg`}`,
    };
    return rotateStyle;
  };

  return (
    <div className="sub-btn" onClick={onClick}>
      <MdArrowForwardIos className="icon" style={getRotateStyle()} />
    </div>
  );
};

export default SubButton;
