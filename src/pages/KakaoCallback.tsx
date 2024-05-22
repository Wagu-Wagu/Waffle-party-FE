import { useEffect } from "react";

import axios from "axios";

const KakaoCallback = () => {
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");
    const GRAINT_TYPE = "authorization_code";
    const client_id = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const redirect_uri = "http://localhost:5173/login/kakao/callback";
    const postUrl = "https://kauth.kakao.com/oauth/token";

    const getToken = async () => {
      try {
        const response = await axios.post(
          postUrl,
          {
            grant_type: GRAINT_TYPE,
            client_id,
            redirect_uri,
            code,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          },
        );

        console.log("액세스 토큰:", response);
      } catch (error) {
        console.error("에러:", error);
      }
    };

    getToken();
  }, []);

  return <div>로그인 처리 중...</div>;
};

export default KakaoCallback;
