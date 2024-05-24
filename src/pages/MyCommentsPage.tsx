import Header from "../components/Header/Header";
import MyCommentsCard from "../components/card/MyCommentsCard";
import LeftArrow from "../assets/icons/LeftArrowIcon.svg?react";
import { myComment } from "../mock/myComment";
import HeaderButton from "../components/Header/HeaderButton";
import { useNavigate } from "react-router-dom";
import EmptyList from "../components/common/EmptyList";
import ChatIcon from "../assets/icons/Chat.svg?react";
export default function MyCommentsPage() {
  const nav = useNavigate();
  const handleClickComment = (commentEl: any) => {
    nav(`/post-detail/${commentEl.postId}`);
  };
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
          {myComment.length > 0 ? (
            myComment.map((item, index) => (
              <div className="cursor-pointer">
                <MyCommentsCard
                  data={item}
                  key={index}
                  onClick={(commentEl: any) => handleClickComment(commentEl)}
                />
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
