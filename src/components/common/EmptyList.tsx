import React from "react";

interface EmptyListProps {
  icon: React.ReactNode;
  mainText: string;
  subText?: React.ReactNode;
}

export default function EmptyList({ icon, mainText, subText }: EmptyListProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray10">
      {icon}
      <p className="font-medium text-[1.6rem] leading-[2.4rem] mt-4 mb-6">
        {mainText}
      </p>
      <div className="text-center whitespace-pre-line text-caption01 font-regular text-gray8">
        {subText}
      </div>
    </div>
  );
}
