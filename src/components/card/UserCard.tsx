import profile from "../../assets/icons/profile.svg";
import { useState } from "react";
import MoreIcon from "../../assets/icons/MoreIcon.svg?react";
import PencilIcon from "../../assets/icons/PencilIcon.svg?react";

// props에는 받아온 데이터와, 마이페이지인지 여부가 들어가야 합니다.
export default function UserCard(props: any) {
  const { data, isMyPage } = props;
  const [proImg, setProImg] = useState(data.profilePicture ?? profile);

  return (
    <section
      className={`flex flex-col gap-[0.5rem] w-[32rem] ${data.content && "border-b border-gray13 pb-[1.2rem]"}`}
    >
      <div className="flex gap-[1rem]">
        <section className="box-border h-[3.8rem]">
          <img
            className="box-border w-[3.8rem] h-[3.8rem] aspect-square"
            src={proImg}
            alt="프로필 이미지"
          />
        </section>
        <section className="flex flex-col gap-[0.5rem] w-full">
          <section className="flex w-full">
            <div className="mr-auto border-red">
              <p className="font-semibold leading-5 text-white text-body h-[2.2rem]">
                {data.nickname}
              </p>
              <p className="font-normal leading-4 text-caption01 text-gray9 h-[1.6rem]">
                {data.kakaoId ? data.kakaoId : data.timestamp}
              </p>
            </div>
            <div
              className={`ml-aut w-[2.4rem] h-[2.4rem] flex justify-end ${isMyPage && "item-center"}`}
            >
              {isMyPage ? <PencilIcon /> : <MoreIcon />}
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
