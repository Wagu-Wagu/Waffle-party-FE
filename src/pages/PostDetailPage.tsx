import Header from "../components/Header/Header";
import LeftArrow from "../assets/icons/LeftArrowIcon.svg?react";
import UserCard from "../components/card/UserCard";
import Button from "../components/common/Button";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import UnLock from "../assets/icons/UnLock.svg?react";
import Lock from "../assets/icons/Lock.svg?react";
import ImageSlider from "../components/ImageSlider";
import React from "react";
import formatDate from "../hooks/formatDate";
import ImagePreview from "../components/ImagePreview";
import ActionSheet from "../components/modal/ActionSheet";
import BasicModal from "../components/modal/BasicModal";
import { data } from "../mock/detail";
import { dummyContentType, dummyMoreContentType } from "../types/comment";
import HeaderButton from "../components/Header/HeaderButton";
import { useNavigate, useParams } from "react-router-dom";
import Chat from "../assets/icons/Chat.svg?react";
import EmptyList from "../components/common/EmptyList";
import Chip from "../components/common/Chip";

export default function PostDetailPage() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [uptoSubmit, setUptoSubmit] = useState(false);
  const [showFullImage, setShowFullImage] = useState<boolean>(false);
  const [modalActive, setModalActive] = useState(false);
  const [basicModalActive, setBasicModalActive] = useState(false);
  const modalRef = useRef<HTMLElement>(null);
  const [modalData, setModalData] = useState<{
    parent: dummyContentType | null;
    child: dummyMoreContentType | null;
  }>({ parent: null, child: null });
  // 받아온 데이터중 댓글데이터 넣기
  const [comments, setComments] = useState(data.comments);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEdit, setIsEdit] = useState(false);
  const [isPost, setIsPost] = useState(false);

  const { userId } = useParams();

  const nav = useNavigate();

  useEffect(() => {
    if (inputValue.length === 0) {
      setIsFocused(false);
      setUptoSubmit(false);
    } else {
      setUptoSubmit(true);
    }
  }, [inputValue, setInputValue]);

  // 모달 옵션 클릭 후 포커스 상태(답댓글, 수정)
  useLayoutEffect(() => {
    console.log(inputRef.current);
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  // TODO any type 변경
  const handleModal = (parent: any, child?: any) => {
    setModalActive((prev) => !prev);
    if (parent === "post") {
      setIsPost(true);
    } else {
      setIsPost(false);
      if (child) {
        // 부모요소 있으면 대댓글
        // parent에 상위 댓글 데이터, child에 대댓글 데이터
        setModalData({ parent: parent, child: child });
      } else {
        // 부모요소 없으면 댓글
        // parent는 없고, child에 댓글 데이터
        setModalData({ parent: parent, child: null });
      }
    }
  };

  /**
   * 댓글 입력
   * @param event
   */
  const handleChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setIsFocused(true);
  };

  /**
   * 입력 후 엔터키 눌렀을때
   * @param event
   */
  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>,
    modalData: any,
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddComment(modalData);
    }
  };

  /**
   *
   * @returns 댓글 등록
   */
  const handleAddComment = (modalData: any) => {
    if (inputValue.trim() === "") return;

    const currentDate: Date = new Date();
    const formattedDate: string = formatDate(currentDate);

    // TODO 추후에 바뀔 부분
    const newComment = {
      mycomment: true,
      nickname: "새로운 답변자",
      timestamp: formattedDate,
      content: inputValue,
      profilePicture:
        "https://gam-image-test.s3.ap-northeast-2.amazonaws.com/work/b7d98ae9-c597-48cf-a625-dc6c8bac0001%E1%84%86%E1%85%A2%E1%84%80%E1%85%A5%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3.jpeg",
      morecomment: [],
      lock: isLocked,
      isUser: true,
    };

    if (comments.length === 0) {
      setComments((prev) => [...prev, newComment]);
      setInputValue("");
      setIsLocked(false);
      return;
    }

    // 댓글 수정
    if (isEdit) {
      // 답댓글이면
      if (modalData.child) {
        setComments((prevComments) => {
          return prevComments.map((comment) => {
            if (comment.nickname === modalData.parent?.nickname) {
              return {
                ...comment,
                morecomment: comment.morecomment.map(
                  (moreComment: dummyMoreContentType) => {
                    if (moreComment.nickname === modalData.child?.nickname) {
                      return {
                        ...moreComment,
                        content: inputValue,
                        lock: isLocked,
                      };
                    }
                    return moreComment;
                  },
                ),
              };
            }
            return comment;
          });
        });
      } else {
        setComments((prevComments) => {
          return prevComments.map((comment) => {
            if (comment.nickname === modalData.parent.nickname) {
              // 선택한 댓글의 content만 변경
              return {
                ...comment,
                content: inputValue,
              };
            }
            // 선택하지 않은 댓글은 그대로 반환
            return comment;
          });
        });
      }
      setIsEdit(false);
    } else {
      // 댓글 등록

      if (!modalData.parent) {
        setComments((prevComments) => [...prevComments, newComment]);
      } else {
        // 대댓글 등록

        setComments((prevComments) =>
          prevComments.map((comment) =>
            comment.nickname === modalData.parent.nickname
              ? {
                  ...comment,
                  morecomment: [...(comment.morecomment || []), newComment],
                }
              : comment,
          ),
        );
      }
    }
    setInputValue("");
    setModalData({ parent: null, child: null });
    setIsLocked(false);
  };

  /**
   * 댓글, 대댓글 삭제 또는 취소
   * @param isDeleteAction
   * @param modalData
   */
  const closeConfirm = (isDeleteAction: boolean, modalData?: any) => {
    // 게시물 삭제인 경우
    if (isPost) {
      setIsPost(false);
      setBasicModalActive(false);
      // api 함수 호출
      return;
    }

    // 삭제
    if (isDeleteAction) {
      if (modalData.child) {
        setComments((prevComments) => {
          return prevComments.map((comment) => {
            // 선택한 댓글에 달린 답댓글들만 삭제

            if (comment.nickname === modalData.parent.nickname) {
              // 답댓글들을 필터링하여 삭제된 답댓글을 제외한 새로운 답댓글 배열 생성
              const updatedReplies = comment.morecomment.filter(
                (reply: dummyMoreContentType) =>
                  reply.nickname !== modalData.child.nickname,
              );
              // 기존 댓글의 답댓글을 업데이트하여 새로운 답댓글 배열로 설정
              return {
                ...comment,
                morecomment: updatedReplies,
              };
            }
            // 선택하지 않은 댓글은 그대로 반환
            return comment;
          });
        });
      } else {
        setComments((prevComments) => {
          // 삭제된 댓글을 제외한 새로운 댓글 배열 생성
          const updatedComments = prevComments.filter(
            (comment) => comment.nickname !== modalData.parent.nickname,
          );
          return updatedComments;
        });
      }
      // 예시 API 호출
      // deleteCommentAPI().then(response => { ... });
    }
    setBasicModalActive(false);
  };

  // 게시물 수정
  const onPostEdit = () => {
    setModalActive(false);
    setIsPost(false);
    nav(`/post-edit/${userId}`);
  };
  // 게시물 삭제
  const onPostDelete = () => {
    setModalActive(false);
    setBasicModalActive(true);
  };
  // 답댓글 달기
  const onCommentReply = () => {
    setIsFocused(true);
    setInputValue("");
    setIsLocked(false);
    setModalActive(false);
    setIsEdit(false);
    console.log(isFocused);
  };
  // 댓글 수정
  const onCommentEdit = () => {
    setModalActive(false);
    setIsFocused(true);
    console.log(modalData);
    if (modalData.child) {
      console.log("dd");
      setInputValue(modalData.child?.content as string);
      if (modalData.child?.lock) {
        setIsLocked(true);
      } else {
        setIsLocked(false);
      }
    } else {
      setInputValue(modalData.parent?.content as string);
      if (modalData.parent?.lock) {
        setIsLocked(true);
      } else {
        setIsLocked(false);
      }
    }
    setIsEdit(true);
  };
  // 댓글 삭제
  const onCommentDelete = () => {
    setModalActive(false);
    setBasicModalActive(true);
  };

  // 상대 댓글 신고하기
  const onReport = () => {
    setModalActive(false);
  };

  /**
   *
   * @returns placeholder 글자색
   */
  const setPlaceHolderClass = () => {
    if (isLocked && !isFocused) {
      return "placeholder-yellow5 opacity-40";
    }
    return "placeholder-gray10";
  };

  /**
   *
   * @returns input 글자색
   */
  const setTextClass = () => {
    if (isLocked && isFocused) {
      return "text-yellow2";
    }
    return "text-white";
  };

  return (
    <>
      <Header
        leftChild={
          <HeaderButton onClick={() => nav("/", { replace: true })}>
            <LeftArrow />
          </HeaderButton>
        }
        noBorder={true}
      />
      <main className="w-full h-screen-minus-12.8 bg-neutral-80">
        <section className="w-full h-screen-minus-46 mt-[4.8rem]">
          <section className="px-[2rem] flex-col items-center justify-start w-full gap-[2.4rem] border-b-8 border-neutral-900">
            <div className="py-[1.6rem]">
              <Chip ott={data.ott} isButton={false} isCheck={false} />
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-[1.6rem]">
              <div className="w-full justify-start items-end gap-2.5 inline-flex">
                <UserCard
                  data={data}
                  isMyPage={false}
                  onClick={() => handleModal("post")}
                  showMoreIcon={data.mypost}
                />
              </div>
              <div className="w-full flex-col justify-start items-start gap-[1rem] flex">
                <div className="w-full h-[2.8rem] text-white text-[2rem] font-bold font-['Pretendard'] leading-[2.8rem]">
                  {data.title}
                </div>
                <ImagePreview
                  images={data.thumbnail}
                  onClick={() => setShowFullImage(true)}
                />
                <div className="w-full text-gray1 text-[1.6rem] font-normal font-['Pretendard'] leading-[2.4rem]">
                  {data.text}
                </div>
              </div>
            </div>
            <div className="w-full h-0.5 relative" />
          </section>
          <section className="inline-flex flex-col items-center justify-start w-full px-[2rem] pt-[2.4rem]">
            {comments.length > 0 ? (
              <>
                <div className="pb-[2rem] inline-flex items-start justify-start w-full gap-5 lex-col">
                  <div className="text-white text-[1.2rem] font-medium font-['Pretendard'] leading-[1.6rem]">
                    댓글 {comments.length}
                  </div>
                </div>
                <div className="flex flex-col w-full gap-[1rem] pb-[1rem]">
                  {comments.map((comment, index) => (
                    <React.Fragment key={index}>
                      <UserCard
                        data={comment}
                        isMyPage={false}
                        showMoreIcon={true}
                        onClick={() => handleModal(comment)}
                      />
                      <div className="h-[0.1rem] bg-gray13"></div>
                      {/* 대댓글 */}
                      {comment.morecomment?.map(
                        (
                          moreComment: dummyMoreContentType,
                          moreIndex: number,
                        ) => (
                          <div className="pl-[4.8rem]" key={moreIndex}>
                            <UserCard
                              data={moreComment}
                              isMyPage={false}
                              showMoreIcon={true}
                              onClick={() => handleModal(comment, moreComment)}
                            />
                            <div className="h-[0.1rem] bg-gray13"></div>
                          </div>
                        ),
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="pb-[4.25rem] h-full inline-flex items-start justify-start w-full gap-5 flex-col">
                  <div className="text-white text-[1.2rem] font-medium font-['Pretendard'] leading-[1.6rem]">
                    댓글 0
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <EmptyList
                    icon={<Chat />}
                    mainText="아직 댓글이 없어요."
                    subText="가장 먼저 댓글을 남겨보세요."
                  />
                </div>
              </>
            )}
          </section>
        </section>
      </main>
      <div className="fixed max-w-[50rem] min-w-[36rem]  bottom-0 inline-flex flex-col items-start justify-start w-full v-[5.4rem]">
        <div className="w-full px-[2.8rem] py-[1.1rem] bg-gray14 border-t-2 border-gray13 flex-col justify-start items-start  flex">
          <div className="w-full justify-start items-center gap-[15px] inline-flex">
            <div
              className="w-[2.4rem] h-[2.4rem]"
              onClick={() => setIsLocked((prev) => !prev)}
            >
              {isLocked ? <Lock /> : <UnLock />}
            </div>

            <div
              className={`w-full text-gray10 text-[1.6rem] font-normal font-['Pretendard'] leading-[2.4rem] flex gap-[1.5rem]`}
            >
              <input
                className={`w-full bg-transparent outline-none whitespace-nowrap ${setPlaceHolderClass()} ${setTextClass()} }`}
                placeholder={isFocused ? "" : "댓글을 남겨주세요."}
                onFocus={() => setIsFocused(true)}
                value={inputValue}
                onChange={handleChangeContent}
                onKeyDown={(e) => handleKeyPress(e, modalData)}
                ref={inputRef}
              />
            </div>
            <Button
              type="button"
              disabled={uptoSubmit ? false : true}
              size="xxs"
              variant="yellow"
              onClick={() => handleAddComment(modalData)}
            >
              등록
            </Button>
          </div>
        </div>
        <div className="w-full h-[3.8rem] relative bg-neutral-800" />
      </div>
      {showFullImage && (
        <div
          className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
          onClick={(e) => {
            e.stopPropagation();
            setShowFullImage(false);
          }}
        >
          <ImageSlider
            images={data.thumbnail}
            onClose={() => setShowFullImage(false)}
          />
        </div>
      )}
      {modalActive && (
        <ActionSheet
          isShow={modalActive}
          isPost={isPost}
          modalData={modalData}
          onPostEdit={onPostEdit}
          onPostDelete={onPostDelete}
          onCommentReply={onCommentReply}
          onCommentEdit={onCommentEdit}
          onCommentDelete={onCommentDelete}
          onReport={onReport}
          onClose={() => setModalActive(false)}
          ref={modalRef}
        />
      )}
      {basicModalActive && (
        <BasicModal
          ref={modalRef}
          isShow={basicModalActive}
          isLogout={false}
          target={isPost ? "게시글" : modalData.parent ? "답댓글" : "댓글"}
          onConfirm={(isConfirm) => closeConfirm(isConfirm, modalData)}
        />
      )}
    </>
  );
}
