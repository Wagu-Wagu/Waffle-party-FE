import Slider from "react-slick";
import Chip from "../common/Chip";
import { useEffect, useRef, useState } from "react";

const ottList = [
  "넷플릭스",
  "왓챠",
  "디즈니+",
  "웨이브",
  "티빙",
  "쿠팡플레이",
  "라프텔",
  "네이버시리즈",
  "기타",
];

interface FilterListProps {
  onOttSelect: (ott: string) => void;
  selectedOtts: string[];
}

export default function FilterList({
  onOttSelect,
  selectedOtts,
}: FilterListProps) {
  const filterListRef = useRef<HTMLDivElement>(null);
  const [fixedStyle, setFixedStyle] = useState({});

  const settings = {
    infinite: false,
    variableWidth: true,
    cssEase: "ease-in-out",
    speed: 500,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 100,
    edgeFriction: 0.15,
    arrows: false,
  };

  const sortedOttList = [...ottList].sort((a, b) => {
    if (selectedOtts.includes(a) && !selectedOtts.includes(b)) {
      return -1;
    }
    if (!selectedOtts.includes(a) && selectedOtts.includes(b)) {
      return 1;
    }
    return 0;
  });

  const handleChipClick = (ott: string) => {
    onOttSelect(ott);
  };

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = 150;
      const headerHeight = 46;
      const filterList = filterListRef.current;
      const layout = filterList?.parentElement;

      const scrollTop = window.scrollY;
      const maxScroll = bannerHeight + headerHeight;

      if (scrollTop >= maxScroll && layout) {
        const layoutRect = layout.getBoundingClientRect();
        setFixedStyle({
          position: "fixed",
          top: `${headerHeight}px`,
          left: `${layoutRect.left}px`,
          width: `${layoutRect.width}px`,
          zIndex: 1000,
          paddingLeft: "2rem",
          paddingRight: "2rem",
        });
      } else {
        setFixedStyle({});
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={filterListRef}
      style={fixedStyle}
      className="bg-gray15 py-[1.5rem] px-[2rem]"
    >
      <Slider {...settings} className="z-10">
        {sortedOttList.map((ott) => (
          <div className="mr-[0.8rem]" key={ott}>
            <Chip
              ott={ott}
              isButton
              isCheck={selectedOtts.includes(ott)}
              onClick={() => handleChipClick(ott)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
