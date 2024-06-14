import { postDetailType } from "../types/postDetail";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const postDetailState = atom<postDetailType>({
  key: "postDetail",
  default: {
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
        // true면 댓글, false면 대댓글
        isParentComment: false,
        isMyComment: false,
        isSecret: false,
        // 댓글 혹은 대댓글이 보이는지 여부
        isVisible: false,
        isActive: true,
      },
    ],
  },
  effects_UNSTABLE: [persistAtom],
});
