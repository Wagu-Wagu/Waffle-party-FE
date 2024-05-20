import profile from "../../assets/icons/profile.svg";
import { useState } from "react";
import MoreIcon from "../../assets/icons/MoreIcon.svg?react";
import PencilUnderLine from "../../assets/icons/PencilUnderLine.svg?react";

// props에는 받아온 데이터와, 마이페이지인지 여부가 들어가야 합니다.
export default function UserCard(props: any) {
  const { data, isMyPage, onClick } = props;
  const [proImg, setProImg] = useState(data.profilePicture ?? profile);
  console.log(proImg);

  return (
    <section
      className={`flex w-full flex-col gap-[0.5rem] ${data.content && "border-b border-gray13 pb-[1.2rem]"} ${isMyPage && "py-[1.3rem] px-[2rem]"}`}
    >
      <div
        className={`flex items-center ${isMyPage ? "gap-[1.5rem]" : "gap-[1rem]"}`}
      >
        <section
          className={`box-border ${isMyPage ? "w-[6rem] h-[6rem]" : "w-[3.8rem] h-[3.8rem] "}`}
        >
          <img
            className="box-border w-full h-full aspect-square"
            src={proImg}
            alt="프로필 이미지"
          />
        </section>
        <section className="flex flex-col h-full gap-[0.5rem] w-full">
          <section className="flex w-full">
            <div
              className={`mr-auto border-red ${isMyPage && "flex flex-col gap-[0.6rem]"}`}
            >
              <p
                className={`font-semibold leading-[2.4rem] text-white h-[2.2rem] flex items-center ${isMyPage ? "text-[1.6rem]" : "text-[1.4rem]"}`}
              >
                {data.nickname}
              </p>
              <p className="font-normal leading-[1.6rem] text-caption01 text-gray9 h-[1.6rem] flex items-center">
                {data.kakaoId ? data.kakaoId : data.timestamp}
              </p>
            </div>
            <div
              className={`ml-aut w-[2.4rem] h-[2.4rem] flex justify-end  ${isMyPage && "self-center"} cursor-pointer`}
              onClick={onClick}
            >
              {isMyPage ? <PencilUnderLine /> : <MoreIcon />}
            </div>
          </section>
          {data.content && (
            <>
              <section className="font-normal leading-5 text-[1.4rem] text-white">
                {data.content}
              </section>
            </>
          )}
        </section>
      </div>
    </section>
  );
}
