import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import HeaderLoginButton from "../components/Header/HeaderLoginButton";
import FilterList from "../components/Home/FilterList";
import PostListCard from "../components/card/PostListCard";
import Navigation from "../components/Navigation/Navigation";
import HomePageLogo from "./../assets/icons/HomePageLogo.svg?react";
import ProfileIcon from "./../assets/icons/ProfileIcon.svg?react";
import Banner from "../components/Home/Banner";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../lib/token";
import { useNavigate } from "react-router-dom";
import { userState } from "../recoil/userState";
import HeaderButton from "../components/Header/HeaderButton";
import useGetPostList from "../hooks/useGetPostList";
import { postListState } from "../recoil/postListState";

export default function HomePage() {
  const [selectedOtts, setSelectedOtts] = useState<string[]>([]);
  const [postList, setPostList] = useRecoilState(postListState);
  const [user, setUser] = useRecoilState(userState);
  const nav = useNavigate();

  // 사용자가 로그인했는지 확인하고 토큰 설정
  useEffect(() => {
    const token = getAccessToken("accessToken");
    if (token) {
      setUser({ isLoggedIn: true, accessToken: token });
    }
  }, [setUser]);

  // 체크된 ott 목록 업데이트 함수
  const handleOttSelect = (ott: string) => {
    setSelectedOtts((prevSelectedOtts) =>
      prevSelectedOtts.includes(ott)
        ? prevSelectedOtts.filter((item) => item !== ott)
        : [...prevSelectedOtts, ott],
    );
  };

  // 게시글 목록 가져오기
  const { postListData } = useGetPostList(selectedOtts);

  // 게시글 목록 recoil 상태 업데이트
  useEffect(() => {
    if (postListData) {
      setPostList(postListData);
    }
  }, [postListData]);

  return (
    <>
      <Header
        leftChild={
          <h1
            aria-label="Waffle Party"
            className="max-w-[12rem] max-h-[2.4rem] overflow-hidden flex items-center justify-center"
          >
            <div className="flex items-center justify-center w-full h-full">
              <HomePageLogo />
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
        {postList?.map(({ postVO }) => (
          <PostListCard key={postVO.postId} post={postVO} />
        ))}
      </main>
    </>
  );
}
