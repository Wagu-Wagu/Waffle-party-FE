import { client } from "../axios";
import { getAccessToken, setUserSession } from "../token";

export const patchProfileImage = async (file: File | null) => {
  try {
    const formData = new FormData();

    if (file) {
      formData.append("userImage", file, file.name);
    } else {
      // 빈 파일을 추가하여 빈 리스트로 처리
      formData.append("userImage", new Blob(), "");
    }
    const token = getAccessToken("accessToken");

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      },
    };

    const { data } = await client.patch("/api/v1/user/image", formData, config);
    if (data.data) {
      setUserSession(data.data.accessToken);
    }
    return data;
  } catch (e) {
    console.error(e);
  }
};
