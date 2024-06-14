import { AxiosResponse } from "axios";
import useSWR from "swr";
import { waffleFetcher } from "../lib/axios";
import { notificationType } from "../types/notification";

const useGetNotification = () => {
  const { data } = useSWR<AxiosResponse<notificationType[]>>(
    "api/v1/user/my/news",
    waffleFetcher,
  );

  return {
    notificationData: data?.data,
  };
};

export default useGetNotification;
