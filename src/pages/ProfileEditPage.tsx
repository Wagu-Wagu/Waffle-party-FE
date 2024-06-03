import Header from "../components/Header/Header";
import CloseBtn from "../assets/icons/CloseIcon.svg?react";
import { useNavigate } from "react-router-dom";
import NickNameForm from "../components/NickNameForm";
import HeaderButton from "../components/Header/HeaderButton";
import { nickNameDto } from "../lib/api/dto/user.dto";
import { patchNickName } from "../lib/api/profile";

export default function ProfileEditPage() {
  const navigate = useNavigate();
  const param = new nickNameDto();

  const handleNicknameChange = async (nickname: string) => {
    param.nickName = nickname;
    const res = await patchNickName(param);
    if (res.success) {
      navigate("/mypage");
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
