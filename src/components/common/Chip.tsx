import CheckChip from "./../../assets/icons/CheckChip.svg?react";

interface ChipProps {
  ott: string;
  isButton?: boolean;
  isCheck?: boolean;
  onClick?: () => void;
}

export default function Chip({ ott, isCheck, onClick, isButton }: ChipProps) {
  return (
    <div
      onClick={onClick}
      className={`flex ${isButton ? "cursor-pointer" : ""}`}
    >
      <div
        className={`inline-flex items-center justify-center gap-2 py-[0.8rem] px-[1.4rem] rounded-[5rem] ${isCheck ? "text-yellow5 border border-yellow5 bg-yellowTrans1" : "text-white bg-gray13"}`}
      >
        {isCheck && <CheckChip />}
        {ott}
      </div>
    </div>
  );
}
