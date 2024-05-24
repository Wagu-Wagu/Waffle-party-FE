import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import HeaderLoginButton from "../components/Header/HeaderLoginButton";
import FilterList from "../components/Home/FilterList";
import PostListCard from "../components/Home/PostListCard";
import Navigation from "../components/Navigation/Navigation";
import LogoYellow from "./../assets/icons/LogoYellow.svg?react";
import ProfileIcon from "./../assets/icons/ProfileIcon.svg?react";
import Banner from "../components/Home/Banner";
import { useRecoilState, useRecoilValue } from "recoil";
import { sortedPostListState } from "../recoil/postListState";
import useSWR from "swr";
// import { Post } from "../mock/mockData";
import { waffleFetcher } from "../lib/axios";
import { AxiosResponse } from "axios";
import { getAccessToken } from "../lib/token";
import { useNavigate } from "react-router-dom";
import { userState } from "../recoil/userState";
import HeaderButton from "../components/Header/HeaderButton";

// PostVO 타입 정의
export interface PostVO {
  ottTag: string;
  title: string;
  content: string;
  photoes: any[];
  nickName: string;
  createdAt: string;
  commentCount: number;
  thumbNail: string | null;
}

// Post 타입 정의
export interface Post {
  postVO: PostVO;
}

export default function HomePage() {
  const [selectedOtts, setSelectedOtts] = useState<string[]>([]);
  const [user, setUser] = useRecoilState(userState);
  const postList = useRecoilValue(sortedPostListState);
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
  // api 호출
  const { data, error } = useSWR<AxiosResponse<Post[]>>(
    `api/v1/post?ottTags=${selectedOtts.join(",")}`,
    waffleFetcher,
  );

  // 선택된 ott 태그에 따라 포스트 목록 필터링(더미)
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
        {/* 필터링 된 포스트 리스트(더미) */}
        {/* {filteredPostList?.map((post) => (
          <PostListCard key={post.postId} post={post} />
        ))} */}

        {/* api요청으로 받아온 데이터 리스트 */}
        {data?.data.map(({ postVO }) => (
          <PostListCard key={postVO.createdAt} post={postVO} />
        ))}
        {/* {data?.data.map((post) => (
          <PostListCard key={post.postId} post={post} />
        ))} */}
      </main>
    </>
  );
}
