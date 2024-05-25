import { Blob } from "buffer";
import { postDetail } from "../../types/postDetail";
import { client, imgClient } from "../axios";
import { getAccessToken, setUserSession } from "../token";
import { blob } from "stream/consumers";

export const postCreate = async (param: postDetail) => {
  try {
    const formData = new FormData();
    formData.append("ottTag", param.ottTag);
    formData.append("title", param.title);
    formData.append("content", param.content);

    if (param.postImages?.length > 0) {
      for (let i = 0; i < param.postImages?.length; i++) {
        formData.append("profileImages", param.postImages[i]);
      }
    }

    // 토큰 설정
    const token = getAccessToken("accessToken");
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      },
    };

    // POST 요청 보내기
    const { data } = await client.post("/api/v1/post", formData, config);
    if (data.data) {
      setUserSession(data.data.accessToken);
    }
    return data;
  } catch (e) {
    console.error(e);
  }
};
