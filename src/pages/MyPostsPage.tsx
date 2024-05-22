import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import HeaderButton from "../components/Header/HeaderButton";
import PostListCard from "../components/Home/PostListCard";
import LeftArrowIcon from "./../assets/icons/LeftArrowIcon.svg?react";
import AlertCircleError from "./../assets/icons/AlertCirlcleError.svg?react";
import EmptyList from "../components/common/EmptyList";
import { PostList } from "../__mocks__/mockData";

export default function MyPostsPage() {
  // 현재 로그인 한 사용자의 id 임시 지정
  const currentUserId = 3;

  // 현재 로그인 한 사용자의 id를 비교해서 필터링
  const filteredPostList = PostList.filter(
    (post) => post.userId === currentUserId,
  );
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
      <main className="main-header">
        {filteredPostList.length === 0 && (
          <EmptyList
            icon={<AlertCircleError />}
            mainText="작성하신 게시글이 없어요"
            subText={<p>첫 게시글을 작성해주세요</p>}
          />
        )}
        {filteredPostList.map((post) => (
          <PostListCard key={post.postId} post={post} />
        ))}
      </main>
    </>
  );
}
