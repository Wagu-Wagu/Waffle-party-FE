import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import HeaderButton from "../components/Header/HeaderButton";
import PostListCard from "../components/card/PostListCard";
import LeftArrowIcon from "./../assets/icons/LeftArrowIcon.svg?react";
import AlertCircleError from "./../assets/icons/AlertCirlcleError.svg?react";
import EmptyList from "../components/common/EmptyList";
import { useRecoilState } from "recoil";
import useGetMyPost from "../hooks/useGetMyPost";
import { userPostState } from "../recoil/userProfile";
import { useEffect } from "react";
import { userPostType } from "../types/userProfile";

export default function MyPostsPage() {
  const { userId } = useParams();
  const [userPost, setUserPost] = useRecoilState(userPostState);

  // 내가 작성한 글 get
  const { userPostData } = useGetMyPost(userId);

  useEffect(() => {
    setUserPost(userPostData);
  }, [userPostData]);

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
        {userPost?.length === 0 ? (
          <div className="h-screen-minus-46">
            <EmptyList
              icon={<AlertCircleError />}
              mainText="작성하신 게시글이 없어요"
              subText={<p>첫 게시글을 작성해주세요</p>}
            />
          </div>
        ) : (
          userPost?.map((post: userPostType) => (
            <PostListCard key={post.postId} post={post} />
          ))
        )}
      </main>
    </>
  );
}
