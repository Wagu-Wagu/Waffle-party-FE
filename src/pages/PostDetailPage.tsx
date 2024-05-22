import Header from "../components/Header/Header";
import LeftArrow from "../assets/icons/LeftArrowIcon.svg?react";
import UserCard from "../components/card/UserCard";
import Button from "../components/common/Button";
import { useEffect, useRef, useState } from "react";
import UnLock from "../assets/icons/UnLock.svg?react";
import Lock from "../assets/icons/Lock.svg?react";
import ImageSlider from "../components/ImageSlider";
import React from "react";
import formatDate from "../hooks/formatDate";
import ImagePreview from "../components/ImagePreview";
import ActionSheet from "../components/modal/ActionSheet";
import BasicModal from "../components/modal/BasicModal";
import { data } from "../mock/detail";

export default function PostDetailPage() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [uptoSubmit, setUptoSubmit] = useState(false);
  const [showFullImage, setShowFullImage] = useState<boolean>(false);
  const [modalActive, setModalActive] = useState(false);
  const [basicModalActive, setBasicModalActive] = useState(false);
  const modalRef = useRef<HTMLElement>(null);
  const [modalData, setModalData] = useState(null);
  // 받아온 데이터중 댓글데이터 넣기
  const [comments, setComments] = useState(data.comments);

  useEffect(() => {
    if (inputValue.length === 0) {
      setIsFocused(false);
      setUptoSubmit(false);
    } else {
      setUptoSubmit(true);
    }
  }, [inputValue, setInputValue]);

  /**
   * 댓글 입력
   * @param event
   */
  const handleChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  /**
   *
   * @returns 댓글 등록
   */
  const handleAddComment = () => {
    if (inputValue.trim() === "") return;
    console.log(inputValue);

    const currentDate: Date = new Date();
    const formattedDate: string = formatDate(currentDate);

    const newComment = {
      mycomment: true,
      nickname: "새로운 답변자",
      timestamp: formattedDate,
      content: inputValue,
      profilePicture:
        "https://gam-image-test.s3.ap-northeast-2.amazonaws.com/work/b7d98ae9-c597-48cf-a625-dc6c8bac0001%E1%84%86%E1%85%A2%E1%84%80%E1%85%A5%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3.jpeg",
      morecomment: null,
      lock: isLocked,
    };

    console.log(newComment);

    setComments((prevComments) => {
      const updatedComments = [...prevComments, newComment];
      return updatedComments;
    });
    setInputValue("");
    setIsLocked(false);
  };

  /**
   * 엔터키 눌렀을때
   * @param event
   */
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddComment();
    }
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
      return "text-yellow3";
    }
    return "text-white";
  };

  // TODO any type 변경
  const handleModal = (value: any) => {
    setModalActive((prev) => !prev);
    setModalData(value);
  };

  const closeConfirm = (isDeleteAction: boolean) => {
    setBasicModalActive(false);
    if (isDeleteAction) {
      // 예시 API 호출
      // deleteCommentAPI().then(response => { ... });
    }
  };

  const onPostEdit = () => {
    setModalActive(false);
  };
  const onPostDelete = () => {
    setModalActive(false);
    setBasicModalActive(true);
  };
  const onCommentReply = () => {
    setModalActive(false);
  };
  const onCommentEdit = () => {
    setModalActive(false);
  };
  const onCommentDelete = () => {
    setModalActive(false);
    setBasicModalActive(true);
  };
  const onMoreComment = () => {
    setModalActive(false);
  };
  const onReport = () => {
    setModalActive(false);
  };

  return (
    <>
      <Header leftChild={<LeftArrow />} noBorder={true} />
      <main className="w-full h-screen-minus-12.8 bg-neutral-800">
        <section className="px-[2rem] py-[1.5rem]">
          <div className="px-[1.4rem] py-[0.8rem]  bg-gray13 rounded-[5rem] justify-center items-center inline-flex">
            <div className="text-white text-[1.2rem] font-normal font-['Pretendard'] leading-[1.6rem]">
              {data.ott}
            </div>
          </div>
        </section>

        <section className="w-full">
          <section className="inline-flex px-[2rem] flex-col items-center justify-start w-full gap-[2.4rem] border-b-8 border-neutral-900">
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
            {data.comments ? (
              <>
                <div className="pb-[2rem] inline-flex items-start justify-start w-full gap-5 lex-col">
                  <div className="text-white text-[1.2rem] font-medium font-['Pretendard'] leading-[1.6rem]">
                    댓글 {data.comments.length}
                  </div>
                </div>
                <div className="flex flex-col w-full gap-[1rem]">
                  {comments.map((comment, index) => (
                    <React.Fragment key={index}>
                      <UserCard
                        data={comment}
                        isMyPage={false}
                        showMoreIcon={true}
                        onClick={() => handleModal(comment)}
                      />
                      <div className="h-[0.1rem] bg-gray13"></div>
                    </React.Fragment>
                  ))}
                </div>
              </>
            ) : (
              <></>
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
                onKeyDown={handleKeyPress}
              />
            </div>
            <Button
              type="button"
              disabled={uptoSubmit ? false : true}
              size="xxs"
              variant="yellow"
              onClick={handleAddComment}
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
          modalData={modalData}
          onPostEdit={onPostEdit}
          onPostDelete={onPostDelete}
          onCommentReply={onCommentReply}
          onCommentEdit={onCommentEdit}
          onCommentDelete={onCommentDelete}
          onMoreComment={onMoreComment}
          onReport={onReport}
          ref={modalRef}
        />
      )}
      {basicModalActive && (
        <BasicModal
          ref={modalRef}
          isShow={basicModalActive}
          onConfirm={closeConfirm}
        />
      )}
    </>
  );
}
