import Header from "../components/Header/Header";
import CloseBtn from "../assets/icons/CloseIcon.svg?react";
import ProfileImageUploader from "../components/common/ProfileImageUploader";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { useState } from "react";
import { validationResultType } from "../types/validationResultType";
import { useNavigate } from "react-router-dom";

export default function ProfileEditPage() {
  const [nickname, setNickname] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (isValid) {
      // TODO api 호출

      // 마이페이지로 돌아갑니다
      navigate(-1);
    }
  };

  const handleInputChange = (value: string, res: validationResultType) => {
    setNickname(value);
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
      <Header leftChild={<CloseBtn />} title="프로필 변경" />
      <div className="flex flex-col justify-between h-screen-minus-12.8">
        <div>
          <div className="mt-[3.8rem] flex justify-center">
            <ProfileImageUploader imageSrc={undefined} />
          </div>
          <div className="mt-[4.8rem] flex justify-center">
            <Input
              disabled={false}
              onChange={handleInputChange}
              label="닉네임"
              placeholder="기존 닉네임"
              maxLen={50}
            />
          </div>
        </div>
        <div className="flex justify-center mb-[3rem]">
          <Button
            type="button"
            disabled={isValid ? false : true}
            variant="yellow"
            size="base"
            onClick={handleSubmit}
          >
            등록하기
          </Button>
        </div>
      </div>
    </>
  );
}
