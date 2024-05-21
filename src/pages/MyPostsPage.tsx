import Header from "../components/Header/Header";
import HeaderButton from "../components/Header/HeaderButton";
import PostListCard from "../components/Home/PostListCard";
import LeftArrowIcon from "./../assets/icons/LeftArrowIcon.svg?react";
import AlertCircleError from "./../assets/icons/AlertCirlcleError.svg?react";
import { useNavigate } from "react-router-dom";
import { PostList } from "./HomePage";

export default function MyPostsPage() {
  // 현재 로그인 한 사용자의 id를 비교해서 필터링
  const filteredPostList = PostList.filter((post) => post.writer === "공상가");
  const nav = useNavigate();

  return (
    <>
      <Header
        leftChild={
          <HeaderButton onClick={() => nav(-1)}>
            <LeftArrowIcon />
          </HeaderButton>
        }
        title="작성한 글"
      />
      <main className="h-screen-minus-46]">
        {filteredPostList.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-gray10">
            <AlertCircleError />
            <p className="font-medium text-[1.6rem] leading-[2.4rem] mt-4 mb-6">
              작성하신 게시글이 없어요.
            </p>
            <p className="text-caption01 font-regular text-gray8">
              첫 게시글을 작성해주세요.
            </p>
          </div>
        )}
        {filteredPostList.map((post) => (
          <PostListCard key={post.id} post={post} />
        ))}
      </main>
    </>
  );
}
