import React from "react";
import CheckBoxOff from "../../assets/icons/CheckBoxOff.svg?react";
import CheckBoxOn from "../../assets/icons/CheckBoxOn.svg?react";
interface CheckProps {
  checked: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}

export default function CheckBox(props: CheckProps) {
  const { children, checked, onClick } = props;
  return (
    <div className="flex">
      <div
        className="w-[1.8rem] h-[1.8rem] rounded-[0.48rem]"
        onClick={onClick}
      >
        {checked ? <CheckBoxOn /> : <CheckBoxOff />}
      </div>
      {children}
    </div>
  );
}
