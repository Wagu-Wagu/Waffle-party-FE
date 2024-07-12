import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import HeaderButton from "../components/Header/HeaderButton";
import CloseIcon from "./../assets/icons/CloseIcon.svg?react";
import WafflePartyLogo from "./../assets/icons/WafflePartyLogo.svg?react";
import KakaoLogin from "../components/Login/KakaoLogin";

export default function LoginPage() {
  const nav = useNavigate();
  return (
    <div className="bg-gray15">
      <Header
        leftChild={
          <HeaderButton onClick={() => nav("/", { replace: true })}>
            <CloseIcon />
          </HeaderButton>
        }
        title={"로그인/회원가입"}
      />

      <main className="flex flex-col items-center justify-between h-screen main-header">
        <div className="mt-[9.8rem]">
          <p className="font-medium mb-[2rem] text-center text-gray5 text-subtitle">
            OTT 같이 볼 사람이 필요할 땐,
          </p>
          <WafflePartyLogo />
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
    </div>
  );
}
