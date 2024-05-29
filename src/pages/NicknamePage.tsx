import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import HeaderButton from "../components/Header/HeaderButton";
import CloseIcon from "./../assets/icons/CloseIcon.svg?react";
import NickNameForm from "../components/NickNameForm";
import { patchOnBoard } from "../lib/api/profile";
import { onBoardDto } from "../lib/api/dto/user.dto";

export default function NicknamePage() {
  const nav = useNavigate();
  const param = new onBoardDto();

  const handleOnboardingSubmit = async (nickname: string) => {
    param.nickName = nickname;
    await patchOnBoard(param, nav);
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
