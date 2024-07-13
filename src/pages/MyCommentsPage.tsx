import Header from "../components/Header/Header";
import MyCommentsCard from "../components/card/MyCommentsCard";
import LeftArrow from "../assets/icons/LeftArrowIcon.svg?react";
import HeaderButton from "../components/Header/HeaderButton";
import { useNavigate, useParams } from "react-router-dom";
import EmptyList from "../components/common/EmptyList";
import ChatIcon from "../assets/icons/Chat.svg?react";
import useGetMyComment from "../hooks/useGetMyComment";
import { useRecoilState } from "recoil";
import { userCommentState } from "../recoil/userProfile";
import { useEffect } from "react";
import { userCommentType } from "../types/userProfile";
import Loading from "../components/Login/Loading";
export default function MyCommentsPage() {
  const { userId } = useParams();
  const [userComment, setUserComment] = useRecoilState(userCommentState);
  const nav = useNavigate();
  const { userCommentData, isLoading } = useGetMyComment(userId);

  useEffect(() => {
    if (userCommentData) {
      setUserComment(userCommentData);
    }
  }, [userCommentData]);

  if (isLoading) return <Loading />;

  return (
    <>
      <Header
        leftChild={
          <HeaderButton onClick={() => nav("/", { replace: true })}>
            <LeftArrow />
          </HeaderButton>
        }
        title="작성한 댓글"
        noBorder={false}
      />
      <main className="main-header">
        <div className="h-screen-minus-46">
          {userCommentData ? (
            userComment?.map((comment: userCommentType, index) => (
              <div className="cursor-pointer" key={index}>
                <MyCommentsCard key={comment.postId} comment={comment} />
              </div>
            ))
          ) : (
            <EmptyList
              icon={<ChatIcon />}
              mainText="아직 댓글이 없어요."
              subText="첫 댓글을 작성해보세요."
            />
          )}
        </div>
      </main>
    </>
  );
}
