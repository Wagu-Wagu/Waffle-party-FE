import { Link } from "react-router-dom";
import MiniChip from "../common/MiniChip";

interface PostType {
  id: number;
  ott: string;
  title: string;
  content: string;
  thumbnail: string;
  writer: string;
  date: string;
  comments: number;
}

export default function PostListCard({
  id,
  ott,
  title,
  content,
  thumbnail,
  writer,
  date,
  comments,
}: PostType) {
  return (
    <Link
      to={`/post-detail/${id}`}
      className="block p-8 border-b bg-gray14 border-gray13"
    >
      <MiniChip ott={ott} />
      <div className="flex mt-[0.8rem]">
        <div
          className={`flex-1 overflow-hidden ${thumbnail ? "pr-[1.2rem]" : ""}`}
        >
          <p className="font-semibold text-white text-subtitle line-clamp-2">
            {title}
          </p>
          <p className="font-medium truncate text-body text-gray9 mt-[0.4rem] mb-[0.8rem]">
            {content}
          </p>
          <div className="font-regular text-caption01 text-gray9">
            <span>{writer}</span> · <span>{date}</span> ·{" "}
            <span>댓글 {comments}개</span>
          </div>
        </div>
        {thumbnail && (
          <img
            src={thumbnail}
            alt="thumbnail"
            className="w-[7.4rem] h-[7.4rem] rounded-[0.4rem] object-cover object-center"
          />
        )}
      </div>
    </Link>
  );
}
