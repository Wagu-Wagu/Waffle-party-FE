import { postDetail } from "../../types/postDetail";
import { client } from "../axios";
import { getAccessToken, setUserSession } from "../token";

export const postCreate = async (param: postDetail, files: File[] | null) => {
  try {
    const formData = new FormData();
    formData.append("ottTag", param.ottTag);
    formData.append("title", param.title);
    formData.append("content", param.content);

    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        formData.append("postImages", files[i], files[i].name);
      }
    } else {
      // 빈 파일을 추가하여 빈 리스트로 처리
      formData.append("postImages", new Blob(), "");
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
