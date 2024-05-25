import React, { forwardRef, useState } from "react";
import BottomSheet from "./BottomSheet";
import BottomSheetHeader from "./BottomSheetHeader";
import Check from "../../assets/icons/Check.svg?react";
import { ottTags } from "../../types/ottTags";
interface modalProps {
  isShow: boolean;
  onClick?: () => void;
  onSelect: (option: { key: string; value: string }) => void;
}

const ListModal = forwardRef<HTMLElement, modalProps>((props, ref) => {
  const { isShow, onSelect } = props;
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  // const ottOptions = Object.values(ottTags);
  const ottEntries = Object.entries(ottTags);

  return (
    <BottomSheet isShow={isShow} ref={ref}>
      <BottomSheetHeader />
      <div
        className="text-white font-pretendard bg-gray14 py-[3rem] px-[2rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="flex flex-col items-start text-lg font-normal leading-6 gap-9">
          <li className="text-[2.8rem] h-[2.8rem] font-semibold leading-7">
            OTT를 선택해주세요.
          </li>
          {ottEntries.map(([key, value], index) => (
            <li
              key={key}
              onClick={() => {
                setSelectedOption(index);
                onSelect({ key, value });
              }}
              className="flex text-[1.6rem] items-center h-[2.4rem] w-full gap-2 cursor-pointer"
            >
              {value}
              {selectedOption === index && (
                <div className="ml-auto">
                  <Check />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </BottomSheet>
  );
});

export default ListModal;
