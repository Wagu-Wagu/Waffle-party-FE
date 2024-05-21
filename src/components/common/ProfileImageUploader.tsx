import { useRef, useState } from "react";
import profile from "../../assets/icons/profile.svg";
import Camera from "../../assets/icons/Camera.svg?react";

interface profileImageProps {
  imageSrc: string | undefined;
  changeProfile: boolean;
}
export default function ProfileImageUploader(props: profileImageProps) {
  const { imageSrc, changeProfile } = props;

  const [proImg, setProImg] = useState(imageSrc ?? profile);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const getProImg = () => {
    const inputEl = inputRef.current;
    if (!inputEl) return;
    const files = inputEl.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setProImg(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  // const getProfImg = async () => {
  //   const inputEl = inputRef.current;
  //   if (!inputEl) return;
  //   inputEl.value = "";

  //   inputEl.onchange = async () => {
  //     const files = inputEl.files;
  //     if (!files || files.length === 0) return;
  //     const file = files[0];

  //     try {
  //       // 클라우드에서 이미지 불러오기
  //       const res = await getImageUrl(file.name);
  //       const { imageUrl, fileName } = res.data;
  //       if (!imageUrl) {
  //         throw new Error("url을 받아오는데 실패하였습니다.");
  //       }
  //       // 클라우드에 이미지 넣기
  //       await putUrl(file, decodeURIComponent(imageUrl));
  //       setProImg(fileName);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };
  // };

  return (
    <div className="relative w-[9rem]">
      <img
        className="w-[8.5rem] h-[8.5rem] rounded-full aspect-square box-border object-cover"
        src={proImg}
        alt="프로필 이미지"
      />
      {changeProfile && (
        <div className="absolute bottom-0 right-0">
          <input
            type="file"
            id="profUpload"
            style={{ display: "none" }}
            onChange={getProImg}
            accept="image/*"
            ref={inputRef}
          />
          <div
            className="bg-gray12 w-[3rem] h-[3rem] rounded-full flex items-center justify-center"
            onClick={handleClick}
          >
            <Camera />
          </div>
        </div>
      )}
    </div>
  );
}
