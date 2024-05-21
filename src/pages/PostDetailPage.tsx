import Header from "../components/Header/Header";
import LeftArrow from "../assets/icons/LeftArrowIcon.svg?react";
import UserCard from "../components/card/UserCard";
import Button from "../components/common/Button";
import { useEffect, useState } from "react";
import UnLock from "../assets/icons/UnLock.svg?react";
import Lock from "../assets/icons/Lock.svg?react";
import ImageSlider from "../components/ImageSlider";
import React from "react";
import formatDate from "../hooks/formatDate";

export default function PostDetailPage() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [uptoSubmit, setUptoSubmit] = useState(false);
  const [showFullImage, setShowFullImage] = useState<boolean>(false);

  useEffect(() => {
    if (inputValue.length === 0) {
      setIsFocused(false);
      setUptoSubmit(false);
    } else {
      setUptoSubmit(true);
      console.log(inputValue, uptoSubmit);
    }
  }, [inputValue, setInputValue]);

  /**
   * 댓글 등록
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

    const currentDate: Date = new Date();
    const formattedDate: string = formatDate(currentDate);

    const newComment = {
      nickname: "새로운 답변자",
      profilePicture:
        "https://search.pstatic.net/common/?src=https%3A%2F%2Fditto-phinf.pstatic.net%2F20240405_208%2F1712296500539nVxqY_JPEG%2F660f9233b8c2545456c85fd6.jpg&type=o&size=472x472&ttype=input",
      content: inputValue,
      timestamp: formattedDate,
    };

    setComments((prevComments) => [...prevComments, newComment]);
    setInputValue(""); // 댓글 추가 후 입력창 비우기
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

  /**
   * dummy data
   * TODO api연동후 지울예정
   */
  const postData = {
    id: 1,
    ott: "티빙",
    title: "여고추리반3 보실 분",
    content:
      "무서운 저주가 떠도는 학교로 전학 간 추리반 학생들이 학교에 숨겨진 진실에 다가갈수록 더욱더 거대한 사건을 마주하면서 벌어지는 미스터리 어드벤처 여고추리반3 같이 봐요!",
    thumbnail: [
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fditto-phinf.pstatic.net%2F20240405_208%2F1712296500539nVxqY_JPEG%2F660f9233b8c2545456c85fd6.jpg&type=o&size=472x472&ttype=input",
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fditto-phinf.pstatic.net%2F20240405_208%2F1712296500539nVxqY_JPEG%2F660f9233b8c2545456c85fd6.jpg&type=o&size=472x472&ttype=input",
    ],
    writer: "와플중독자",
    date: "2024.5.18",
    comments: 26,
  };

  const [comments, setComments] = useState([
    {
      nickname: "유저1",
      timestamp: "2024.5.18",
      content:
        "이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다",
      profilePicture:
        "https://gam-image-test.s3.ap-northeast-2.amazonaws.com/work/b7d98ae9-c597-48cf-a625-dc6c8bac0001%E1%84%86%E1%85%A2%E1%84%80%E1%85%A5%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3.jpeg",
    },
    {
      nickname: "유저2",
      timestamp: "2024.5.18",
      content: "저요",
      profilePicture:
        "https://gam-image-test.s3.ap-northeast-2.amazonaws.com/work/b7d98ae9-c597-48cf-a625-dc6c8bac0001%E1%84%86%E1%85%A2%E1%84%80%E1%85%A5%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3.jpeg",
    },
    {
      nickname: "유저3",
      timestamp: "2024.5.18",
      content: "저도요",
      profilePicture:
        "https://gam-image-test.s3.ap-northeast-2.amazonaws.com/work/b7d98ae9-c597-48cf-a625-dc6c8bac0001%E1%84%86%E1%85%A2%E1%84%80%E1%85%A5%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3.jpeg",
    },
    {
      nickname: "유저4",
      timestamp: "2024.5.18",
      content: "이거재밌음??",
      profilePicture:
        "https://gam-image-test.s3.ap-northeast-2.amazonaws.com/work/b7d98ae9-c597-48cf-a625-dc6c8bac0001%E1%84%86%E1%85%A2%E1%84%80%E1%85%A5%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3.jpeg",
    },
  ]);

  const data = {
    nickname: "작성자",
    timestamp: "xx.xx",
    profilePicture: null,
  };

  return (
    <>
      <Header leftChild={<LeftArrow />} noBorder={true} />
      <main className="w-full h-screen-minus-12.8 bg-neutral-800">
        <section className="px-[2rem] py-[1.5rem]">
          <div className="px-[1.4rem] py-[0.8rem]  bg-gray13 rounded-[5rem] justify-center items-center inline-flex">
            <div className="text-white text-[1.2rem] font-normal font-['Pretendard'] leading-[1.6rem]">
              {postData.ott}
            </div>
          </div>
        </section>

        <section className="w-full mt-[1.5rem]">
          <section className="inline-flex px-[2rem] flex-col items-center justify-start w-full gap-[2.4rem] border-b-8 border-neutral-900">
            <div className="w-full flex flex-col items-start justify-start gap-[1.6rem]">
              <div className="w-full justify-start items-end gap-2.5 inline-flex">
                <UserCard data={data} isMyPage={false} />
              </div>
              <div className="w-full flex-col justify-start items-start gap-[1rem] flex">
                <div className="w-full h-[2.8rem] text-white text-[2rem] font-bold font-['Pretendard'] leading-[2.8rem]">
                  {postData.title}
                </div>
                {postData.thumbnail && (
                  <div
                    className="flex w-full"
                    onClick={() => setShowFullImage(true)}
                  >
                    {postData.thumbnail.map((src, index) => (
                      <div
                        className="h-[17rem]"
                        key={index}
                        style={{
                          width: `${index === 0 ? 60.94 : 39.06}%`,
                          position: "relative",
                        }}
                      >
                        <img
                          className="h-full"
                          src={src}
                          alt={`업로드 사진 ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        {index === 1 && (
                          <div
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              backgroundColor: "rgba(0, 0, 0, 0.8)",
                            }}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
                <div className="w-full text-gray1 text-[1.6rem] font-normal font-['Pretendard'] leading-[2.4rem]">
                  {postData.content}
                </div>
              </div>
            </div>
            <div className="w-full h-0.5 relative" />
          </section>
          <section className="inline-flex flex-col items-center justify-start w-full px-[2rem] pt-[2.4rem]">
            <div className="pb-[2rem] inline-flex items-start justify-start w-full gap-5 lex-col">
              <div className="text-white text-[1.2rem] font-medium font-['Pretendard'] leading-[1.6rem]">
                댓글 {postData.comments}
              </div>
            </div>
            <div className="flex flex-col w-full gap-[1rem]">
              {comments.map((comment, index) => (
                <React.Fragment key={index}>
                  <UserCard data={comment} isMyPage={false} />
                  <div className="h-[0.1rem] bg-gray13"></div>
                </React.Fragment>
              ))}
            </div>
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
            images={postData.thumbnail}
            onClose={() => setShowFullImage(false)}
          />
        </div>
      )}
    </>
  );
}
