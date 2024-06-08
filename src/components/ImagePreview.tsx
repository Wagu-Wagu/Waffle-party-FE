import React, { useState } from "react";
import FullImage from "./FullImage";
import Close from "../assets/icons/ImageDeleteButton.svg?react";

interface ImageUploaderProps {
  images: string[];
  isImageUploading?: boolean;
  onDelete?: (index: number) => void;
}

export default function ImageUploader(props: ImageUploaderProps) {
  const { images, isImageUploading, onDelete } = props;
  const [showFullImage, setShowFullImage] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  console.log(showFullImage);

  const handleImageClick = (src: string) => {
    setCurrentImage(src);
    setShowFullImage(true);
  };

  return (
    <div className="flex w-full gap-[1.2rem]">
      {images.map((src, index) => (
        <div
          className="h-[12rem] w-[12rem] relative rounded-[0.8rem]"
          key={index}
          onClick={() => handleImageClick(src)}
        >
          <img
            className="h-full rounded-[0.8rem] w-full object-cover"
            src={src}
            alt={`업로드 사진 ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          {isImageUploading && onDelete && (
            <>
              {/* 대표사진 */}
              {index === 0 && (
                <div className="absolute bottom-0 left-0 w-full h-[2.4rem] bg-neutral-700 rounded-b-[0.8rem] text-white text-[1.2rem] flex justify-center items-center">
                  대표사진
                </div>
              )}
              {/* 이미지 삭제 */}
              <div
                className="absolute top-0 right-0 p-[0.4rem]"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(index);
                }}
              >
                <Close />
              </div>
            </>
          )}
        </div>
      ))}

      {/* 이미지 전체 보기 */}
      {showFullImage && currentImage && (
        <FullImage
          image={currentImage}
          onClose={() => {
            setShowFullImage(false);
          }}
        />
      )}
    </div>
  );
}
