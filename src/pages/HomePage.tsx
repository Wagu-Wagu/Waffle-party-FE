import { useState } from "react";
import Header from "../components/Header/Header";
import HeaderLoginButton from "../components/Header/HeaderLoginButton";
import FilterList from "../components/Home/FilterList";
import PostListCard from "../components/Home/PostListCard";
import Navigation from "../components/Navigation/Navigation";
import LogoYellow from "./../assets/icons/LogoYellow.svg?react";

export const PostList = [
  {
    id: 1,
    ott: "티빙",
    title: "여고추리반3 보실 분",
    content:
      "무서운 저주가 떠도는 학교로 전학 간 추리반 학생들이 학교에 숨겨진 진실에 다가갈수록 더욱더 거대한 사건을 마주하면서 벌어지는 미스터리 어드벤처 여고추리반3 같이 봐요!",
    thumbnail:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fditto-phinf.pstatic.net%2F20240405_208%2F1712296500539nVxqY_JPEG%2F660f9233b8c2545456c85fd6.jpg&type=o&size=472x472&ttype=input",
    writer: "와플중독자",
    date: "2024.5.18",
    comments: 26,
  },
  {
    id: 2,
    ott: "넷플릭스",
    title:
      "와플맨의 3650가지 비밀 - 반죽의 황금비율과 소비자의 충동구매를 부추길 수 있는 요소들, 장인만의 떼돈 버는 특급 비법 그 어딘가를 찾아서 같이 보실 분",
    content:
      "와플장사로 제 2의 인생을 살아보려고 하는데, 같이 보실 자영업자 사장님들 구합니다.",
    thumbnail: "",
    writer: "와플입문자",
    date: "2024.5.19",
    comments: 30,
  },
  {
    id: 3,
    ott: "티빙",
    title: "여고추리반 시즌 1부터 시즌 3까지 함께 달려요! (스포 절대 금지)",
    content: "스포 싫어요ㅜㅜ",
    thumbnail:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fditto-phinf.pstatic.net%2F20240405_208%2F1712296500539nVxqY_JPEG%2F660f9233b8c2545456c85fd6.jpg&type=o&size=472x472&ttype=input",
    writer: "추리중독자",
    date: "2024.5.20",
    comments: 3,
  },
  {
    id: 4,
    ott: "웨이브",
    title: "윌터의 상상은 현실이 된다.",
    content: "제 상상도 현실이 되었으면 좋겠네요. 같이 보실 분?",
    thumbnail: "",
    writer: "공상가",
    date: "2024.5.21",
    comments: 5,
  },
  {
    id: 5,
    ott: "웨이브",
    title: "윌터의 상상은 현실이 된다.",
    content: "제 상상도 현실이 되었으면 좋겠네요. 같이 보실 분?",
    thumbnail: "",
    writer: "공상가",
    date: "2024.5.21",
    comments: 5,
  },
  {
    id: 6,
    ott: "웨이브",
    title: "윌터의 상상은 현실이 된다.",
    content: "제 상상도 현실이 되었으면 좋겠네요. 같이 보실 분?",
    thumbnail: "",
    writer: "공상가",
    date: "2024.5.21",
    comments: 5,
  },
  {
    id: 7,
    ott: "웨이브",
    title: "윌터의 상상은 현실이 된다.",
    content: "제 상상도 현실이 되었으면 좋겠네요. 같이 보실 분?",
    thumbnail: "",
    writer: "공상가",
    date: "2024.5.21",
    comments: 5,
  },
  {
    id: 8,
    ott: "웨이브",
    title: "윌터의 상상은 현실이 된다.",
    content: "제 상상도 현실이 되었으면 좋겠네요. 같이 보실 분?",
    thumbnail: "",
    writer: "공상가",
    date: "2024.5.21",
    comments: 5,
  },
  {
    id: 9,
    ott: "웨이브",
    title: "윌터의 상상은 현실이 된다.",
    content: "제 상상도 현실이 되었으면 좋겠네요. 같이 보실 분?",
    thumbnail: "",
    writer: "공상가",
    date: "2024.5.21",
    comments: 5,
  },
  {
    id: 10,
    ott: "웨이브",
    title: "윌터의 상상은 현실이 된다.",
    content: "제 상상도 현실이 되었으면 좋겠네요. 같이 보실 분?",
    thumbnail: "",
    writer: "공상가",
    date: "2024.5.21",
    comments: 5,
  },
];

export default function HomePage() {
  const [selectedOtts, setSelectedOtts] = useState<string[]>([]);

  const handleOttSelect = (ott: string) => {
    setSelectedOtts((prevSelectedOtts) =>
      prevSelectedOtts.includes(ott)
        ? prevSelectedOtts.filter((item) => item !== ott)
        : [...prevSelectedOtts, ott],
    );
  };

  const filteredPostList =
    selectedOtts.length > 0
      ? PostList.filter((post) => selectedOtts.includes(post.ott))
      : PostList;

  return (
    <>
      <Header
        leftChild={
          <h1
            aria-label="Waffle Party"
            className="max-w-[8rem] max-h-[2.4rem] overflow-hidden flex items-center justify-center"
          >
            <div className="flex items-center justify-center w-full h-full">
              <LogoYellow />
            </div>
          </h1>
        }
        rightChild={<HeaderLoginButton />}
        noBorder
      />
      <main className="h-screen-minus-12.8">
        {/* 배너 */}

        {/* 필터 목록 */}
        <FilterList onOttSelect={handleOttSelect} selectedOtts={selectedOtts} />

        {/* 게시글 목록 */}
        {filteredPostList.map((post) => (
          <PostListCard key={post.id} post={post} />
        ))}
      </main>
      <Navigation />
    </>
  );
}
