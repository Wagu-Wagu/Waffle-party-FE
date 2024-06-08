import React, { useState } from "react";
import InputCheck from "../../assets/icons/InputCheck.svg?react";
import InputDelete from "../../assets/icons/InputDelete.svg?react";
import InputError from "../../assets/icons/InputError.svg?react";
import checkValidation from "../../hooks/checkValidation";
import { validationResultType } from "../../types/validationResultType";
import { userProfileState } from "../../recoil/userProfile";
import { useSetRecoilState } from "recoil";

interface InputProps {
  disabled?: boolean;
  value: string;
  label: string;
  placeholder: string;
  maxLen: number;
  onClick?: () => void;
  // onChange: (res: validationResultType) => void;
  onChange: (res: validationResultType) => void;
}

export default function Input(props: InputProps) {
  const { disabled, label, value, placeholder, maxLen, onClick, onChange } =
    props;
  const [inputValue, setInputValue] = useState<string>(value);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const setUserProfile = useSetRecoilState(userProfileState);

  /**
   * input이 변경될때
   * @param event
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length <= maxLen) {
      setInputValue(value);
      const res = checkValidation(value);

      onChange(res);

      if (res.success) {
        setMessage(res.message);
        setIsSuccess(true);
        setIsError(false);
      } else {
        if (value.length === 0) {
          setIsSuccess(false);
          setIsError(true);
          setMessage(res.message);
        } else {
          setMessage(res.message);
          setIsError(true);
          setIsSuccess(false);
        }
      }
    }
  };

  /**
   * 삭제 아이콘 클릭
   * @param event
   */
  const handleDeleteClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setTimeout(() => {
      setInputValue("");
      setMessage("");
      setIsError(false);
      setIsSuccess(false);
      onChange(checkValidation(""));
      setUserProfile((prevState) => ({
        ...prevState,
        nickname: "",
      }));
    }, 0);
  };

  /**
   * 분기에 맞는 border 색상
   * @returns
   */
  const getBorderClass = () => {
    if (isSuccess) return "border-success";
    if (isError) return "border-error";
    if (disabled) return "cursor-default border-gray9 text-gray9";
    return "border-gray8";
  };

  /**
   * 분기에 맞는 text 색상
   * @returns
   */
  const getTextClass = () => {
    if (isSuccess) return "text-success";
    if (isError) return "text-error";
    return "text-gray8";
  };

  /**
   * 성공일때
   * @param param0
   * @returns
   */
  const RenderSuccessIcons = ({ onClick }: { onClick?: () => void }) => (
    <div className="flex gap-[1.2rem]">
      <div
        className="flex justify-center items-center w-[1.6rem] h-[1.6rem]"
        onClick={onClick}
      >
        <InputCheck />
      </div>
      <div
        className="flex ml-auto justify-center items-center w-[1.6rem] h-[1.6rem] cursor-pointer"
        onClick={handleDeleteClick}
      >
        <InputDelete />
      </div>
    </div>
  );

  /**
   * 성공, 에러 여부
   * @param param0
   * @returns
   */
  const RenderDefaultIcons = ({ onClick }: { onClick?: () => void }) => (
    <>
      {isSuccess && (
        <div
          className="flex ml-auto justify-center items-center w-[1.6rem] h-[1.6rem]"
          onClick={onClick}
        >
          <InputCheck />
        </div>
      )}
      {isError && (
        <div
          className="flex ml-auto justify-center items-center w-[1.6rem] h-[1.6rem]"
          onClick={onClick}
        >
          <InputError />
        </div>
      )}
    </>
  );

  /**
   * 에러일때
   * @param param0
   * @returns
   */
  const RenderErrorIcons = ({ onClick }: { onClick?: () => void }) => (
    <div className="flex gap-[1.2rem]">
      <div
        className="flex justify-center items-center w-[1.6rem] h-[1.6rem]"
        onClick={onClick}
      >
        <InputError />
      </div>

      <div
        className="flex justify-center items-center w-[1.6rem] h-[1.6rem] cursor-pointer"
        onClick={handleDeleteClick}
      >
        <InputDelete />
      </div>
    </div>
  );

  return (
    <div className={`gap-[0.2rem] box-border flex flex-col ${getTextClass()}`}>
      <div
        className={`box-border rounded-[0.4rem] flex flex-col items-start justify-start px-[1.2rem] py-[0.8rem] w-[32rem] h-[5.6rem] border ${getBorderClass()}`}
      >
        <div className="w-full">
          <p className={`w-full text-caption ${getTextClass()}`}>{label}</p>
          <div className="items-center flex gap-[1.2rem] w-full">
            <div className="text-subtitle w-[24rem]">
              <input
                className="w-full text-white bg-transparent outline-none placeholder-gray8"
                placeholder={isFocused ? "" : placeholder}
                value={inputValue}
                onChange={handleInputChange}
                disabled={disabled}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 0)}
              />
            </div>
            {isFocused ? (
              isSuccess ? (
                <RenderSuccessIcons onClick={onClick} />
              ) : isError && inputValue.length > 0 ? (
                <RenderErrorIcons onClick={onClick} />
              ) : (
                <RenderDefaultIcons onClick={onClick} />
              )
            ) : (
              <RenderDefaultIcons onClick={onClick} />
            )}
          </div>
        </div>
      </div>
      <div
        className={`text-[1.1rem] px-[1.2rem] flex h-[1.2rem] items-center ${getTextClass()}`}
      >
        <p>{message}</p>
        <p className="ml-auto">
          {inputValue.length}/{maxLen}
        </p>
      </div>
    </div>
  );
}
