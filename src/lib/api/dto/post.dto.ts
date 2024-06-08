export class PostCreateDto {
  ottTag: string | undefined = undefined;
  title: string | undefined = undefined;
  content: string | undefined = undefined;
  postImages: File[] | null = null;
}

export class PostEditDto {
  postId: string | undefined = undefined;
  ottTag: string | undefined = undefined;
  title: string | undefined = undefined;
  content: string | undefined = undefined;
  postImages: string[] | undefined = undefined;
}
