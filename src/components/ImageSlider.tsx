import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Close from "../assets/icons/RoundClosed.svg?react";

interface sliderProps {
  images?: string[] | null;
  onClose: () => void;
}

function ImageSlider({ images, onClose }: sliderProps) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex),
  };

  console.log(images);

  // TODO
  const maxLen = images?.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="w-[50rem] h-[30rem] bg-cover bg-no-repeat bg-center">
      <div className="text-[1.6rem] font-medium leading-[2.4rem] absolute top-0 z-10 p-2 text-white transform -translate-x-1/2 left-1/2">
        <span className="text-white">{currentSlide + 1}</span>
        <span>&nbsp;/&nbsp;</span>
        <span className="text-gray9">{maxLen}</span>
      </div>
      <Slider className="w-full h-full" {...settings}>
        {images?.map((url: string, index: number) => (
          <img
            className="object-cover w-full h-[30rem]"
            src={url}
            key={index}
            alt="슬라이드 이미지"
          />
        ))}
      </Slider>
      {/* TODO 디자인 확정 나면 수정 */}
      <div
        className="absolute bottom-[8rem] left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={onClose}
      >
        <Close />
      </div>
    </div>
  );
}

export default ImageSlider;
