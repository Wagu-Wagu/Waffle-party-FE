import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { userProfileType } from "../types/userProfile";

const { persistAtom } = recoilPersist();

export const userProfileState = atom<userProfileType>({
  key: "userProfile",
  default: {
    userId: "",
    nickname: "",
    kakaoId: "",
    profileImage: null,
  },
  effects_UNSTABLE: [persistAtom],
});
