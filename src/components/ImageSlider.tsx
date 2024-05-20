import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface sliderProps {
  images?: string[] | null;
  onClose: () => void;
}

function ImageSlider({ images, onClose }: sliderProps) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
  };

  // TODO
  // const maxLen = images?.length;
  // const [len, setLen] = useState(1);

  return (
    <div className="w-[50rem] h-[30rem] bg-cover bg-no-repeat bg-center">
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
      <button onClick={onClose}>닫기</button>
    </div>
  );
}

export default ImageSlider;
