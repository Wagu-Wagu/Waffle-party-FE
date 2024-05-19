import { Link } from "react-router-dom";
import KakaoIcon from "../../assets/icons/KakaoIcon.svg?react";

export default function HeaderLoginButton() {
  return (
    <Link
      to="/login"
      className="rounded-[0.3rem] bg-primary flex h-12 items-center gap-[0.3rem] px-[0.8rem]"
    >
      <div className="flex items-center justify-center w-6 h-6">
        <KakaoIcon />
      </div>
      <span className="font-semibold text-black text-caption02">로그인</span>
    </Link>
  );
}
