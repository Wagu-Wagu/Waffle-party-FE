import Header from "../components/Header/Header";
import LeftArrow from "../assets/icons/LeftArrowIcon.svg?react";
import UserCard from "../components/card/UserCard";
import Button from "../components/common/Button";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import UnLock from "../assets/icons/UnLock.svg?react";
import Lock from "../assets/icons/LockActive.svg?react";
import React from "react";
import ImagePreview from "../components/ImagePreview";
import ActionSheet from "../components/modal/ActionSheet";
import BasicModal from "../components/modal/BasicModal";
import HeaderButton from "../components/Header/HeaderButton";
import { useNavigate, useParams } from "react-router-dom";
import Chat from "../assets/icons/Chat.svg?react";
import EmptyList from "../components/common/EmptyList";
import Chip from "../components/common/Chip";
import { optionState } from "../types/actionSheetOption";
import useGetPostDetail from "../hooks/useGetPostDetail";
import { useRecoilState } from "recoil";
import { postDetailState } from "../recoil/postDetailState";
import { postCommentType } from "../types/postDetail";
import {
  ChildCommentDto,
  CommentDto,
  CommentEditDto,
} from "../lib/api/dto/comment.dto";
import { userProfileState } from "../recoil/userProfile";
import { editComment, postChildComment, postComment } from "../lib/api/comment";
import { ottTags } from "../types/ottTags";
import useGetMyProfile from "../hooks/useGetMyProfile";

export default function PostDetailPage() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [uptoSubmit, setUptoSubmit] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [basicModalActive, setBasicModalActive] = useState(false);
  const [comments, setComments] = useState<postCommentType[]>([]); // 받아온 데이터중 댓글데이터 넣기
  const [isEdit, setIsEdit] = useState(false);
  const [option, setOption] = useState<optionState>({
    type: "",
    isOwner: false,
  });
  const [postDetail, setPostDetail] = useRecoilState(postDetailState);
  const [userProfile, setUserProfile] = useRecoilState(userProfileState);
  const [isParent, setIsParent] = useState(true);
  const [commentData, setCommentData] = useState<any>(); //더보기에서 선택한 댓글 or 답댓글 정보 저장
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { postId } = useParams();

  const baseURL = import.meta.env.VITE_POST_BASE_URL;

  const nav = useNavigate();
  let params;

  /**
   * 게시글 상세 조회 api
   */
  const { postDetailData } = useGetPostDetail(postId as string);

  useEffect(() => {
    if (postDetailData) {
      const updatedPostDetail = {
        ...postDetailData,
        postDetail: {
          ...postDetailData.postDetail,
          photoes: postDetailData.postDetail.photoes.map((photo) => {
            return `${baseURL}${photo.replace(/"/g, "")}`;
          }),
        },
      };
      setPostDetail(updatedPostDetail);
      setComments(postDetailData.comments);
    }
  }, [postDetailData]);

  /**
   * 현재 유저 정보 api
   */
  const { userProfileData } = useGetMyProfile();
  useEffect(() => {
    if (userProfileData) {
      setUserProfile(userProfileData);
    }
  }, [userProfileData]);

  /**
   * 댓글 등록할때마다 변경
   */
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
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  /**
   * 댓글 입력
   * @param event
   */
  const handleChangeContent = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const textarea = event.target as HTMLTextAreaElement;
    const value = textarea.value;
    setIsFocused(true);

    const lineHeight = parseFloat(window.getComputedStyle(textarea).lineHeight);
    const maxRows = 4;

    const rows = Math.floor(textarea.scrollHeight / lineHeight);
    if (rows > maxRows) {
      event.preventDefault();
      window.alert("4줄까지만 입력 가능합니다");
      return;
    } else {
      setInputValue(value);
    }
  };

  /**
   * 입력 후 엔터키 눌렀을때
   * @param event
   */
  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
    commentData: any,
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddComment(commentData);
    }
  };

  /**
   *
   * @returns 댓글 등록
   */
  const handleAddComment = async (commentData: any) => {
    if (inputValue.trim() === "") return;

    const currentDate: Date = new Date();

    if (isEdit) {
      /**
       * 댓글, 답댓글 수정
       */
      params = new CommentEditDto();
      params.postId = postDetail.postDetail.postId;
      params.isSecret = isLocked;
      params.content = inputValue;
      params.commentUserId = commentData.commentUserId;
      params.commentId = commentData.commentId;
      await editComment(params);
      // comments 배열 복사
      const updatedComments = [...comments];

      // commentData의 commentId와 일치하는 댓글 찾기
      const index = updatedComments.findIndex(
        (comment) => comment.commentId === commentData.commentId,
      );

      // 해당 댓글이 존재하는 경우 정보 업데이트
      if (index !== -1) {
        updatedComments[index] = {
          ...updatedComments[index],
          isSecret: isLocked,
          content: inputValue,
        };
      }
      // 변경된 comments 배열로 업데이트
      setComments(updatedComments);
    } else {
      /**
       * 댓글, 답댓글 등록
       */
      if (isParent) {
        // 댓글 등록 로직
        params = new CommentDto();
        params.postId = postDetail.postDetail.postId;
        params.isSecret = isLocked;
        params.content = inputValue;
        await postComment(params);
      } else {
        // 답댓글 등록 로직
        params = new ChildCommentDto();
        params.parentCommentId = commentData.commentId;
        params.postId = postDetail.postDetail.postId;
        params.isSecret = isLocked;
        params.content = inputValue;
        await postChildComment(params);
      }

      const newComment: any = {
        ...(commentData ? { ...commentData } : { commentId: 1 }),
        commenterNickName: userProfile.userInfo.nickName,
        userImage: userProfile.userInfo.userImage,
        createdAt: currentDate,
        content: inputValue,
        isParentComment: isParent,
        isMyComment: true,
        isSecret: isLocked,
        isVisible: true,
      };
      if (isParent) {
        setComments([...comments, newComment]);
      } else {
        // 부모 댓글 바로 아래에 새로운 답댓글 추가
        const updatedComments = [...comments];
        const parentIndex = updatedComments.findIndex(
          (commentEl) => commentEl.commentId === commentData.commentId,
        );

        let insertIndex = parentIndex + 1;
        while (
          insertIndex < updatedComments.length &&
          !updatedComments[insertIndex].isParentComment
        ) {
          insertIndex++;
        }
        updatedComments.splice(insertIndex, 0, newComment);
        setComments(updatedComments);
      }
    }
    setInputValue("");
    setIsLocked(false);
    setIsEdit(false);
  };

  /**
   * 게시물, 댓글, 답댓글 삭제
   * @param isDeleteAction
   * @param modalData
   */
  const closeConfirm = (isDeleteAction: boolean, commentData: any) => {
    if (isDeleteAction) {
      /**
       * 게시물 삭제
       */
      if (option.type === "post") {
        // setIsPost(false);
        setBasicModalActive(false);
        // api 함수 호출
        return;
      } else {
        /**
         * 댓글, 답댓글 삭제
         */
        const updatedComments = comments.filter(
          (comment) => comment.commentId !== commentData.commentId,
        );

        setComments(updatedComments);
      }
    }
    setBasicModalActive(false);
  };

  // 게시물 수정
  const onPostEdit = () => {
    setModalActive(false);
    nav(`/post-edit/${postId}`);
  };
  // 게시물 삭제
  const onPostDelete = () => {
    setModalActive(false);
    setBasicModalActive(true);
  };
  const onPostReport = () => {
    setModalActive(false);
  };
  // 답댓글 달기
  const onCommentReply = () => {
    setIsFocused(true);
    setInputValue("");
    setIsLocked(false);
    setModalActive(false);
    setIsEdit(false);
  };
  // 댓글 수정
  const onCommentEdit = () => {
    setModalActive(false);
    setIsFocused(true);
    if (commentData.isSecret) {
      setIsLocked(true);
    } else {
      setIsLocked(false);
    }
    setIsEdit(true);
    setInputValue(commentData.content);
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
          <HeaderButton onClick={() => nav(-1)}>
            <LeftArrow />
          </HeaderButton>
        }
        noBorder={true}
      />
      <main className="w-full main-header pb-[8.4rem] bg-neutral-80">
        <section className="w-full">
          <section className="px-[2rem] flex-col items-center justify-start w-full gap-[2.4rem] border-b-8 border-neutral-900">
            <div className="py-[1.6rem]">
              <Chip
                ott={ottTags[postDetail.postDetail.ottTag]}
                isButton={false}
                isCheck={false}
              />
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-[1.6rem] mb-[2.4rem]">
              <div className="w-full justify-start items-end gap-2.5 inline-flex">
                <UserCard
                  data={postDetail.postDetail}
                  onClick={() => {
                    setOption({
                      type: "post",
                      isOwner: postDetail.postDetail.isMyPost,
                    });
                    setModalActive((prev) => !prev);
                  }}
                />
              </div>
              <div className="w-full flex-col justify-start items-start gap-[1rem] flex">
                <div className="w-full h-[2.8rem] text-white text-[2rem] font-bold font-['Pretendard'] leading-[2.8rem]">
                  {postDetail.postDetail.title}
                </div>
                {postDetail.postDetail.photoes && (
                  <>
                    <ImagePreview images={postDetail.postDetail.photoes} />
                  </>
                )}
                <div className="w-full text-gray1 text-[1.6rem] font-normal font-['Pretendard'] leading-[2.4rem]">
                  {postDetail.postDetail.content}
                </div>
              </div>
            </div>
            <div className="w-full h-0.5 relative" />
          </section>
          <section className="inline-flex flex-col items-center justify-start w-full px-[2rem] pt-[2.4rem]">
            {postDetail.comments.length > 0 ? (
              <>
                <div className="pb-[2rem] inline-flex items-start justify-start w-full gap-5 lex-col">
                  <div className="text-white text-[1.2rem] font-medium font-['Pretendard'] leading-[1.6rem]">
                    댓글 {postDetail.comments.length}
                  </div>
                </div>
                <div className="flex flex-col w-full gap-[1.2rem] pb-[0.5rem]">
                  {comments.map((comment, index) => (
                    <React.Fragment key={index}>
                      {comment.isParentComment ? (
                        // 댓글
                        <>
                          <UserCard
                            data={comment}
                            onClick={() => {
                              setCommentData(comment);
                              setIsParent(false);
                              setOption({
                                type: "comment",
                                isOwner: comment.isMyComment,
                              });
                              setModalActive((prev) => !prev);
                            }}
                          />
                        </>
                      ) : (
                        // 답댓글
                        <div className="pl-[4.8rem]">
                          <UserCard
                            data={comment}
                            onClick={() => {
                              setCommentData(comment);
                              setIsParent(false);
                              setOption({
                                type: "reply",
                                isOwner: comment.isMyComment,
                              });
                              setModalActive((prev) => !prev);
                            }}
                          />
                        </div>
                      )}
                      <div className="h-[0.1rem] bg-gray13"></div>
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
      <section className="fixed max-w-[50rem] min-w-[36rem] bottom-0 flex gap-[1.5rem] w-full px-[2rem] py-[1.1rem] border-t-2 bg-gray14 border-gray13 ">
        <div
          className="w-[2.4rem] h-[2.4rem]"
          onClick={() => setIsLocked((prev) => !prev)}
        >
          {isLocked ? <Lock /> : <UnLock />}
        </div>

        <div
          className={`w-full text-gray10 text-[1.6rem] font-normal font-['Pretendard'] leading-[2.4rem] flex gap-[1.5rem]`}
        >
          <div className="flex items-center w-full ">
            <textarea
              className={` w-full placeholder-pt-[1.2rem] resize-none bg-transparent outline-none ${setPlaceHolderClass()} ${setTextClass()}`}
              placeholder={isFocused ? "" : "댓글을 남겨주세요."}
              onFocus={() => setIsFocused(true)}
              value={inputValue}
              onChange={handleChangeContent}
              onKeyDown={(e) => handleKeyPress(e, commentData)}
              ref={inputRef}
            />
          </div>
        </div>
        <Button
          type="button"
          disabled={uptoSubmit ? false : true}
          size="xxs"
          variant="yellow"
          onClick={() => handleAddComment(commentData)}
        >
          등록
        </Button>
      </section>
      {modalActive && (
        <ActionSheet
          option={option}
          isShow={modalActive}
          onPostEdit={onPostEdit}
          onPostDelete={onPostDelete}
          onPostReport={onPostReport}
          onCommentReply={onCommentReply}
          onCommentEdit={onCommentEdit}
          onCommentDelete={onCommentDelete}
          onReport={onReport}
          setModalActive={setModalActive}
          onClose={() => setModalActive((prev) => !prev)}
        />
      )}
      {basicModalActive && (
        <BasicModal
          isShow={basicModalActive}
          isLogout={false}
          option={option.type}
          onConfirm={(isConfirm) => closeConfirm(isConfirm, commentData)}
          setModalActive={setBasicModalActive}
        />
      )}
    </>
  );
}
