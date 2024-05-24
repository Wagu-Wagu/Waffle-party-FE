import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userProfileState } from "../recoil/userProfile";
import { validationResultType } from "../types/validationResultType";
import Input from "./common/Input";
import Button from "./common/Button";

export default function NickNameForm() {
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
    <main className="flex flex-col items-center h-screen-minus-46">
      <form className="flex flex-col justify-between h-full mb-[6.9rem]">
        <div>
          <h3 className="mb-8 mt-[4.6rem] pt-[9.6rem] font-semibold text-white text-title">
            닉네임을 적어주세요
          </h3>
          <Input
            label="닉네임"
            placeholder="닉네임을 적어주세요."
            maxLen={8}
            onChange={(res) => {
              handleNickNameChange(res);
            }}
          />
        </div>
        <Button
          type="submit"
          disabled={isValid ? false : true}
          variant="yellow"
          onClick={handleSubmit}
        >
          등록하기
        </Button>
      </form>
    </main>
  );
}
