import Header from "../components/Header/Header";
import CloseBtn from "../assets/icons/CloseIcon.svg?react";
import { useNavigate } from "react-router-dom";
import NickNameForm from "../components/NickNameForm";
import HeaderButton from "../components/Header/HeaderButton";

export default function ProfileEditPage() {
  const navigate = useNavigate();

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
      <NickNameForm />
    </>
  );
}
