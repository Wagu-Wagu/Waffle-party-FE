import { COMMENT_TYPE } from "./enum";

export interface notificationType {
  getMyNewsResponseVOs: notiElementType[];
}

export interface notiElementType {
  alertId: number;
  alertType: COMMENT_TYPE;
  content: string;
  isRead: boolean;
  newAlertCount: number;
  postId: number;
  modifiedAt: string;
}
