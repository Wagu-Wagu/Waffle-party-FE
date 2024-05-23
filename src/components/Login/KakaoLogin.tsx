import KakaoTalkIcon from "./../../assets/icons/KakaoTalkIcon.svg?react";

export default function KakaoLogin() {
  const KEY = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY;
  const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL;
  const url = `https://kauth.kakao.com/oauth/authorize?client_id=${KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;

  return (
    <button
      onClick={() => (window.location.href = url)}
      className="mt-[2.5rem] mb-[7rem] flex items-center gap-4 bg-additional1 py-[1.45rem] px-[9.5rem] rounded-2xl"
    >
      <KakaoTalkIcon />
      <span className="font-bold text-body text-additional2">
        카카오로 시작하기
      </span>
    </button>
  );
}
