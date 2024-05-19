import React from "react";
import classNames from "classnames";

const buttonVariants = {
  yellow: "bg-primary text-white",
  gray: "bg-cancel text-white",
  transparentYellow: "bg-transparent border border-primary text-primary",
  transparentGray: "bg-transparent border border-cancel text-cancel",
  borderNoneWhite: "bg-transparent text-white",
  borderNoneGray: "bg-transparent text-cancel",
};

type ButtonProps = {
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  size?: "xs" | "sm" | "base";
  variant?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

const SIZE = {
  xs: "btn-xs",
  sm: "btn-sm",
  base: "btn-base",
};

export default function Button(props: ButtonProps) {
  const {
    type = "button",
    disabled = false,
    size = "base",
    onClick,
    variant,
    children,
  } = props;

  const classes = classNames(
    "box-border p-4 rounded-md flex justify-center items-center font-sans",
    {
      [buttonVariants.yellow]: variant === "yellow" && !disabled,
      [buttonVariants.gray]: variant === "gray" && !disabled,
      [buttonVariants.transparentYellow]: variant === "transparentYellow",
      [buttonVariants.transparentGray]: variant === "transparentGray",
      [buttonVariants.borderNoneWhite]: variant === "transparentWhite",
      [buttonVariants.borderNoneGray]: variant === "transparentGray",
    },
  );

  const sizeClass = SIZE[size];
  const disabledClass = disabled ? "cursor-default" : "";

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${classes} ${sizeClass} ${disabledClass}`}
    >
      {children}
    </button>
  );
}
