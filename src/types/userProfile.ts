export interface userInfoType {
  userId: number;
  userImage: string;
  nickName: string;
  email: string | null;
  postCount: number;
  commentCount: number;
}

export interface userProfileType {
  userInfo: userInfoType;
  waguVersion: string;
}

export interface userPostType {
  authorNickName: string;
  commentCount: number;
  createdAt: string;
  ottTag: string;
  postContent: string;
  postId: number;
  postTitle: string;
  thumbNail: string;
}

export interface userCommentType {
  postId: number;
  postTitle: string;
  commentContent: string;
  ottTag: string;
  createdAt: string;
}
