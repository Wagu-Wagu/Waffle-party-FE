import React, { useState } from "react";
import CheckChip from "./../../assets/icons/CheckChip.svg?react";

interface ChipProps {
  ott: string;
  isButton?: boolean;
  isCheck?: boolean;
  onClick?: () => void;
}

export default function Chip({ ott, isCheck, onClick, isButton }: ChipProps) {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setStartX(e.clientX);
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (Math.abs(e.clientX - startX) > 5) {
      setIsDragging(true);
    }
  };

  const handleMouseUp = () => {
    if (!isDragging && onClick) {
      onClick();
    }
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className={`flex ${isButton ? "cursor-pointer" : ""}`}
    >
      <div
        className={`whitespace-nowrap inline-flex items-center justify-center gap-2 py-[0.8rem] px-[1.4rem] rounded-[5rem] ${
          isCheck
            ? "text-yellow5 border border-yellow5 bg-yellowTrans1"
            : "text-white bg-gray13"
        }`}
      >
        {isCheck && <CheckChip />}
        {ott}
      </div>
    </div>
  );
}
