import KakaoIcon from "./../../assets/icons/KakaoIcon.svg";

export default function KakaoLogin() {
  const KEY = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY;
  const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL;
  const url = `https://kauth.kakao.com/oauth/authorize?client_id=${KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;

  return (
    <button
      onClick={() => (window.location.href = url)}
      className="w-full mt-[2.5rem] mb-[4.8rem] flex items-center justify-center gap-[0.8rem] bg-[#fee500] py-[1.45rem] px-[9.5rem] rounded-[0.6rem]"
    >
      <img src={KakaoIcon} alt="" className="w-[2rem] h-[2rem]" />
      <span className="font-bold text-button">카카오 로그인</span>
    </button>
  );
}
