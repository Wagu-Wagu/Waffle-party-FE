import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RecoilRoot } from "recoil";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostCreatePage from "./pages/PostCreatePage";
import PostDetailPage from "./pages/PostDetailPage";
import PostEditPage from "./pages/PostEditPage";
import NotificationsPage from "./pages/NotificationsPage";
import MyPage from "./pages/MyPage";
import ProfileEditPage from "./pages/ProfileEditPage";
import TermsPage from "./pages/TermsPage";
import MyCommentsPage from "./pages/MyCommentsPage";
import MyPostsPage from "./pages/MyPostsPage";
import NicknamePage from "./pages/NicknamePage";
import { KakaoCallback } from "./pages/KakaoCallback";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

export default function Router() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          {/* 로그인/회원가입 */}
          <Route path="/login" element={<LoginPage />} />
          {/* 서비스 이용 약관 페이지 */}
          <Route path="/terms" element={<TermsPage />} />
          {/* 개인 정보 처리 방침 페이지 */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          {/* 닉네임 설정 페이지 */}
          <Route path="/nickname" element={<NicknamePage />} />
          {/* 카카오 로그인 콜백 */}
          <Route path="/login/kakao/callback" element={<KakaoCallback />} />

          {/* 홈 */}
          <Route path="/" element={<HomePage />} />
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
          <Route path="/mypage/post/:userId" element={<MyPostsPage />} />
          {/* 내가 작성한 댓글 페이지 */}
          <Route path="/mypage/comment/:userId" element={<MyCommentsPage />} />

          {/* 그 외 경로는 홈으로 리디렉트 */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}
