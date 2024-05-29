import React, { useState } from "react";
import { validationResultType } from "../types/validationResultType";
import Input from "./common/Input";
import Button from "./common/Button";

interface NickNameFormProps {
  onSubmit: (nickname: string) => void;
}

export default function NickNameForm({ onSubmit }: NickNameFormProps) {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>("");

  /*   const nav = useNavigate();
  const userProfile = useRecoilValue(userProfileState); */

  /*   const handleSubmit = () => {
    if (isValid) {
      // TODO api 호출
      console.log(userProfile);

      // 마이페이지로 돌아갑니다
      nav("/");
    }
  }; */

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onSubmit(nickname);
    }
  };

  const handleNickNameChange = (res: validationResultType, value: string) => {
    if (res.success) {
      // 유효성 검사 통과 시
      setIsValid(true);
      setNickname(value);
    } else {
      // 유효성 검사 실패 시
      setIsValid(false);
    }
  };
  return (
    <main className="flex flex-col items-center h-screen main-header">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between h-full pb-[4.8rem]"
      >
        <div>
          <h3 className="mt-[9.6rem] mb-[2rem] font-semibold text-white text-title">
            닉네임을 적어주세요
          </h3>
          <Input
            label="닉네임"
            placeholder="닉네임을 적어주세요."
            maxLen={8}
            /* onChange={(res) => {
              handleNickNameChange(res);
            }} */
            onChange={handleNickNameChange}
          />
        </div>
        <Button
          type="submit"
          disabled={isValid ? false : true}
          variant="yellow"
        >
          등록하기
        </Button>
      </form>
    </main>
  );
}
