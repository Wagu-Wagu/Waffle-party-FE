import { useEffect, useState, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { getAccessToken } from "../lib/token";
import { getUserOnBoard } from "../lib/api/login";

export default function PrivateRoute() {
  const isInitialRender = useRef(true);
  const navigate = useNavigate();
  const location = useLocation();
  const token = getAccessToken("accessToken");
  const [isUserOnBoarded, setIsUserOnBoarded] = useState(null); // 초기 상태를 null로 설정
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    const checkUserStatus = async () => {
      if (token) {
        const onBoarded = await getUserOnBoard();
        setIsUserOnBoarded(onBoarded);
      }
      setLoading(false); // 로딩 완료
    };

    checkUserStatus();
  }, [token]);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    if (loading) return; // 로딩 중이면 아무 것도 하지 않음

    if (!token) {
      window.alert("로그인 후 시도해주세요.");
      navigate("/login");
    } else if (!isUserOnBoarded && location.pathname !== "/nickname") {
      window.alert("온보딩 후 시도해주세요.");
      navigate("/nickname");
    }
  }, [loading, token, isUserOnBoarded, navigate]);

  if (loading) {
    return <div>Loading...</div>; // 로딩 상태를 보여주는 컴포넌트
  }

  return <Outlet />;
}
