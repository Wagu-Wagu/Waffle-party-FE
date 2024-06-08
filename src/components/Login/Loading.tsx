import { ClipLoader } from "react-spinners";
export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen gap-[0.8rem] flex-col">
      <ClipLoader color="#FFC71E" size="4.8rem" />
      <p className="text-white text-[1.6rem] font-medium font-['Pretendard'] leading-[2.4rem]">
        로그인 중...
      </p>
    </div>
  );
}
