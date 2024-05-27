export interface Post {
  postId: number;
  ottTag: string;
  title: string;
  content: string;
  photoes: any[];
  nickName: string;
  createdAt: string;
  commentCount: number;
  thumbNail: string | null;
}
