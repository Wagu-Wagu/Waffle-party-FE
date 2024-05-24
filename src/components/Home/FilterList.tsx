import Slider from "react-slick";
import Chip from "../common/Chip";
import { useEffect, useRef, useState } from "react";

const ottTags = {
  NETFLIX: "넷플릭스",
  WATCHA: "왓챠",
  DISNEY: "디즈니+",
  WAVE: "웨이브",
  TIVING: "티빙",
  COUPANGPLAY: "쿠팡플레이",
  LAFTEL: "라프텔",
  NAVERSERIES: "네이버시리즈",
  ETC: "기타",
};

// ottList의 value를 배열로 변환
const ottList = Object.values(ottTags);

// 한글 값을 영어 키 값으로 변환하는 객체
const ottTagsReverse = Object.fromEntries(
  Object.entries(ottTags).map(([key, value]) => [value, key]),
);

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
    if (
      selectedOtts.includes(ottTagsReverse[a]) &&
      !selectedOtts.includes(ottTagsReverse[b])
    ) {
      return -1;
    }
    if (
      !selectedOtts.includes(ottTagsReverse[a]) &&
      selectedOtts.includes(ottTagsReverse[b])
    ) {
      return 1;
    }
    return 0;
  });

  const handleChipClick = (ott: string) => {
    const englishKey = ottTagsReverse[ott]; // 한글 값을 영어 키 값으로 변환
    onOttSelect(englishKey); // 영어 키 값을 HomePage로 전달
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
      <Slider {...settings}>
        {sortedOttList.map((ott) => (
          <div className="mr-[0.8rem]" key={ott}>
            <Chip
              ott={ott}
              isButton
              isCheck={selectedOtts.includes(ottTagsReverse[ott])} // 한글 값을 영어 키 값으로 변환하여 비교
              onClick={() => handleChipClick(ott)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
