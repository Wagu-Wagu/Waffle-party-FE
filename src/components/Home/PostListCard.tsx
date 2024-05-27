import { Link } from "react-router-dom";
import MiniChip from "../common/MiniChip";
import { useFormattedDate } from "../../hooks/useFormattedDate";
import { Post } from "../../types/ottPost";

// ottTags 객체
const ottTags: { [key: string]: string } = {
  NETFLIX: "넷플릭스",
  WATCHA: "왓챠",
  DISNEY: "디즈니+",
  WAVE: "웨이브",
  TIVING: "티빙",
  COUPANGPLAY: "쿠팡플레이",
  LAFTEL: "라프텔",
  NAVERSERIES: "네이버시리즈",
  ETC: "기타",
};

export default function PostListCard({ post }: { post: Post }) {
  const {
    postId,
    // userId,
    ottTag,
    title,
    content,
    thumbNail,
    createdAt,
    commentCount,
    nickName,
  } = post;
  const formattedDate = useFormattedDate(new Date(createdAt));

  // ottTag를 한글로 변환
  const ottTagKorean = ottTags[ottTag] || ottTag;

  return (
    <Link
      to={`/post-detail/${postId}`}
      className="block p-8 border-b bg-gray14 border-gray13"
    >
      <MiniChip ott={ottTagKorean} />
      <div className="flex mt-[0.8rem]">
        <div
          className={`flex-1 overflow-hidden ${thumbNail ? "pr-[1.2rem]" : ""}`}
        >
          <p className="font-semibold text-white text-subtitle line-clamp-2">
            {title}
          </p>
          <p className="font-medium truncate text-body text-gray9 mt-[0.4rem] mb-[0.8rem]">
            {content}
          </p>
          <div className="font-regular text-caption01 text-gray9">
            <span>{nickName}</span> · <span>{formattedDate}</span> ·{" "}
            <span>댓글 {commentCount}개</span>
          </div>
        </div>
        {thumbNail && (
          <img
            src={`${import.meta.env.VITE_POST_BASE_URL}${thumbNail}`}
            alt="thumbnail"
            className="w-[7.4rem] h-[7.4rem] rounded-[0.4rem] object-cover object-center"
          />
        )}
      </div>
    </Link>
  );
}
