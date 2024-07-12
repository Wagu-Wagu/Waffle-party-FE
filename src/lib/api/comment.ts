import { client } from "../axios";
import { ChildCommentDto, CommentDto, CommentEditDto } from "./dto/comment.dto";

/**
 * 댓글 등록
 * @param param
 * @returns
 */
export const postComment = async (param: CommentDto) => {
  try {
    const { data } = await client.post("/api/v1/comment", param);
    return data;
  } catch (e) {
    console.error(e);
  }
};

/**
 * 답댓글 등록
 * @param param
 * @returns
 */
export const postChildComment = async (param: ChildCommentDto) => {
  try {
    const { data } = await client.post("/api/v1/comment/reply", param);
    return data;
  } catch (e) {
    console.error(e);
  }
};

/**
 * 댓글, 답댓글 수정
 * @param param
 * @returns
 */
export const editComment = async (param: CommentEditDto) => {
  try {
    const { data } = await client.patch("/api/v1/comment", param);
    return data;
  } catch (e) {
    console.error(e);
  }
};

/**
 * 댓글, 답댓글 삭제
 * @param commentId
 * @returns
 */
export const deleteComment = async (commentId: number) => {
  try {
    const { data } = await client.patch(`/api/v1/comment/${commentId}`);
    return data;
  } catch (e) {
    console.error(e);
  }
};
