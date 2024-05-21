import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import HeaderButton from "../components/Header/HeaderButton";
import PostListCard from "../components/Home/PostListCard";
import LeftArrowIcon from "./../assets/icons/LeftArrowIcon.svg?react";
import AlertCircleError from "./../assets/icons/AlertCirlcleError.svg?react";
import { PostList } from "./HomePage";
import EmptyList from "../components/common/EmptyList";

export default function MyPostsPage() {
  // 현재 로그인 한 사용자의 id를 비교해서 필터링
  const filteredPostList = PostList.filter((post) => post.writer === "");
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
      <main className="h-screen-minus-46">
        {filteredPostList.length === 0 && (
          <EmptyList
            icon={<AlertCircleError />}
            mainText="작성하신 게시글이 없어요"
            subText={<p>첫 게시글을 작성해주세요</p>}
          />
        )}
        {filteredPostList.map((post) => (
          <PostListCard key={post.id} post={post} />
        ))}
      </main>
    </>
  );
}
