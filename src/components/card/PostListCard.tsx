import { Link } from "react-router-dom";
import MiniChip from "../common/MiniChip";
import { useFormattedDate } from "../../hooks/useFormattedDate";
import { userPostType } from "../../types/userProfile";
import { ottTags } from "../../types/ottTags";
import { postType } from "../../types/postList";

export default function PostListCard({
  post,
}: {
  post: userPostType | postType;
}) {
  const formattedDate = useFormattedDate(new Date(post.createdAt));

  /**
   * 게시글 목록 카드인지, 내가 쓴 게시글 목록 카드인지 구분
   * @param post
   * @returns
   */
  const isUserPostType = (
    post: userPostType | postType,
  ): post is userPostType => {
    return (post as userPostType).postTitle !== undefined;
  };
  // ottTag를 한글로 변환
  const ottTagKorean = ottTags[post.ottTag];

  return (
    <Link
      to={`/post-detail/${post.postId}`}
      className="block p-8 border-b bg-gray14 border-gray13"
    >
      <MiniChip ott={ottTagKorean} />
      <div className="flex mt-[0.8rem]">
        <div
          className={`flex-1 overflow-hidden ${post.thumbNail ? "pr-[1.2rem]" : ""}`}
        >
          <p className="font-semibold text-white text-subtitle line-clamp-2">
            {isUserPostType(post) ? post.postTitle : post.title}
          </p>
          <p className="font-medium truncate text-body text-gray9 mt-[0.4rem] mb-[0.8rem]">
            {isUserPostType(post) ? post.postContent : post.content}
          </p>
          <div className="font-regular text-caption01 text-gray9">
            <span>
              {isUserPostType(post) ? post.authorNickName : post.nickName}
            </span>{" "}
            · <span>{formattedDate}</span> ·{" "}
            <span>댓글 {post.commentCount}개</span>
          </div>
        </div>
        {post.thumbNail && (
          <img
            src={`${import.meta.env.VITE_POST_BASE_URL}${post.thumbNail}`}
            alt="thumbnail"
            className="w-[7.4rem] h-[7.4rem] rounded-[0.4rem] object-cover object-center"
          />
        )}
      </div>
    </Link>
  );
}
