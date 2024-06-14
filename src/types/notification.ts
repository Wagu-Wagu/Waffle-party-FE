import { COMMENT_TYPE } from "./enum";

export interface notificationType {
  getMyNewsResponseVOs: [
    {
      alertId: number;
      alertType: COMMENT_TYPE; // COMMENT, REPLY
      content: string; //글제목 or 댓글내용
      isRead: false; //소식을 읽었는지 여부
      newAlertCount: number; //댓글, 답댓글 개수
      postId: number;
    },
  ];
}
