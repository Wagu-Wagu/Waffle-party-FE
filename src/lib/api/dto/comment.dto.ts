export class CommentDto {
  postId: number | undefined = undefined;
  isSecret: boolean | undefined = undefined;
  content: string | undefined = undefined;
}

export class ChildCommentDto extends CommentDto {
  parentCommentId: number | undefined = undefined;
}

export class CommentEditDto extends CommentDto {
  commentUserId: number | undefined = undefined;
  commentId: number | undefined = undefined;
}
