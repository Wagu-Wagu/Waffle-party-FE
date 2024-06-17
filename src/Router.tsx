import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RecoilRoot } from "recoil";

const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const PostCreatePage = lazy(() => import("./pages/PostCreatePage"));
const PostDetailPage = lazy(() => import("./pages/PostDetailPage"));
const PostEditPage = lazy(() => import("./pages/PostEditPage"));
const NotificationsPage = lazy(() => import("./pages/NotificationsPage"));
const MyPage = lazy(() => import("./pages/MyPage"));
const ProfileEditPage = lazy(() => import("./pages/ProfileEditPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const MyCommentsPage = lazy(() => import("./pages/MyCommentsPage"));
const MyPostsPage = lazy(() => import("./pages/MyPostsPage"));
const NicknamePage = lazy(() => import("./pages/NicknamePage"));
const KakaoCallback = lazy(() => import("./pages/KakaoCallback"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const PublicRoute = lazy(() => import("./pages/PublicRoute"));
const PrivateRoute = lazy(() => import("./pages/PrivateRoute"));
const Loading = lazy(() => import("./components/Login/Loading"));

export default function Router() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post-detail/:postId" element={<PostDetailPage />} />
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/login/kakao/callback" element={<KakaoCallback />} />
              <Route path="/nickname" element={<NicknamePage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/post-create" element={<PostCreatePage />} />
              <Route path="/post-edit/:postId" element={<PostEditPage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/profile/edit" element={<ProfileEditPage />} />
              <Route path="/mypage/post/:userId" element={<MyPostsPage />} />
              <Route
                path="/mypage/comment/:userId"
                element={<MyCommentsPage />}
              />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </RecoilRoot>
    </BrowserRouter>
  );
}
