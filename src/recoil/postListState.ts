// recoil/postListState.ts
import { atom, selector } from "recoil";
import { PostList } from "../mock/mockData";

export const postListState = atom({
  key: "postListState",
  default: PostList,
});

export const sortedPostListState = selector({
  key: "sortedPostListState",
  get: ({ get }) => {
    const postList = get(postListState);
    return [...postList].sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    );
  },
});
