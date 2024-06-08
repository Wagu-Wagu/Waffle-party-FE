export default function checkValidation(nickname: string): {
  success: boolean;
  message: string;
  value: string;
} {
  const regex = /^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]*$/;
  if (!regex.test(nickname)) {
    return {
      success: false,
      message: "닉네임은 영문, 한글, 숫자만 허용됩니다.",
      value: nickname,
    };
  }

  if (nickname.length < 1) {
    return {
      success: false,
      message: "닉네임은 한 글자 이상이어야 합니다.",
      value: nickname,
    };
  }

  return {
    success: true,
    message: "사용 가능한 닉네임입니다.",
    value: nickname,
  };
}
