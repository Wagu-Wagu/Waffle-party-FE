import React from "react";

type ButtonProps = {
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  size?: "xs" | "sm" | "base";
  radius?: "xs" | "sm" | "base";
  onClick?: () => void;
  children: React.ReactNode;
};

/**
 * TODO 디자인 확정되면 수정
 */
const SIZE = {
  xs: "btn-xs",
  sm: "btn-sm",
  base: "btn-base",
};

/**
 * TODO 디자인 확정되면 수정
 */
const RADIUS_LEVEL = {
  xs: "rounded-[0.2rem]",
  sm: "rounded-[0.5rem]",
  base: "rounded-[1rem]",
};

export default function Button(props: ButtonProps) {
  const {
    className,
    type = "button",
    disabled = false,
    size = "base",
    radius = "base",
    onClick,
    children,
  } = props;

  const sizeClass = SIZE[size];
  const radiusClass = RADIUS_LEVEL[radius];
  const disabledClass = disabled ? "cursor-default opacity-50" : "";
  // const btnStyleClass = border
  //   ? `border-1 border-${color} text-${color}`
  //   : `bg-${color}`;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`box-border m-1 flex justify-center items-center font-sans ${className} ${sizeClass} ${disabledClass} ${radiusClass}`}
    >
      {children}
    </button>
  );
}
