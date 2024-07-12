import { useEffect, useState } from "react";
import BottomSheet from "./BottomSheet";
import BottomSheetHeader from "./BottomSheetHeader";
import Check from "../../assets/icons/Check.svg?react";
import { ottTags } from "../../types/ottTags";
interface modalProps {
  isShow: boolean;
  optionIndex?: number | undefined;
  onClick?: () => void;
  onSelect: (option: { key: string; value: string }) => void;
  setModalActive: (active: boolean) => void;
  setOptionIndex: (select: number) => void;
}

export default function ListModal(props: modalProps) {
  const { isShow, optionIndex, onSelect, setModalActive, setOptionIndex } =
    props;
  const ottEntries = Object.entries(ottTags);
  const [selectedOption, setSelectedOption] = useState<number | undefined>(
    optionIndex ? optionIndex : undefined,
  );

  useEffect(() => {
    setSelectedOption(optionIndex);
  }, [optionIndex]);

  return (
    <BottomSheet isShow={isShow} setModalActive={setModalActive}>
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
                setOptionIndex(index);
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
}
