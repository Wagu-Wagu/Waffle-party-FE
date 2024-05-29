import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import {
  userCommentType,
  userInfoType,
  userPostType,
  userProfileType,
} from "../types/userProfile";

const { persistAtom } = recoilPersist();

/**
 * mypage state
 */
export const userProfileState = atom<userProfileType>({
  key: "userProfile",
  default: {
    userInfo: {
      userId: 0,
      userImage: "",
      nickName: "",
      email: "",
      postCount: 0,
      commentCount: 0,
    },
    waguVersion: "0",
  },
  effects_UNSTABLE: [persistAtom],
});

/**
 * userInfo state
 */
export const userInfoState = atom<userInfoType>({
  key: "userInfo",
  default: {
    userId: 0,
    userImage: "",
    nickName: "",
    email: "",
    postCount: 0,
    commentCount: 0,
  },
  effects_UNSTABLE: [persistAtom],
});

/**
 * 작성한 글 state
 */
export const userPostState = atom<userPostType[]>({
  key: "userPost",
  default: [
    {
      authorNickName: "",
      commentCount: 0,
      createdAt: "",
      ottTag: "",
      postContent: "",
      postId: 0,
      postTitle: "",
      thumbNail: "",
    },
  ],
});

/**
 * 작성한 댓글 state
 */
export const userCommentState = atom<userCommentType[]>({
  key: "userComment",
  default: [
    {
      postId: 0,
      postTitle: "",
      commentContent: "",
      ottTag: "",
      createdAt: "",
    },
  ],
});
