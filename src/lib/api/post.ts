import { postDetail } from "../../types/postDetail";
import { client } from "../axios";
import { setUserSession } from "../token";

export const postCreate = async (userId: number, param: postDetail) => {
  try {
    const { data } = await client.post(`/api/v1/post?userId=${userId}`, param);
    console.log(data);
    if (data.data) {
      setUserSession(data.data.accessToken);
    }
    return data;
  } catch (e) {
    console.error(e);
  }
};
