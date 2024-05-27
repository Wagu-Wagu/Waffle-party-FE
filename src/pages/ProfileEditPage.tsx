import Header from "../components/Header/Header";
import CloseBtn from "../assets/icons/CloseIcon.svg?react";
import { useNavigate } from "react-router-dom";
import NickNameForm from "../components/NickNameForm";
import HeaderButton from "../components/Header/HeaderButton";
import { useRecoilValue } from "recoil";
import { userTokenState } from "../recoil/atoms";
import axios from "axios";

export default function ProfileEditPage() {
  const navigate = useNavigate();
  const userToken = useRecoilValue(userTokenState);

  console.log(userToken);

  const handleNicknameChange = async (nickname: string) => {
    try {
      console.log("닉네임 변경 제출:", nickname);
      console.log("토큰:", userToken.accessToken);

      const response = await axios.patch(
        `${import.meta.env.VITE_API_URI}/api/v1/user/nickName`,
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

      if (response.data.success) {
        return navigate("/mypage", { replace: true });
      }
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 400) {
          const errorMessage = error.response.data.message;
          if (errorMessage === "바꾸는 닉네임과 현재 닉네임이 일치합니다.") {
            alert("바꾸는 닉네임과 현재 닉네임이 일치합니다.");
          } else if (errorMessage === "이미 존재하는 유저명 입니다.") {
            alert("이미 존재하는 유저명 입니다.");
          } else if (errorMessage === "size must be between 1 and 8") {
            alert("닉네임은 1자 이상 8자 이하여야 합니다.");
          }
        } else {
          console.error("닉네임 변경 요청 중 에러 발생:", error.response.data);
        }
      } else {
        console.error("닉네임 변경 요청 중 에러 발생:", error.message);
      }
    }
  };

  return (
    <>
      <Header
        leftChild={
          <HeaderButton onClick={() => navigate(-1)}>
            <CloseBtn />
          </HeaderButton>
        }
        title="닉네임 수정"
      />
      <NickNameForm onSubmit={handleNicknameChange} />
    </>
  );
}
