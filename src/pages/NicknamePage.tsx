import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import HeaderButton from "../components/Header/HeaderButton";
import CloseIcon from "./../assets/icons/CloseIcon.svg?react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

export default function NicknamePage() {
  const nav = useNavigate();
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
      <main className="flex flex-col items-center h-screen main-header">
        <form className="flex flex-col justify-between h-full pb-[4.8rem]">
          <div>
            <h3 className="mt-[9.6rem] mb-[4.8rem] font-semibold text-white text-title">
              닉네임을 적어주세요
            </h3>
            <Input
              label="닉네임"
              placeholder="닉네임을 적어주세요."
              maxLen={8}
              onChange={() => {}}
            />
          </div>
          <Button type="submit" variant="yellow">
            등록하기
          </Button>
        </form>
      </main>
    </>
  );
}
