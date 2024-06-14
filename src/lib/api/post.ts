import { client } from "../axios";
import { getAccessToken, setUserSession } from "../token";
import { PostCreateDto, PostEditDto } from "./dto/post.dto";

/**
 * 게시글 생성
 * @param param
 * @returns
 */
export const postCreate = async (param: PostCreateDto) => {
  try {
    const formData = new FormData();
    if (param.ottTag !== undefined) {
      formData.append("ottTag", param.ottTag);
    }
    if (param.title !== undefined) {
      formData.append("title", param.title);
    }
    if (param.content !== undefined) {
      formData.append("content", param.content);
    }

    if (param.postImages && param.postImages.length > 0) {
      for (let i = 0; i < param.postImages.length; i++) {
        formData.append(
          "postImages",
          param.postImages[i],
          param.postImages[i].name,
        );
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

/**
 * 게시글 수정
 * @param param
 * @returns
 */
export const postEdit = async (param: PostEditDto) => {
  try {
    // POST 요청 보내기
    const { data } = await client.patch("/api/v1/post", param);
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
};

/**
 * 게시글 삭제
 * @param postId
 * @returns
 */
export const postDelete = async (postId: number) => {
  try {
    // POST 요청 보내기
    const { data } = await client.delete(`/api/v1/post/${+postId}`);
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
};
