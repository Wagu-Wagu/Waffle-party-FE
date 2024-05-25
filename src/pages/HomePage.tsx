import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import HeaderLoginButton from "../components/Header/HeaderLoginButton";
import FilterList from "../components/Home/FilterList";
import PostListCard from "../components/Home/PostListCard";
import Navigation from "../components/Navigation/Navigation";
import HomePageLogo from "./../assets/icons/HomePageLogo.svg?react";
import ProfileIcon from "./../assets/icons/ProfileIcon.svg?react";
import Banner from "../components/Home/Banner";
import { useRecoilState } from "recoil";
import useSWR from "swr";
import { waffleFetcher } from "../lib/axios";
import { AxiosResponse } from "axios";
import { getAccessToken } from "../lib/token";
import { useNavigate } from "react-router-dom";
import { userState } from "../recoil/userState";
import HeaderButton from "../components/Header/HeaderButton";
import { Post } from "../types/ottPost";

// Post 타입 정의

// API 응답 타입 정의
interface PostResponse {
  postVO: Post;
}

export default function HomePage() {
  const [selectedOtts, setSelectedOtts] = useState<string[]>([]);
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

  const { data } = useSWR<AxiosResponse<PostResponse[]>>(
    `api/v1/post?ottTags=${selectedOtts.join(",")}`,
    waffleFetcher,
  );

  return (
    <>
      <Header
        leftChild={
          <h1
            aria-label="Waffle Party"
            className="max-w-[8rem] max-h-[2.4rem] overflow-hidden flex items-center justify-center"
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
        {data?.data.map(({ postVO }) => (
          <PostListCard key={postVO.createdAt} post={postVO} />
        ))}
      </main>
    </>
  );
}
