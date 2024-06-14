import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { notificationType } from "../types/notification";
import { COMMENT_TYPE } from "../types/enum";

const { persistAtom } = recoilPersist();

export const notificationState = atom<notificationType[]>({
  key: "notification",
  default: [
    {
      getMyNewsResponseVOs: [
        {
          alertId: 0,
          alertType: COMMENT_TYPE.CO,
          content: "",
          isRead: false,
          newAlertCount: 0,
          postId: 0,
        },
      ],
    },
  ],
  effects_UNSTABLE: [persistAtom],
});
