import { useEffect, useRef } from "react";
import { getAccessToken } from "../lib/token";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const token = getAccessToken("accessToken");
  // 초기 렌더링인지 판별
  const isInitialRender = useRef(true);
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    if (!token) {
      window.alert("로그인 후 시도해주세요.");
    }
  }, [token]);
  return !token ? <Navigate to="/" /> : <Outlet />;
}
