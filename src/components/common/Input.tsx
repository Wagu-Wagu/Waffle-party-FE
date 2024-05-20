import React, { useState, useEffect } from "react";
import InputCheck from "../../assets/icons/InputCheck.svg?react";
import InputDelete from "../../assets/icons/InputDelete.svg?react";
import InputError from "../../assets/icons/InputError.svg?react";

interface InputProps {
  disabled?: boolean;
  onClick?: () => void;
}

export default function Input({ disabled = false, onClick }: InputProps) {
  const [inputValue, setInputValue] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const maxTextLen = 50;

  /**
   * 글자수 감지
   */
  useEffect(() => {
    if (inputValue.length > 50) {
      setIsError(true);
      setIsSuccess(false);
    } else if (inputValue.length > 0) {
      setIsError(false);
      setIsSuccess(true);
    } else {
      setIsError(false);
      setIsSuccess(false);
    }
  }, [inputValue]);

  /**
   * input change
   * @param event
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  /**
   * input delete
   */
  const handleDeleteClick = () => {
    setInputValue("");
    setIsError(false);
    setIsSuccess(false);
  };

  /**
   * border class 정의
   * @returns
   */
  const getBorderClass = () => {
    if (isSuccess) return "border-success";
    if (isError) return "border-error";
    if (disabled) return "cursor-default border-gray9 text-gray9";
    return "border-gray8";
  };

  /**
   * text class 정의
   * @returns
   */
  const getTextClass = () => {
    if (isSuccess) return "text-success";
    if (isError) return "text-error";
    return "text-gray8";
  };

  /**
   * placeholder class 정의
   * @returns
   */
  const getPlaceholderClass = () => {
    if (disabled) return "placeholder-gray8";
    return "placeholder-white";
  };

  return (
    <div
      className={`gap-[0.2rem] box-border flex flex-col w-[32rem] h-[5.6rem] ${getTextClass()}`}
    >
      <div
        className={`box-border rounded-[0.4rem] flex flex-col items-start justify-start px-[1.2rem] py-[0.8rem] w-[32rem] h-[5.6rem] border ${getBorderClass()}`}
      >
        <div className="w-full">
          <p className={`w-full text-caption ${getTextClass()}`}>라벨</p>
          <div className="items-center flex gap-[1.2rem] w-full">
            <div className="text-subtitle w-[24rem]">
              <input
                className={`w-full bg-transparent outline-none ${getPlaceholderClass()}`}
                placeholder="입력"
                value={inputValue}
                onChange={handleInputChange}
                disabled={disabled}
              />
            </div>
            {isSuccess && (
              <div
                className="flex justify-center items-center w-[1.6rem] h-[1.6rem]"
                onClick={onClick}
              >
                <InputCheck />
              </div>
            )}
            {(isSuccess || isError) && inputValue && (
              <div
                className="flex justify-center items-center w-[1.6rem] h-[1.6rem]"
                onClick={handleDeleteClick}
              >
                <InputDelete />
              </div>
            )}
            {isError && (
              <div className="flex justify-center items-center w-[1.6rem] h-[1.6rem]">
                <InputError />
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`text-[1.1rem] px-[1.2rem] flex h-[1.2rem] items-center ${getTextClass()}`}
      >
        <p>도움말 메시지</p>
        <p className="ml-auto">
          {inputValue.length}/{maxTextLen}
        </p>
      </div>
    </div>
  );
}
