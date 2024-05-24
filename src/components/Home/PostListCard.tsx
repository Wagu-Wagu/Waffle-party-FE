import { Link } from "react-router-dom";
import MiniChip from "../common/MiniChip";
import { Post, UserList } from "../../mock/mockData";
import { useFormattedDate } from "../../hooks/useFormattedDate";

/* const getNickName = (userId: number): string => {
  const user = UserList.find((user) => user.userId === userId);
  return user ? user.nickName : "Unkown";
}; */

// ottTags 객체 추가
const ottTags = {
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

// PostVO 타입 정의
interface PostVO {
  ottTag: string;
  title: string;
  content: string;
  photoes: any[];
  nickName: string;
  createdAt: string;
  commentCount: number;
  thumbNail: string | null;
}

export default function PostListCard({ post }: { post: PostVO }) {
  const {
    // postId,
    // userId,
    ottTag,
    title,
    content,
    thumbNail,
    createdAt,
    commentCount,
    nickName,
  } = post;
  // const nickName = getNickName(userId);
  const formattedDate = useFormattedDate(new Date(createdAt));

  // ottTag를 한글로 변환
  const ottTagKorean = ottTags[ottTag] || ottTag;

  return (
    <Link
      // to={`/post-detail/${postId}`}
      to={`/post-detail/${title}`}
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
            // src={`${import.meta.env.VITE_POST_BASE_URL}/${thumbNail}`}
            src={`https://s3.ap-northeast-2.amazonaws.com/waguwagu-bucket/user/image/d132fc75-094b-48e2-97c6-cd00ca3b001f.png`}
            alt="thumbnail"
            className="w-[7.4rem] h-[7.4rem] rounded-[0.4rem] object-cover object-center"
          />
        )}
      </div>
    </Link>
  );
}
