import React from "react";
import classNames from "classnames";

const buttonVariants = {
  yellow: {
    default: "bg-primary text-black",
    disabled: "bg-cancel gray13 text-black",
  },
  borderYellow: {
    default: "bg-transparent border border-primary text-primary",
    disabled: "bg-transparent border border-cancel text-cancel",
  },
  white: {
    default: "bg-transparent text-white",
    disabled: "bg-transparent text-cancel",
  },
} as const;

type ButtonVariant = keyof typeof buttonVariants;

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  size?: "xxs" | "xs" | "sm" | "base";
  variant: ButtonVariant;
  onClick?: () => void;
  children?: React.ReactNode;
};

/**
 * xxs: 44*32
 * xs: 82*52
 * sm: 152*52
 * base: 320*52
 */
const SIZE = {
  xxs: "btn-xxs",
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
    variant = "yellow",
    children,
  } = props;

  const classes = classNames(
    "box-border p-[1.6rem] rounded-[0.8rem] flex justify-center items-center font-sans text-[1.6rem] font-semibold leading-[2rem]",
    {
      [buttonVariants[variant].default]: !disabled,
      [buttonVariants[variant].disabled]: disabled,
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
