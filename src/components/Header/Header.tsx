import React from "react";
import { useLocation } from "react-router-dom";

interface HeaderProps {
  leftChild?: React.ReactNode;
  title?: string;
  rightChild?: React.ReactNode;
  noBorder?: boolean;
}

export default function Header({
  leftChild,
  title,
  rightChild,
  noBorder,
}: HeaderProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 w-full max-w-[50rem] min-w-[36rem] text-white h-[4.6rem] flex items-center justify-between px-8 py-[1.5rem] font-regular text-subtitle ${noBorder ? "" : "border-b border-gray13"} ${isHome ? "bg-gray15" : "bg-gray14"}`}
    >
      <div className="flex items-center min-w-[1.6rem] min-h-[1.6rem]">
        {leftChild}
      </div>
      {title && (
        <h2 className="absolute font-semibold text-center -translate-x-1/2 text-subtitle left-1/2">
          {title}
        </h2>
      )}
      <div className="flex items-center min-w-[1.6rem] min-h-[1.6rem]">
        {rightChild}
      </div>
    </header>
  );
}