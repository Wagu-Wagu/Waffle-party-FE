export interface postDetailType {
  postDetail: {
    postId: number;
    writerNickName: string;
    userImage: string | null;
    ottTag: string;
    isMyPost: boolean;
    photoes: string[];
    createdAt: string;
    title: string;
    content: string;
    commentCount: number;
  };
  comments: postCommentType[];
}

export interface postCommentType {
  commentId?: number;
  commentUserId?: number;
  commenterNickName: string;
  userImage: string | null;
  createdAt: string;
  content: string;
  // true면 댓글, false면 대댓글
  isParentComment: boolean;
  isMyComment: boolean;
  isSecret: boolean;
  // 비밀댓글일 때, 댓글 혹은 대댓글이 보이는지 여부
  isVisible: boolean;
  // 삭제된 댓글인지 여부
  isActive: boolean;
}
