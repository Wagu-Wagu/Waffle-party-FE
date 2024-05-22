import { useState } from "react";
import Header from "../components/Header/Header";
import HeaderLoginButton from "../components/Header/HeaderLoginButton";
import FilterList from "../components/Home/FilterList";
import PostListCard from "../components/Home/PostListCard";
import Navigation from "../components/Navigation/Navigation";
import LogoYellow from "./../assets/icons/LogoYellow.svg?react";
import Banner from "../components/Home/Banner";
import { PostList } from "../__mocks__/mockData";

export default function HomePage() {
  const [selectedOtts, setSelectedOtts] = useState<string[]>([]);
  const [postList, setPostList] = useState(PostList);

  const handleOttSelect = (ott: string) => {
    setSelectedOtts((prevSelectedOtts) =>
      prevSelectedOtts.includes(ott)
        ? prevSelectedOtts.filter((item) => item !== ott)
        : [...prevSelectedOtts, ott],
    );
  };

  const filteredPostList =
    selectedOtts.length > 0
      ? postList?.filter((post) => selectedOtts.includes(post.ottTag))
      : postList;

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
      <main className="main-header-nav">
        <Banner />
        <FilterList onOttSelect={handleOttSelect} selectedOtts={selectedOtts} />
        {filteredPostList?.map((post) => (
          <PostListCard key={post.postId} post={post} />
        ))}
      </main>
      <Navigation />
    </>
  );
}
