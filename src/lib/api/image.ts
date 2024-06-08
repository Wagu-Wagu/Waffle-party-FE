import { getAccessToken } from "../token";
import { client } from "../axios";

export const postUrl = async (file: File[]) => {
  const formData = new FormData();
  try {
    if (file) {
      for (let i = 0; i < file.length; i++) {
        formData.append("postImages", file[i], file[i].name);
      }
    }
    const token = getAccessToken("accessToken");
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      },
    };
    // POST 요청 보내기
    const { data } = await client.post("/api/v1/post/images", formData, config);

    return data;
  } catch (e) {
    console.error(e);
  }
};
