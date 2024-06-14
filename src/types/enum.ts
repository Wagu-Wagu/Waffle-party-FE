export enum COMMENT_TYPE {
  CO = "COMMENT",
  RE = "REPLY",
}

export const COMMENT_TYPE_KOREAN: Record<COMMENT_TYPE, string> = {
  [COMMENT_TYPE.CO]: "댓글",
  [COMMENT_TYPE.RE]: "답댓글",
};
