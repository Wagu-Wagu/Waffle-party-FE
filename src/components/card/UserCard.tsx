import profile from "../../assets/icons/profile.svg";
import MoreIcon from "../../assets/icons/MoreIcon.svg?react";
import PencilUnderLine from "../../assets/icons/PencilUnderLine.svg?react";
import Lock from "../../assets/icons/UnLock.svg?react";

// props에는 받아온 데이터와, 마이페이지인지 여부가 들어가야 합니다.
export default function UserCard(props: any) {
  const { data, isMyPage, onClick, showMoreIcon } = props;
  const proImg = data.profilePicture ?? profile;

  return (
    <section
      className={`flex w-full flex-col gap-[1rem] ${data.content && " pb-[1.2rem]"} ${isMyPage && "py-[1.3rem] px-[2rem]"}`}
    >
      {data.lock && !data.isUser ? (
        <>
          <p className="text-[1.2rem] font-normal leading-[1.6rem] text-gray9">
            {data.timestamp}
          </p>
        </>
      ) : (
        <div
          className={`flex items-center ${isMyPage ? "gap-[1.5rem]" : "gap-[1rem]"}`}
        >
          <section
            className={`bg-white box-border rounded-full ${isMyPage ? "w-[6rem] min-w-[6rem] h-[6rem]" : "w-[3.8rem] min-w-[3.8rem] h-[3.8rem]"}`}
          >
            <img
              className={`box-border rounded-full w-full h-full  object-cover ${isMyPage ? "w-[6rem] h-[6rem]" : "w-[3.8rem] h-[3.8rem]"}`}
              src={proImg}
              alt="프로필 이미지"
            />
          </section>
          <section className="flex flex-col h-full gap-[0.5rem] w-full justify-center">
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
                className={`w-[2.4rem] h-[2.4rem] flex justify-end  ${isMyPage && "self-center"} cursor-pointer`}
                onClick={onClick}
              >
                {/* 내 게시물이 아니면 더보기 아이콘 안뜸 */}
                {isMyPage ? <PencilUnderLine /> : showMoreIcon && <MoreIcon />}
              </div>
            </section>
          </section>
        </div>
      )}
      {data.content && (
        <div className="flex gap-[1rem] text-gray3">
          <section
            className={`w-full gap-[1rem] flex ${data.isUser || (!data.lock && "pl-[4.8rem]")}  font-normal leading-[2.2rem] text-[1.4rem] break-words`}
          >
            {data.lock ? (
              data.isUser ? (
                <>
                  <div className="w-[2rem] h-[2rem]">
                    <Lock />
                  </div>
                  <p className="text-gray3">{data.content}</p>
                </>
              ) : (
                <>
                  <div className="w-[2rem] h-[2rem]">
                    <Lock />
                  </div>
                  <p className="flex items-center text-gray10">
                    비밀댓글입니다.
                  </p>
                </>
              )
            ) : (
              <p className="text-gray3">{data.content}</p>
            )}
          </section>
        </div>
      )}
    </section>
  );
}
