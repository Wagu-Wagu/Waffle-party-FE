import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import HeaderButton from "../components/Header/HeaderButton";
import CloseIcon from "./../assets/icons/CloseIcon.svg?react";
import NickNameForm from "../components/NickNameForm";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userTokenState } from "../recoil/atoms";

export default function NicknamePage() {
  const nav = useNavigate();
  const userToken = useRecoilValue(userTokenState);

  console.log(userToken);

  const handleOnboardingSubmit = async (nickname: string) => {
    try {
      console.log("닉네임 제출:", nickname);
      0;
      console.log("토큰:", userToken.accessToken);

      const response = await axios.patch(
        `${import.meta.env.VITE_API_URI}/api/v1/user/onboard`,
        {
          nickName: nickname,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${userToken.accessToken}`,
          },
        },
      );

      console.log("응답 데이터:", response.data);

      if (response.data.success) return nav("/", { replace: true });
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 400) {
          const errorMessage = error.response.data.message;
          if (errorMessage === "유저 닉네임은 빈스트링 일 수 없습니다.") {
            alert("닉네임을 입력해야 합니다.");
          } else if (errorMessage === "이미 온보딩을 한 유저입니다.") {
            nav("/", { replace: true });
          }
        } else {
          console.error("온보딩 요청 중 에러 발생:", error.response.data);
        }
      } else {
        console.error("온보딩 요청 중 에러 발생:", error.message);
      }
    }
  };

  return (
    <>
      <Header
        leftChild={
          <HeaderButton onClick={() => nav("/", { replace: true })}>
            <CloseIcon />
          </HeaderButton>
        }
        title={"닉네임 등록"}
      />
      <NickNameForm onSubmit={handleOnboardingSubmit} />
    </>
  );
}
