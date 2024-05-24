import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import HeaderButton from "../components/Header/HeaderButton";
import CloseIcon from "./../assets/icons/CloseIcon.svg?react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { validationResultType } from "../types/validationResultType";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userProfileState } from "../recoil/userProfile";

export default function NicknamePage() {
  const nav = useNavigate();
  const [isValid, setIsValid] = useState<boolean>(false);
  const userProfile = useRecoilValue(userProfileState);
  const handleSubmit = () => {
    if (isValid) {
      // TODO api 호출
      console.log(userProfile);

      // 마이페이지로 돌아갑니다
      nav("/");
    }
  };
  const handleNickNameChange = (res: validationResultType) => {
    if (res.success) {
      // 유효성 검사 통과 시
      setIsValid(true);
    } else {
      // 유효성 검사 실패 시
      setIsValid(false);
    }
  };
  return (
    <>
      <Header
        leftChild={
          <HeaderButton onClick={() => nav("/", { replace: true })}>
            <CloseIcon />
          </HeaderButton>
        }
        title={"닉네임 등록"}
      />
      <main className="flex flex-col items-center h-screen-minus-46">
        <form className="flex flex-col justify-between h-full mb-[6.9rem]">
          <div>
            <h3 className="mb-8 mt-[9.6rem] font-semibold text-white text-title">
              닉네임을 적어주세요
            </h3>
            <Input
              label="닉네임"
              placeholder="닉네임을 적어주세요."
              maxLen={8}
              onChange={(value, res) => {
                handleNickNameChange(value, res);
              }}
            />
          </div>
          <Button type="submit" variant="yellow" onClick={handleSubmit}>
            등록하기
          </Button>
        </form>
      </main>
    </>
  );
}
