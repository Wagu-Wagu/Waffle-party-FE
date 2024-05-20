import Header from "../components/Header/Header";
import CloseBtn from "../assets/icons/CloseIcon.svg?react";
import ProfileImageUploader from "../components/common/ProfileImageUploader";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

export default function ProfileEditPage() {
  // interface HeaderProps {
  //   leftChild?: React.ReactNode;
  //   title?: string;
  //   rightChild?: React.ReactNode;
  //   noBorder?: boolean;
  // }

  const handleClick = () => {};
  return (
    <>
      <Header leftChild={<CloseBtn />} title="프로필 변경" />
      <div className="h-screen-minus-46">
        <div className="mt-[3.8rem] bg-white flex justify-center">
          <ProfileImageUploader imageSrc={undefined} />
        </div>
        <div className="mt-[4.8rem] flex justify-center">
          <Input
            disabled={false}
            onClick={handleClick}
            label="닉네임"
            placeholder="기존 닉네임"
          />
        </div>
        <div className="mt-[31.4rem] flex justify-center">
          <Button type="button" disabled={false} variant="gray" size="base">
            등록하기
          </Button>
        </div>
      </div>
    </>
  );
}
