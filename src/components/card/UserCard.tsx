import MoreIcon from "../../assets/icons/MoreIcon.svg?react";
import Lock from "../../assets/icons/Lock.svg?react";
import MediumProfile from "../../assets/icons/ProfileComment.svg";
import SmallProfile from "../../assets/icons/ProfileMoreComment.svg";
import { useFormattedDate } from "../../hooks/useFormattedDate";

interface userCardProps {
  data: any;
  onClick: () => void;
}

export default function UserCard(props: userCardProps) {
  const { data, onClick } = props;
  const baseURL = import.meta.env.VITE_USER_BASE_URL;
  const proImg = data.userImage
    ? `${baseURL}${data.userImage}`
    : !data.isParentComment
      ? SmallProfile
      : MediumProfile;

  const formattedDate = useFormattedDate(new Date(data.createdAt));

  return (
    <section className="flex w-full flex-col gap-[1rem]">
      {!data.isVisible && !data.postId ? (
        <>
          <p className="text-[1.2rem] font-normal leading-[1.6rem] text-gray9">
            {formattedDate}
          </p>
        </>
      ) : (
        <div className="flex items-center gap-[1rem]">
          <section
            className={`box-border rounded-full ${!data.isParentComment ? "w-[3.2rem] h-[3.2rem]" : "w-[3.8rem] h-[3.8rem]"} flex-shrink-0`}
          >
            <img
              className="box-border object-cover w-full h-full rounded-full"
              src={proImg}
              alt="프로필 이미지"
            />
          </section>
          <section className="flex flex-col h-full gap-[0.5rem] w-full justify-center">
            <section className="flex w-full">
              <div className="mr-auto border-red">
                <p className="font-semibold leading-[2.4rem] text-white h-[2.2rem] flex items-center text-[1.4rem]">
                  {data.postId ? data.writerNickName : data.commenterNickName}
                </p>
                <p className="font-normal leading-[1.6rem] text-caption01 text-gray9 h-[1.6rem] flex items-center">
                  {formattedDate}
                </p>
              </div>
              <div
                className="w-[2.4rem] h-[2.4rem] flex justify-end cursor-pointer"
                onClick={onClick}
              >
                <MoreIcon />
              </div>
            </section>
          </section>
        </div>
      )}
      {data.commentId && (
        <div className="flex gap-[1rem] text-gray3">
          <section
            className={`w-full gap-[0.5rem] flex ${data.isParentComment && "pl-[4.8rem]"} font-normal leading-[2.2rem] text-[1.4rem] break-words`}
          >
            {data.isSecret ? (
              data.isVisible ? (
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
