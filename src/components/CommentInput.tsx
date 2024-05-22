import UnLock from "../assets/icons/UnLock.svg?react";
import Lock from "../assets/icons/Lock.svg?react";
import Button from "./common/Button";

interface commentProps {
  isLocked: boolean;
  isFocused: boolean;
  inputValue: string;
  uptoSubmit: boolean;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setIsLocked: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddComment: () => void;
  handleChangeContent: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setPlaceHolderClass: () => string;
  setTextClass: () => string;
}

export default function CommentInput({
  isLocked,
  isFocused,
  inputValue,
  uptoSubmit,
  setIsLocked,
  setIsFocused,
  setInputValue,
  handleAddComment,
  handleChangeContent,
  handleKeyPress,
  setPlaceHolderClass,
  setTextClass,
}: commentProps) {
  return (
    <div className="fixed max-w-[50rem] min-w-[36rem] bottom-0 inline-flex flex-col items-start justify-start w-full v-[5.4rem]">
      <div className="w-full px-[2.8rem] py-[1.1rem] bg-gray14 border-t-2 border-gray13 flex-col justify-start items-start flex">
        <div className="w-full justify-start items-center gap-[15px] inline-flex">
          <div
            className="w-[2.4rem] h-[2.4rem]"
            onClick={() => setIsLocked((prev) => !prev)}
          >
            {isLocked ? <Lock /> : <UnLock />}
          </div>

          <div
            className={`w-full text-gray10 text-[1.6rem] font-normal font-['Pretendard'] leading-[2.4rem] flex gap-[1.5rem]`}
          >
            <input
              className={`w-full bg-transparent outline-none whitespace-nowrap ${setPlaceHolderClass()} ${setTextClass()} }`}
              placeholder={isFocused ? "" : "댓글을 남겨주세요."}
              onFocus={() => setIsFocused(true)}
              value={inputValue}
              onChange={handleChangeContent}
              onKeyDown={handleKeyPress}
            />
          </div>
          <Button
            type="button"
            disabled={uptoSubmit ? false : true}
            size="xxs"
            variant="yellow"
            onClick={handleAddComment}
          >
            등록
          </Button>
        </div>
      </div>
      <div className="w-full h-[3.8rem] relative bg-neutral-800" />
    </div>
  );
}
