import Slider from "react-slick";
import Chip from "../common/Chip";

const ottList = [
  "넷플릭스",
  "웨이브",
  "티빙",
  "왓챠",
  "디즈니+",
  "OTT6",
  "OTT7",
  "OTT8",
  "OTT9",
  "OTT10",
];

interface FilterListProps {
  onOttSelect: (ott: string) => void;
  selectedOtts: string[];
}

export default function FilterList({
  onOttSelect,
  selectedOtts,
}: FilterListProps) {
  const settings = {
    infinite: false,
    variableWidth: true,
    cssEase: "ease-in-out",
    speed: 500,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 100,
    edgeFriction: 0.15,
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

  return (
    <Slider {...settings} className="px-8 py-6 bg-gray15">
      {sortedOttList.map((ott) => (
        <div className="mr-[0.8rem]">
          <Chip
            key={ott}
            ott={ott}
            isButton
            isCheck={selectedOtts.includes(ott)}
            onClick={() => onOttSelect(ott)}
          />
        </div>
      ))}
    </Slider>
  );
}
