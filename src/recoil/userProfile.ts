import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { userProfileType } from "../types/userProfile";

const { persistAtom } = recoilPersist();

export const userProfileState = atom<userProfileType>({
  key: "userProfile",
  default: {
    userId: 1,
    nickname: "",
    kakaoId: "",
    userImage: null,
  },
  effects_UNSTABLE: [persistAtom],
});
