import { Link } from "react-router-dom";
import MiniChip from "../common/MiniChip";
import { Post, UserList } from "../../mock/mockData";
import { useFormattedDate } from "../../hooks/useFormattedDate";

const getNickName = (userId: number): string => {
  const user = UserList.find((user) => user.userId === userId);
  return user ? user.nickName : "Unkown";
};

export default function PostListCard({ post }: { post: Post }) {
  const {
    postId,
    userId,
    ottTag,
    title,
    content,
    thumbNail,
    createdAt,
    commentCount,
  } = post;
  const nickName = getNickName(userId);
  const formattedDate = useFormattedDate(new Date(createdAt));

  return (
    <Link
      to={`/post-detail/${postId}`}
      className="block p-8 border-b bg-gray14 border-gray13"
    >
      <MiniChip ott={ottTag} />
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
            src={thumbNail}
            alt="thumbnail"
            className="w-[7.4rem] h-[7.4rem] rounded-[0.4rem] object-cover object-center"
          />
        )}
      </div>
    </Link>
  );
}
