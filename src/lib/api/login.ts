import { client } from "../axios";
import { setUserSession } from "../token";
import { LoginDto } from "./dto/login.dto";

export const postLogin = async (param: LoginDto) => {
  try {
    const { data } = await client.post("/api/v1/auth/login", param);
    if (data.data) {
      setUserSession(data.data.accessToken);
    }
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getUserOnBoard = async () => {
  try {
    const { data } = await client.get("/api/v1/user/isOnboard");
    if (data.data) {
      return data;
    }
    return data;
  } catch (e) {
    console.error(e);
  }
};
