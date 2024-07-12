import { ClipLoader } from "react-spinners";

interface loadingProps {
  text?: string;
}
export default function Loading(props: loadingProps) {
  const { text } = props;
  return (
    <div className="flex items-center justify-center h-screen gap-[0.8rem] flex-col">
      <ClipLoader color="#FFC71E" size="4.8rem" />
      <p className="text-white text-[1.6rem] font-medium font-['Pretendard'] leading-[2.4rem]">
        {text}
      </p>
    </div>
  );
}
