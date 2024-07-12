// recoil/postListState.ts
import { atom, selector } from "recoil";
import { postListType } from "../types/postList";

export const postListState = atom<postListType[]>({
  key: "postListState",
  default: [
    {
      postVO: {
        postId: 0,
        ottTag: "",
        title: "",
        content: "",
        photoes: [],
        nickName: "",
        createdAt: "",
        commentCount: 0,
        thumbNail: "",
      },
    },
  ],
});

export const sortedPostListState = selector({
  key: "sortedPostListState",
  get: ({ get }) => {
    const postList = get(postListState);
    return [...postList].sort((a, b) => {
      const dateA = new Date(a.postVO.createdAt).getTime();
      const dateB = new Date(b.postVO.createdAt).getTime();
      return dateB - dateA;
    });
  },
});
