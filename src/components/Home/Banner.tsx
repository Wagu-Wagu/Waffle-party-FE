import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./../../styles/homeCustomSlick.css";
import HeroImage01 from "../../assets/image/HeroImage01.png";
import HeroImage02 from "../../assets/image/HeroImage02.png";
import LazyLoad from "react-lazyload";

const bannerImages = [
  {
    src: HeroImage01,
    link: "https://www.notion.so/wisesky915/646dbbafa5ef4e8d9dd7dcbfd95e84eb",
  },
  {
    src: HeroImage02,
    link: "https://www.notion.so/wisesky915/ca41968629b048d6b44383543897620c",
  },
];

export default function Banner() {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    swipe: true,
    touchMove: true,
    arrows: false,
    draggable: true,
  };

  return (
    <div className="relative custom-slick">
      <Slider {...settings} className="h-[15rem]">
        {bannerImages.map((image, index) => (
          <a
            href={image.link}
            target="_blank"
            key={index}
            className="h-[15rem] overflow-hidden"
          >
            <LazyLoad>
              <img
                src={image.src}
                alt={`banner-${index}`}
                className="object-cover object-center w-full h-[15rem]"
              />
            </LazyLoad>
          </a>
        ))}
      </Slider>
    </div>
  );
}
