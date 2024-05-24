import { postDetail } from "../types/postDetail";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { userToken } from "../types/userToken";

const { persistAtom } = recoilPersist();

export const postDetailState = atom<postDetail>({
  key: "postDetail",
  default: {
    ottTag: "",
    title: "",
    content: "",
    postImages: null,
  },
  effects_UNSTABLE: [persistAtom],
});

export const userTokenState = atom<userToken>({
  key: "userToken",
  default: {
    accessToken: "",
    refreshToken: "",
  },
  effects_UNSTABLE: [persistAtom],
});
