import { useState, useEffect, forwardRef } from "react";
import profile from "../../assets/icons/profile.svg";
import Camera from "../../assets/icons/Camera.svg?react";

interface ProfileImageProps {
  imageSrc: string | null;
  onClick: () => void;
  onSelect: (src: string) => void;
}

const ProfileImageUploader = forwardRef<HTMLInputElement, ProfileImageProps>(
  (props, ref) => {
    const { imageSrc, onClick, onSelect } = props;
    const [proImg, setProImg] = useState(imageSrc ?? profile);

    useEffect(() => {
      setProImg(imageSrc ?? profile);
    }, [imageSrc]);

    const getProImg = () => {
      const inputEl = ref as React.RefObject<HTMLInputElement>;
      if (!inputEl.current) return;
      const files = inputEl.current.files;
      if (!files || files.length === 0) return;
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          onSelect(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    };

    return (
      <div className="relative w-[5.9rem]">
        <img
          className="w-[5.9rem] h-[5.9rem] rounded-full aspect-square box-border object-cover"
          src={proImg}
          alt="프로필 이미지"
        />

        <div className="absolute bottom-0 right-0">
          <input
            type="file"
            id="profUpload"
            style={{ display: "none" }}
            onChange={getProImg}
            accept="image/*"
            ref={ref}
          />
          <div
            className="bg-gray12 w-[2.3rem] h-[2.3rem] rounded-full flex items-center justify-center"
            onClick={onClick}
          >
            <Camera />
          </div>
        </div>
      </div>
    );
  },
);

export default ProfileImageUploader;
