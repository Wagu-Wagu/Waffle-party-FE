import { useEffect, useRef } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoginDto } from "../lib/api/dto/login.dto";
import { postLogin } from "../lib/api/login";
import { useSetRecoilState } from "recoil";
import { userTokenState } from "../recoil/atoms";
import { setUserSession } from "../lib/token";

export const KakaoCallback = () => {
  const nav = useNavigate();
  const hasFetchedToken = useRef(false);
  const setUserToken = useSetRecoilState(userTokenState);

  useEffect(() => {
    if (hasFetchedToken.current) return;
    hasFetchedToken.current = true;

    const params = new URLSearchParams(location.search);
    const code = params.get("code");
    const GRAINT_TYPE = "authorization_code";
    const client_id = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY;
    const redirect_uri = import.meta.env.VITE_REDIRECT_URL;

    const getToken = async () => {
      if (!code) {
        console.error("인증 코드를 찾을 수 없음");
        return;
      }
      const params = new LoginDto();

      await axios
        .post(
          `https://kauth.kakao.com/oauth/token?grant_type=${GRAINT_TYPE}&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}`,
          {},
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          },
        )
        .then(async (res) => {
          if (res.data) {
            params.token = res.data.access_token;
            params.providerType = "KAKAO";
            setUserSession(res.data.access_token);
            await getUser(params);
          }
        })
        .catch((e) => console.error(e));
    };
    getToken();
  }, [nav]);

  const getUser = (params: LoginDto) => {
    postLogin(params)
      .then((res) => {
        if (res.data) {
          const tokenParams = {
            accessToken: res.data.accessToken,
            refreshToken: res.data.refreshToken,
          };
          setUserToken(tokenParams);
          nav("/nickname");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return <div>로그인 처리 중...</div>;
};
