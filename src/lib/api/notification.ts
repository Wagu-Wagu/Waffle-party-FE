import { client } from "../axios";

/**
 * 내소식 확인 요청
 * @param alertId
 * @returns
 */
export const getNotification = async (alertId: number) => {
  try {
    const { data } = await client.get(`/api/v1/user/my/news/${alertId}`);
    return data;
  } catch (e) {
    console.error(e);
  }
};
