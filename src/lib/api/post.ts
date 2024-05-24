import { postDetail } from "../../types/postDetail";
import { client } from "../axios";
import { setUserSession } from "../token";

export const postCreate = async (param: postDetail) => {
  try {
    const formData = new FormData();
    formData.append("ottTag", param.ottTag);
    formData.append("title", param.title);
    formData.append("content", param.content);

    // Assuming imgSrc is an array of File objects
    param.postImages?.forEach((image, index) => {
      formData.append(`postImages[${index}]`, image);
    });
    console.log(formData);

    const { data } = await client.post("/api/v1/post", formData);
    console.log(data);
    if (data.data) {
      setUserSession(data.data.accessToken);
    }
    return data;
  } catch (e) {
    console.error(e);
  }
};
