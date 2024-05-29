import { atom } from "recoil";
import { userToken } from "../types/userToken";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userState = atom({
  key: "userState",
  default: {
    isLoggedIn: false,
    accessToken: "",
  },
});

export const userTokenState = atom<userToken>({
  key: "userToken",
  default: {
    accessToken: "",
    refreshToken: "",
  },
  effects_UNSTABLE: [persistAtom],
});
