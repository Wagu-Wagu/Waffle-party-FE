export interface commentType {
  postId: string; //글 아이디
  userId: string;
  nickname: string;
  content: string | undefined;
  parentId: string | undefined; //상위댓글id
  isSecret: boolean;
  isActive: boolean;
  createdAt: string;
}

export interface dummyMoreContentType {
  mymorecomment: boolean;
  nickname: string;
  timestamp: string;
  content: string;
  profilePicture: string;
  lock: boolean;
  isUser: boolean;
}

export interface dummyContentType {
  mycomment: boolean;
  nickname: string;
  timestamp: string;
  content: string;
  profilePicture: string;
  lock: boolean;
  isUser: boolean;
  morecomment: dummyMoreContentType[];
}

export interface dummyDetail {
  id: string;
  nickname: string;
  timestamp: string;
  thumbnail: string;
  ott: string;
  title: string;
  text: string;
  comments: dummyContentType[];
}
