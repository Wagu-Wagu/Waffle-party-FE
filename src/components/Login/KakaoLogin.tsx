import KakaoTalkIcon from "./../../assets/icons/KakaoTalkIcon.svg?react";

const kakao = (window as any).Kakao;

export default function KakaoLogin() {
  return (
    <button
      onClick={() =>
        kakao.Auth.authorize({
          redirectUri: "http://localhost:5173/login/kakao/callback",
        })
      }
      className="mt-[2.5rem] mb-[7rem] flex items-center gap-4 bg-additional1 py-[1.45rem] px-[9.5rem] rounded-2xl"
    >
      <KakaoTalkIcon />
      <span className="font-bold text-body text-additional2">
        카카오로 시작하기
      </span>
    </button>
  );
}
