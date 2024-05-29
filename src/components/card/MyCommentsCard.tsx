import MiniChip from "../common/MiniChip";
import "../../index.css";
import { Link } from "react-router-dom";
import { useFormattedDate } from "../../hooks/useFormattedDate";
import { ottTags } from "../../types/ottTags";
export default function MyCommentsCard(props: { comment: any }) {
  const { comment } = props;
  const formattedDate = useFormattedDate(new Date(comment.createdAt));
  // ottTag를 한글로 변환
  const ottTagKorean = ottTags[comment.ottTag];
  return (
    <>
      <Link
        className=" h-full border-b border-gray13 p-[2rem] flex flex-col gap-[0.8rem]"
        to={`/post-detail/${comment.postId}`}
      >
        <p className="comment-overflow text-[1.6rem] font-semibold leading-[2.4rem] text-white">
          {comment.commentContent}
        </p>

        <div className="flex items-start gap-[0.8rem]">
          <div className="flex whitespace-nowrap">
            <MiniChip ott={ottTagKorean} />
          </div>
          <p className="overflow-hidden whitespace-nowrap text-ellipsis text-[1.4rem] font-medium leading-[2.2rem] text-gray9">
            {comment.postTitle}
          </p>
        </div>
        <span className="text-[1.2rem] font-normal leading-[1.6rem] text-gray9">
          {formattedDate}
        </span>
      </Link>
    </>
  );
}
