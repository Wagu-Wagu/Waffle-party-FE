import { postDetailType } from "../types/postDetail";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// atom 초기 상태를 변수로 분리
export const initialPostDetailState: postDetailType = {
  postDetail: {
    postId: 0,
    writerNickName: "",
    userImage: null,
    ottTag: "",
    isMyPost: false,
    photoes: [],
    createdAt: "",
    title: "",
    content: "",
    commentCount: 0,
  },
  comments: [
    {
      commentId: 0,
      commentUserId: 0,
      commenterNickName: "",
      userImage: null,
      createdAt: "",
      content: "",
      isParentComment: false,
      isMyComment: false,
      isSecret: false,
      isVisible: false,
      isActive: true,
    },
  ],
};

// Recoil atom 정의
export const postDetailState = atom({
  key: "postDetail",
  default: initialPostDetailState,
  effects_UNSTABLE: [persistAtom],
});
