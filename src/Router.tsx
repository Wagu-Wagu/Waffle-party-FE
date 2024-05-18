import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import HomePage from "./pages/HomePage";

export default function Router() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          {/* 온보딩 */}
          <Route path="/onboarding" element={} />
          {/* 회원가입 */}
          <Route path="/signup" element={} />
          {/* 로그인 */}
          <Route path="/login" element={} />

          {/* 홈 */}
          <Route path="/" element={<HomePage />} />
          {/* TODO 검색 페이지
          <Route path="/search" element={} /> */}
          {/* 게시글 작성 */}
          <Route path="/post-create" element={} />
          {/* 게시글 상세 */}
          <Route path="/post-detail/:postId" element={} />
          {/* 게시글 수정 */}
          <Route path="/post-edit/:postId" element={} />
          {/* 내 소식 */}
          <Route path="/notifications" element={} />
          {/* 마이페이지 */}
          <Route path="/mypage" element={} />
          {/* 프로필 수정 */}
          <Route path="/profile/edit" element={} />
          {/* 내가 작성한 글 페이지 */}
          <Route path="/mypage/post" element={} />
          {/* 내가 작성한 댓글 페이지 */}
          <Route path="/mypage/comment" element={} />
          {/* 약관 페이지 */}
          <Route path="/terms" element={} />
          {/* 회원 탈퇴 */}
          <Route path="/account/delete" element={} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}
