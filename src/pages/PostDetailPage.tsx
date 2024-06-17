import Header from "../components/Header/Header";
import LeftArrow from "../assets/icons/LeftArrowIcon.svg?react";
import UserCard from "../components/card/UserCard";
import Button from "../components/common/Button";
import { useEffect, useMemo, useRef, useState } from "react";
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
import {
  deleteComment,
  editComment,
  postChildComment,
  postComment,
} from "../lib/api/comment";
import { ottTags } from "../types/ottTags";
import DeletePostMessage from "../components/DeletePostMessage";
import { postDelete } from "../lib/api/post";
import { ResponseDto } from "../lib/api/dto/response.dto";
import { initialPostDetailState } from "../recoil/postDetailState";
import Loading from "../components/Login/Loading";

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
  const [commentData, setCommentData] = useState<any>(); //더보기에서 선택한 댓글 or 답댓글 정보 저장
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionHeight, setSectionHeight] = useState<string>("auto"); //댓글창 높이
  const [previousSection, setPreviousSection] = useState<number>(0); //초기 하단 댓글영역 높이
  const [isHeightIncreased, setIsHeightIncreased] = useState<boolean>(false); //댓글이 작성되었을때 초기 댓글창 높이를 넘어가는지 검사
  const [refresh, setRefresh] = useState<boolean>(false); // 데이터 갱신을 위한 상태 변수

  const { postId } = useParams();

  const baseURL = import.meta.env.VITE_POST_BASE_URL;

  const nav = useNavigate();
  let params;

  /**
   * 이미지 URL에서 큰따옴표 없앰
   * @param photoArray
   * @returns
   */
  const setImageSrc = (photoArray: string[]) => {
    return photoArray.map((photo: string) => {
      return photo.replace(/"/g, "");
    });
  };

  /**
   * 게시글 상세 조회 api
   */
  const { postDetailData, refetch, isLoading } = useGetPostDetail(
    postId as string,
  );

  useEffect(() => {
    if (postDetailData) {
      const updatedPostDetail = {
        ...postDetailData,
        postDetail: {
          ...postDetailData.postDetail,
          photoes: setImageSrc(postDetailData.postDetail.photoes),
        },
      };
      setPostDetail(updatedPostDetail);
      setComments(postDetailData.comments);
    } else {
      // postDetailData가 없는 경우 상태를 초기화
      setPostDetail(initialPostDetailState);
    }
  }, [postDetailData]);

  /**
   * 댓글, 답댓글 등록&수정&삭제 후 데이터 갱신
   */
  useEffect(() => {
    if (refresh) {
      refetch(); // 데이터 갱신을 위한 함수 호출
      setRefresh(false); // 갱신 후 상태 초기화
    }
  }, [refresh, refetch]);

  /**
   * 댓글 등록할때마다 변경
   */
  useEffect(() => {
    if (inputValue.length === 0) {
      setUptoSubmit(false);
    } else {
      setUptoSubmit(true);
    }
  }, [inputValue, setInputValue]);

  // 모달 옵션 클릭 후 포커스 상태(답댓글, 수정)
  useEffect(() => {
    if (isFocused) {
      inputRef.current?.focus();
    }
  }, [isFocused, setIsFocused]);

  /**
   * 초기 댓글창 높이 계산
   */
  const initialSectionHeight = useMemo(() => {
    if (sectionRef.current) {
      return sectionRef.current.offsetHeight;
    }
    return 0;
  }, [sectionRef.current]);

  useEffect(() => {
    if (initialSectionHeight !== 0) {
      setPreviousSection(initialSectionHeight);
    }
  }, [initialSectionHeight]);

  /**
   * 댓글이 입력될때마다 댓글창 높이 계산
   */
  const adjustTextareaHeight = () => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      const newHeight = inputRef.current.scrollHeight;

      // 댓글이 댓글창을 넘어가면
      if (newHeight >= previousSection) {
        setIsHeightIncreased(true);
        inputRef.current.style.height = `${newHeight}px`;
        setSectionHeight(`${newHeight + 22}px`); // 22px 패딩값(py-11px)
      } else {
        setIsHeightIncreased(false);
        setSectionHeight(`${previousSection}px`);
      }
    }
  };

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

    // textarea 현재 줄 높이 가져오기
    const lineHeight = parseFloat(window.getComputedStyle(textarea).lineHeight);
    // 최대 줄 수 설정
    const maxRows = 4;

    // 현재 줄 수 계산(textarea 전체 높이/textarea 현재 줄 높이)
    const rows = Math.floor(textarea.scrollHeight / lineHeight);
    if (rows > maxRows) {
      event.preventDefault();
      window.alert("4줄까지만 입력 가능합니다");
      return;
    } else {
      setInputValue(value);
    }
    // input이 바뀌면 댓글창 높이 재설정
    adjustTextareaHeight();
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
    console.log(commentData);
    let res: ResponseDto;
    if (inputValue.trim() === "") return;

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
      res = await editComment(params);
    } else {
      /**
       * 댓글, 답댓글 등록
       */
      if (!commentData) {
        // 댓글 등록 로직
        params = new CommentDto();
        params.postId = postDetail.postDetail.postId;
        params.isSecret = isLocked;
        params.content = inputValue;
        res = await postComment(params);
      } else {
        // 답댓글 등록 로직
        params = new ChildCommentDto();
        params.parentCommentId = commentData.commentId;
        params.postId = postDetail.postDetail.postId;
        params.isSecret = isLocked;
        params.content = inputValue;
        res = await postChildComment(params);
      }
    }
    if (res.success) {
      // 댓글 등록이 성공했을 때 데이터 갱신
      setRefresh(true);
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
  const closeConfirm = async (isDeleteAction: boolean, commentData: any) => {
    if (isDeleteAction) {
      /**
       * 게시물 삭제
       */
      if (option.type === "post") {
        const postId = postDetail.postDetail.postId;
        await postDelete(postId);
        setBasicModalActive(false);
        nav(-1);
        return;
      } else {
        /**
         * 댓글, 답댓글 삭제
         */
        const res: ResponseDto = await deleteComment(commentData.commentId);
        if (res.success) {
          // 댓글 등록이 성공했을 때 데이터 갱신
          setRefresh(true);
        }
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
    setIsFocused(false);
    setInputValue("");
    setIsLocked(false);
    setModalActive(false);
    setIsEdit(false);
    // 짧은 지연 후 isFocuse를 true로 설정
    setTimeout(() => {
      setIsFocused(true);
    }, 0);
  };
  // 댓글 수정
  const onCommentEdit = () => {
    setModalActive(false);
    setIsFocused(false);
    if (commentData.isSecret) {
      setIsLocked(true);
    } else {
      setIsLocked(false);
    }
    setIsEdit(true);
    setInputValue(commentData.content);
    // 짧은 지연 후 isFocuse를 true로 설정
    setTimeout(() => {
      setIsFocused(true);
    }, 0);
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
    if (isLocked) {
      return "placeholder-yellowTrans2";
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

  if (isLoading) return <Loading />;

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
      {postDetailData ? (
        <>
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
                        <ImagePreview
                          images={postDetail.postDetail.photoes.map(
                            (photo: string) => `${baseURL}${photo}`,
                          )}
                        />
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
                {postDetail.comments.length > 0 || comments.length > 0 ? (
                  <>
                    <div className="pb-[2rem] inline-flex items-start justify-start w-full gap-5 lex-col">
                      <div className="text-white text-[1.2rem] font-medium font-['Pretendard'] leading-[1.6rem]">
                        댓글{" "}
                        {
                          postDetail.comments.filter(
                            (comment: postCommentType) => comment.isActive,
                          ).length
                        }
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
                        subText={<p>가장 먼저 댓글을 남겨보세요.</p>}
                      />
                    </div>
                  </>
                )}
              </section>
            </section>
          </main>
          <section
            ref={sectionRef}
            style={{ height: sectionHeight }}
            className="fixed max-w-[50rem] min-w-[36rem] bottom-0 flex gap-[1.5rem] w-full px-[2rem] py-[1.1rem] border-t-2 bg-gray14 border-gray13 "
          >
            <div
              className={`w-[2.4rem] h-[2.4rem] ${isHeightIncreased ? "flex self-end" : ""}`}
              onClick={() => setIsLocked((prev) => !prev)}
            >
              {isLocked ? <Lock /> : <UnLock />}
            </div>

            <div
              className={`w-full text-gray10 text-[1.6rem] font-normal font-['Pretendard'] leading-[2.4rem] flex gap-[1.5rem]`}
            >
              <div className="flex w-full ">
                <textarea
                  className={` w-full placeholder-pt-[1.2rem] resize-none bg-transparent outline-none ${setPlaceHolderClass()} ${setTextClass()}`}
                  placeholder={
                    isFocused
                      ? ""
                      : isLocked
                        ? "비밀 댓글을 남겨주세요."
                        : "댓글을 남겨주세요."
                  }
                  onFocus={() => setIsFocused(true)}
                  value={inputValue}
                  onChange={handleChangeContent}
                  onKeyDown={(e) => handleKeyPress(e, commentData)}
                  ref={inputRef}
                />
              </div>
            </div>
            <div className={`${isHeightIncreased ? "flex self-end" : ""}`}>
              <Button
                type="button"
                disabled={uptoSubmit ? false : true}
                size="xxs"
                variant="yellow"
                onClick={() => handleAddComment(commentData)}
              >
                등록
              </Button>
            </div>
          </section>
        </>
      ) : (
        // 삭제된 게시글일때
        <DeletePostMessage onClick={() => nav(-1)} />
      )}

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
          option={option.type}
          onConfirm={(isConfirm) => closeConfirm(isConfirm, commentData)}
          setModalActive={setBasicModalActive}
        />
      )}
    </>
  );
}
