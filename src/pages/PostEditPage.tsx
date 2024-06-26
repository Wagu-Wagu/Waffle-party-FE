import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ListModal from "../components/modal/ListModal";
import Header from "../components/Header/Header";
import Close from "../assets/icons/CloseIcon.svg?react";
import RightArrow from "../assets/icons/RightArrow.svg?react";
import Image from "../assets/icons/Image.svg?react";
import ImagePreview from "../components/ImagePreview";
import HeaderButton from "../components/Header/HeaderButton";
import { useNavigate, useParams } from "react-router-dom";
import { postEdit } from "../lib/api/post";
import { useRecoilState } from "recoil";
import { postDetailState } from "../recoil/postDetailState";
import { ottTags } from "../types/ottTags";
import { PostEditDto } from "../lib/api/dto/post.dto";
import { postUrl } from "../lib/api/image";

export default function PostCreatePage() {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [imgSrc, setImgSrc] = useState<string[] | undefined>([]);
  const [s3Url, setS3Url] = useState<string[] | undefined>([]);
  const [scrollDown, setScrollDown] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<{
    key: string;
    value: string;
  } | null>(null);
  const [optionIndex, setOptionIndex] = useState<number | undefined>(undefined);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [newFile, setNewFile] = useState<File[] | null>([]);
  const [postDetail, setPostDetail] = useRecoilState(postDetailState);

  const { postId } = useParams();
  const baseURL = import.meta.env.VITE_POST_BASE_URL;

  const param = new PostEditDto();

  /**
   * 이미지 baseURL을 제거한 string 얻기
   * @param photoArray
   * @returns
   */
  const deleteBaseUrl = (photoArray: string[]) => {
    return photoArray.map((photo: string) => photo.replace(baseURL, ""));
  };

  /**
   * 이미지 baseURL을 붙인 string 받기
   * @param photoArray
   * @returns
   */
  const setBaseUrl = (photoArray: string[]) => {
    return photoArray.map((photo: string) => `${baseURL}${photo}`);
  };

  /**
   * 게시글 상세 recoil 에서 가져오기
   */
  useEffect(() => {
    if (postDetail) {
      const key = postDetail.postDetail.ottTag;
      const value = ottTags[postDetail.postDetail.ottTag];
      setSelectedOption({ key, value });
      setTitle(postDetail.postDetail.title);
      setText(postDetail.postDetail.content);
      // baseURL을 붙인 이미지url
      setImgSrc(setBaseUrl(postDetail.postDetail.photoes));
      setS3Url(postDetail.postDetail.photoes);
      const index = Object.keys(ottTags).indexOf(key);
      setOptionIndex(index);
    }
  }, [postDetail, setPostDetail]);

  const nav = useNavigate();

  /**
   * ott, 제목, 내용 다 충족하면 등록버튼 활성화
   */
  useEffect(() => {
    if (selectedOption && title && text) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [selectedOption, setSelectedOption, title, setTitle, text, setText]);

  /**
   * OTT 선택
   * @param option
   */
  const handleSelectOTT = (option: { key: string; value: string }) => {
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
    if (imgSrc?.length === 2) {
      window.alert("파일은 2장까지만 업로드 가능합니다.");
      return;
    }
    const files = inputEl.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    // 파일 크기 체크 (2MB 이상인 경우 처리)
    if (file.size > 2 * 1024 * 1024) {
      window.alert("이미지 크기는 2MB 이하여야 합니다.");
      return;
    }
    setNewFile((prevFiles) => (prevFiles ? [...prevFiles, file] : [file]));

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
  const handleRegister = async () => {
    if (!selectedOption || !title || !text) return;
    if (postId) {
      param.postId = +postId;
    }

    try {
      param.ottTag = selectedOption.key;
      param.title = title;
      param.content = text;
      // 새로 등록한 파일이 있을때만 이미지 URL api연동
      if (newFile && newFile.length > 0) {
        // s3 url 받아오기
        const res = await postUrl(newFile);
        const newPhotoesWithBaseUrl = deleteBaseUrl(res.photoes).map(
          (photo) => {
            return photo.replace(/"/g, "");
          },
        );

        // 기존에 있던 사진을 삭제하지 않고 파일 하나를 추가했을 경우와 그 외의 경우
        const newS3Urls = s3Url
          ? [...s3Url, ...newPhotoesWithBaseUrl]
          : [...newPhotoesWithBaseUrl];
        // 상태 업데이트
        setS3Url(newS3Urls);
        param.postImages = newS3Urls;
      } else {
        param.postImages = s3Url;
      }

      // 수정예정
      await postEdit(param);
      nav(-1);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Header
        leftChild={
          <HeaderButton onClick={() => nav(-1)}>
            <Close />
          </HeaderButton>
        }
        title={"글 수정"}
        rightChild={
          <HeaderButton
            onClick={handleRegister}
            className={`${isValid ? "text-white" : "text-gray10"}`}
          >
            수정
          </HeaderButton>
        }
        noBorder={false}
      />
      <main className="px-[2rem] w-full h-screen-minus-46 mt-[4.6rem]">
        <section
          className="flex py-[1.8rem] cursor-pointer"
          onClick={() => setIsShow((prev) => !prev)}
        >
          <p
            className={`font-pretendard text-[1.6rem] font-normal leading-[2.4rem] ${selectedOption ? "text-white" : "text-gray8"}`}
          >
            {selectedOption ? selectedOption.value : "OTT를 선택해주세요."}
          </p>
          <div className="flex items-center ml-auto">
            <RightArrow />
          </div>
        </section>
        <div className="w-full bg-gray13 h-[0.2rem]"></div>
        <section className=" mt-[1.4rem] flex flex-col gap-[1.6rem]">
          {/* 제목 */}
          <input
            className="bg-gray14 outline-none font-semibold text-[2rem] font-pretendard leading-[2.8rem] text-white placeholder-gray8"
            placeholder="제목을 입력해주세요."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          {/* 사진이 들어갈 영역 */}
          {imgSrc && (
            <ImagePreview
              images={imgSrc}
              isImageUploading={true}
              onDelete={(index) => {
                const updatedImages = imgSrc.filter((_, i) => i !== index);
                setImgSrc(updatedImages);

                if (s3Url) {
                  const updatedS3Url = s3Url.filter((_, i) => i !== index);
                  setS3Url(updatedS3Url);
                }

                if (newFile) {
                  const updatedFiles = newFile.filter((_, i) => i !== index);
                  setNewFile(updatedFiles);
                }
              }}
            />
          )}
          {/* 본문 */}
          <textarea
            className="bg-gray14 outline-none font-pretendard text-[1.4rem] font-medium leading-[2.2rem] resize-none overflow-hidden text-white placeholder-gray8"
            placeholder="본문을 입력해주세요."
            value={text}
            onChange={(e) => setText(e.target.value)}
            ref={textareaRef}
          />
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
        </div>
        {isShow && (
          <ListModal
            isShow={isShow}
            optionIndex={optionIndex}
            onSelect={(option) => handleSelectOTT(option)}
            setModalActive={setIsShow}
            setOptionIndex={setOptionIndex}
          />
        )}
      </div>
    </>
  );
}
