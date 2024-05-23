import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import HeaderButton from "../components/Header/HeaderButton";
import CloseIcon from "./../assets/icons/CloseIcon.svg?react";
import LogoYellow from "./../assets/icons/LogoYellow.svg?react";
import KakaoLogin from "../components/Login/KakaoLogin";

export default function LoginPage() {
  const nav = useNavigate();
  return (
    <>
      <Header
        leftChild={
          <HeaderButton onClick={() => nav("/", { replace: true })}>
            <CloseIcon />
          </HeaderButton>
        }
        title={"로그인/회원가입"}
      />

      <main className="flex flex-col items-center justify-between h-screen-minus-46">
        <div className="mt-[12.2rem]">
          <LogoYellow />
        </div>
        <div>
          <div className="flex items-center gap-4">
            <div className="bg-gray7 w-[11.1rem] h-[0.1rem]" />
            <p className="text-gray7">로그인/회원가입</p>
            <div className="bg-gray7 w-[11.1rem] h-[0.1rem]" />
          </div>
          <KakaoLogin />
        </div>
      </main>
    </>
  );
}
