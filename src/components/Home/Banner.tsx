import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./../../styles/homeCustomSlick.css";

const bannerImages = [
  "https://image.tving.com/ntgs/operation/banner/2024/05/19/1716078320_1.jpg/dims/resize/F_webp,1920",
  "https://search.pstatic.net/common/?src=https%3A%2F%2Fditto-phinf.pstatic.net%2F20240405_208%2F1712296500539nVxqY_JPEG%2F660f9233b8c2545456c85fd6.jpg&type=o&size=472x472&ttype=input",
  "https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231030/0505/P000643144.jpg/dims/resize/F_webp,400",
];

export default function Banner() {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    swipe: false,
    touchMove: false,
  };

  return (
    <div className="relative custom-slick">
      <Slider {...settings} className="h-[15rem]">
        {bannerImages.map((image, index) => (
          <div key={index} className="h-[15rem] overflow-hidden">
            <img
              src={image}
              alt={`banner-${index}`}
              className="object-cover object-center w-full h-[15rem]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
