import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ListModal from "../components/modal/ListModal";
import Header from "../components/Header/Header";
import Close from "../assets/icons/CloseIcon.svg?react";
import RightArrow from "../assets/icons/RightArrow.svg?react";
import Image from "../assets/icons/Image.svg?react";
import ImageSlider from "../components/ImageSlider";
import { useSetRecoilState } from "recoil";
import { postDetailState } from "../recoil/atoms";
import ImagePreview from "../components/ImagePreview";
import HeaderButton from "../components/Header/HeaderButton";
import { useNavigate } from "react-router-dom";

export default function PostCreatePage() {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [imgSrc, setImgSrc] = useState<string[] | null>(null);
  const [showFullImage, setShowFullImage] = useState<boolean>(false);
  const [scrollDown, setScrollDown] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const setPostDetail = useSetRecoilState(postDetailState);

  const nav = useNavigate();

  /**
   * OTT 선택
   * @param option
   */
  const handleSelectOTT = (option: string) => {
    setSelectedOption(option);
  };

  /**
   * text 상태가 변화될때마다 텍스트 영역의 높이를 조정
   */
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  /**
   * textarea 뷰포트 넘으면 스크롤 아래로 내리기
   */
  useLayoutEffect(() => {
    if (scrollDown) {
      textareaRef.current?.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
      setScrollDown(false);
    }
  }, [scrollDown]);

  /**
   * 이미지 받아오기
   * @returns
   */
  const handleImageChange = () => {
    const inputEl = inputRef.current;
    if (!inputEl) return;
    const files = inputEl.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        if (imgSrc && imgSrc.length === 1) {
          setImgSrc([...imgSrc, e.target.result as string]);
        } else {
          setImgSrc([e.target.result as string]);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  /**
   * 이미지 첨부 클릭
   */
  const openFileUploader = () => {
    inputRef.current?.click();
  };

  /**
   * 등록 버튼
   */
  const handleRegister = () => {
    if (!selectedOption || !title || !text) return;
    const currentData = {
      ott: selectedOption,
      title: title,
      content: text,
      postImage: imgSrc,
    };
    setPostDetail(currentData);
    console.log("등록 데이터:", currentData);
    // Save data logic here
  };

  useEffect(() => {
    console.log(isShow);
  }, [setIsShow, isShow]);

  return (
    <>
      <Header
        leftChild={
          <HeaderButton onClick={() => nav(-1)}>
            <Close />
          </HeaderButton>
        }
        title="글 작성"
        rightChild={
          <HeaderButton onClick={() => {}} className="text-gray10">
            등록
          </HeaderButton>
        }
        noBorder={false}
        onClick={handleRegister}
      />
      <main className="px-[2rem] w-full h-screen-minus-46 mt-[4.6rem]">
        <section
          className="flex py-[1.8rem] cursor-pointer"
          onClick={() => setIsShow((prev) => !prev)}
        >
          <p
            className={`font-pretendard text-[1.6rem] font-normal leading-[2.4rem] ${selectedOption ? "text-white" : "text-gray8"}`}
          >
            {selectedOption ? selectedOption : "OTT를 선택해주세요."}
          </p>
          <div className="flex items-center ml-auto">
            <RightArrow />
          </div>
        </section>
        <div className="w-full bg-gray13 h-[0.2rem]"></div>
        <section className=" mt-[1.4rem] flex flex-col gap-[1.6rem]">
          {/* 제목 */}
          <input
            className="bg-gray14 outline-none font-semibold text-[2rem] font-pretendard leading-[2.8rem] text-gray8"
            placeholder="제목을 입력해주세요."
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* 본문 */}
          <textarea
            className="bg-gray14 outline-none font-pretendard text-[1.4rem] font-medium leading-[2.2rem] text-gray8 resize-none overflow-hidden"
            placeholder="본문을 입력해주세요."
            value={text}
            onChange={(e) => setText(e.target.value)}
            ref={textareaRef}
          />

          {/* 사진이 들어갈 영역 */}
          {imgSrc && (
            <ImagePreview
              images={imgSrc}
              onClick={() => setShowFullImage(true)}
            />
          )}
        </section>
      </main>
      <div className="py-[1.6rem] px-[2rem] box-border fixed bottom-0 w-full max-w-[50rem] min-w-[36rem] h-[8rem] bg-gray14 border-2 border-gray13">
        <div
          className="flex gap-[0.5rem] items-center cursor-pointer"
          onClick={openFileUploader}
        >
          <Image />
          <input
            type="file"
            style={{ display: "none" }}
            onChange={handleImageChange}
            accept="image/*"
            ref={inputRef}
          />
          <span className="text-additional3 text-[1.2rem] font-normal leading-[1.6rem]">
            사진
          </span>

          {showFullImage && (
            <div
              className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
              onClick={(e) => {
                e.stopPropagation();
                setShowFullImage(false);
              }}
            >
              <ImageSlider
                images={imgSrc}
                onClose={() => setShowFullImage(false)}
              />
            </div>
          )}
        </div>
        {isShow && (
          <ListModal
            isShow={isShow}
            onSelect={(option) => handleSelectOTT(option)}
          />
        )}
      </div>
    </>
  );
}
