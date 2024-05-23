import { client } from "../axios";
import { setUserSession } from "../token";
import { LoginDto } from "./dto/login.dto";

export const postLogin = async (param: LoginDto) => {
  try {
    const { data } = await client.post("/api/v1/auth/login", param);
    console.log(data);
    if (data.data) {
      setUserSession(data.data.accessToken);
    }
    return data;
  } catch (e) {
    console.error(e);
  }
};
