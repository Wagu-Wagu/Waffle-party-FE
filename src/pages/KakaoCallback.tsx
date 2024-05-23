import { useEffect, useRef } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getAccessToken, setUserSession } from "../lib/token";
import { client } from "../lib/axios";

const KakaoCallback = () => {
  const nav = useNavigate();
  const hasFetchedToken = useRef(false);

  useEffect(() => {
    if (hasFetchedToken.current) return;
    hasFetchedToken.current = true;

    const params = new URLSearchParams(location.search);
    const code = params.get("code");
    const GRAINT_TYPE = "authorization_code";
    const client_id = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const redirect_uri = "http://localhost:5173/login/kakao/callback";
    const postUrl = "https://kauth.kakao.com/oauth/token";

    const getToken = async () => {
      if (!code) {
        console.error("인증 코드를 찾을 수 없음");
        return;
      }

      try {
        const response = await axios.post(
          postUrl,
          new URLSearchParams({
            grant_type: GRAINT_TYPE,
            client_id,
            redirect_uri,
            code,
          }).toString(),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          },
        );

        const { access_token } = response.data;
        console.log("액세스 토큰:", access_token);

        setUserSession(access_token);

        const storedAccessToken = getAccessToken("accessToken");
        console.log("저장된 액세스 토큰:", storedAccessToken);

        /* // api 확정시 엔드포인트 수정해야 함
        const backendResponse = await client.post("/api/auth/kakao", {
          token: storedAccessToken,
          providerType: "KAKAO",
        });

        console.log("백엔드 응답:", backendResponse.data);
        nav("/nickname", { replace: true }); */
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error("Axios 에러 응답:", error.response?.data);
        } else {
          console.error("알 수 없는 에러:", error);
        }
      }
    };

    getToken();
  }, [nav]);

  return <div>로그인 처리 중...</div>;
};

export default KakaoCallback;
