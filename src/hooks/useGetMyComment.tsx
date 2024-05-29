import { AxiosResponse } from "axios";
import useSWR from "swr";
import { waffleFetcher } from "../lib/axios";

const useGetMyComment = (userId: string | undefined) => {
  const { data } = useSWR<AxiosResponse<any>>(
    `/api/v1/user/my/comments?userId=${userId && +userId}`,
    waffleFetcher,
  );

  return {
    userCommentData: data?.data,
  };
};

export default useGetMyComment;
