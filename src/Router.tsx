import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import OnBoardingPage from "./pages/OnBoardingPage";
import PostCreatePage from "./pages/PostCreatePage";
import PostDetailPage from "./pages/PostDetailPage";
import PostEditPage from "./pages/PostEditPage";
import NotificationsPage from "./pages/NotificationsPage";
import MyPage from "./pages/MyPage";
import ProfileEditPage from "./pages/ProfileEditPage";
import TermsPage from "./pages/TermsPage";
import AccountDeletePage from "./pages/AccountDeletePage";
import MyCommentsPage from "./pages/MyCommentsPage";
import MyPostsPage from "./pages/MyPostsPage";

export default function Router() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          {/* 온보딩 */}
          <Route path="/onboarding" element={<OnBoardingPage />} />
          {/* 회원가입 */}
          <Route path="/signup" element={<SignUpPage />} />
          {/* 로그인 */}
          <Route path="/login" element={<LoginPage />} />

          {/* 홈 */}
          <Route path="/" element={<HomePage />} />
          {/* TODO 검색 페이지
          <Route path="/search" element={} /> */}
          {/* 게시글 작성 */}
          <Route path="/post-create" element={<PostCreatePage />} />
          {/* 게시글 상세 */}
          <Route path="/post-detail/:postId" element={<PostDetailPage />} />
          {/* 게시글 수정 */}
          <Route path="/post-edit/:postId" element={<PostEditPage />} />
          {/* 내 소식 */}
          <Route path="/notifications" element={<NotificationsPage />} />
          {/* 마이페이지 */}
          <Route path="/mypage" element={<MyPage />} />
          {/* 프로필 수정 */}
          <Route path="/profile/edit" element={<ProfileEditPage />} />
          {/* 내가 작성한 글 페이지 */}
          <Route path="/mypage/post" element={<MyPostsPage />} />
          {/* 내가 작성한 댓글 페이지 */}
          <Route path="/mypage/comment" element={<MyCommentsPage />} />
          {/* 약관 페이지 */}
          <Route path="/terms" element={<TermsPage />} />
          {/* 회원 탈퇴 */}
          <Route path="/account/delete" element={<AccountDeletePage />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}
