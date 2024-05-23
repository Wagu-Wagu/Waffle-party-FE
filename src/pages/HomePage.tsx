import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import HeaderLoginButton from "../components/Header/HeaderLoginButton";
import FilterList from "../components/Home/FilterList";
import PostListCard from "../components/Home/PostListCard";
import Navigation from "../components/Navigation/Navigation";
import LogoYellow from "./../assets/icons/LogoYellow.svg?react";
import Banner from "../components/Home/Banner";
import { useRecoilState, useRecoilValue } from "recoil";
import { sortedPostListState } from "../recoil/postListState";
import { userState } from "../recoil/userState";
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "../lib/token";
import HeaderButton from "../components/Header/HeaderButton";
import ProfileIcon from "./../assets/icons/ProfileIcon.svg?react";
import { classNames } from "classnames";

export default function HomePage() {
  const [selectedOtts, setSelectedOtts] = useState<string[]>([]);
  const [user, setUser] = useRecoilState(userState);
  const postList = useRecoilValue(sortedPostListState);
  const nav = useNavigate();

  useEffect(() => {
    const token = getAccessToken("accessToken");
    if (token) {
      setUser({ isLoggedIn: true, accessToken: token });
    }
  }, [setUser]);

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
        rightChild={
          user.isLoggedIn ? (
            <HeaderButton className="text-gray9" onClick={() => nav("/mypage")}>
              <ProfileIcon />
            </HeaderButton>
          ) : (
            <HeaderLoginButton />
          )
        }
        noBorder
      />
      <Navigation />
      <main className="main-header-nav">
        <Banner />
        <FilterList onOttSelect={handleOttSelect} selectedOtts={selectedOtts} />
        {filteredPostList?.map((post) => (
          <PostListCard key={post.postId} post={post} />
        ))}
      </main>
    </>
  );
}
