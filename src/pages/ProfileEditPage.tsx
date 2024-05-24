import Header from "../components/Header/Header";
import CloseBtn from "../assets/icons/CloseIcon.svg?react";
import ProfileImageUploader from "../components/common/ProfileImageUploader";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { useState } from "react";
import { validationResultType } from "../types/validationResultType";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userProfileState } from "../recoil/userProfile";

export default function ProfileEditPage() {
  const [isValid, setIsValid] = useState<boolean>(false);
  const userProfile = useRecoilValue(userProfileState);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (isValid) {
      // TODO api 호출
      console.log(userProfile);

      // 마이페이지로 돌아갑니다
      navigate(-1);
    }
  };

  const handleInputChange = (res: validationResultType) => {
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
      <div className="flex flex-col justify-between h-screen-minus-46">
        <div>
          <div className="mt-[4.8rem] pt-[4.8rem]  flex justify-center">
            <ProfileImageUploader imageSrc={userProfile.profileImage} />
          </div>
          <div className="mt-[4.8rem pt-[4.8rem] flex justify-center">
            <Input
              disabled={false}
              onChange={handleInputChange}
              label="닉네임"
              placeholder={userProfile.nickname}
              maxLen={10}
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
