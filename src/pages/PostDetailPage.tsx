import Header from "../components/Header/Header";
import LeftArrow from "../assets/icons/LeftArrowIcon.svg?react";
import UserCard from "../components/card/UserCard";
import Button from "../components/common/Button";
import { useEffect, useState } from "react";
import UnLock from "../assets/icons/UnLock.svg?react";
import Lock from "../assets/icons/Lock.svg?react";
import { postData } from "./HomePage";
import ImageSlider from "../components/ImageSlider";

export default function PostDetailPage() {
  const [isFocused, setIsFocused] = useState(false);
  const contents = 3;
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
    }
  }, [inputValue, setInputValue]);

  const handleChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const setPlaceHolderClass = () => {
    console.log(isFocused, isLocked);
    if (isLocked && !isFocused) {
      return "placeholder-yellow5 opacity-40";
    }
    return "placeholder-gray10";
  };

  const setTextClass = () => {
    if (isLocked && isFocused) {
      return "text-yellow3";
    }
    return "text-white";
  };

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

  // const { data, isMyPage, onClick } = props;
  const data = {
    nickname: "dd",
    timestamp: "xx.xx",
    profilePicture: null,
  };
  const data1 = {
    nickname: "dd",
    timestamp: "xx.xx",
    content:
      "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
    profilePicture: [
      "https://gam-image-test.s3.ap-northeast-2.amazonaws.com/work/b7d98ae9-c597-48cf-a625-dc6c8bac0001%E1%84%86%E1%85%A2%E1%84%80%E1%85%A5%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3.jpeg",
    ],
  };
  return (
    <>
      <Header leftChild={<LeftArrow />} noBorder={true} />
      <main className="w-full h-screen-minus-12.8 bg-neutral-800">
        <div className="px-[2rem] py-[1.5rem]">
          <div className="px-[1.4rem] py-[0.8rem]  bg-gray13 rounded-[5rem] justify-center items-center inline-flex">
            <div className="text-white text-[1.2rem] font-normal font-['Pretendard'] leading-[1.6rem]">
              {postData.ott}
            </div>
          </div>
        </div>

        <div className="w-full mt-[1.5rem]">
          <div className="inline-flex px-[2rem] flex-col items-center justify-start w-full gap-[2.4rem] border-b-8 border-neutral-900">
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
          </div>
          <div className="inline-flex flex-col items-center justify-start w-full px-[2rem] pt-[2.4rem]">
            <div className="pb-[2rem] inline-flex items-start justify-start w-full gap-5 lex-col">
              <div className="text-white text-[1.2rem] font-medium font-['Pretendard'] leading-[1.6rem]">
                댓글 {postData.comments}
              </div>
            </div>
            <div className="flex flex-col w-full gap-[1rem]">
              <UserCard data={data1} isMyPage={false} />
              <div className="h-[0.1rem] bg-gray13"></div>
              <UserCard data={data1} isMyPage={false} />
              <div className="h-[0.1rem] bg-gray13"></div>
              <UserCard data={data1} isMyPage={false} />
              <UserCard data={data1} isMyPage={false} />
              <div className="h-[0.1rem] bg-gray13"></div>
              <UserCard data={data1} isMyPage={false} />
              <div className="h-[0.1rem] bg-gray13"></div>
              <UserCard data={data1} isMyPage={false} />
              <div className="h-[0.1rem] bg-gray13"></div>
            </div>
          </div>
        </div>
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
              />
            </div>
            <Button
              type="button"
              disabled={uptoSubmit && isLocked ? false : true}
              size="xxs"
              variant="yellow"
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
