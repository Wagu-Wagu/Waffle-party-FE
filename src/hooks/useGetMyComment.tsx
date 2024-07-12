import { AxiosResponse } from "axios";
import useSWR from "swr";
import { waffleFetcher } from "../lib/axios";
import { userCommentType } from "../types/userProfile";

const useGetMyComment = (userId: string | undefined) => {
  const { data, isLoading } = useSWR<AxiosResponse<userCommentType[]>>(
    `/api/v1/user/my/comments?userId=${userId && +userId}`,
    waffleFetcher,
  );

  return {
    userCommentData: data?.data,
    isLoading: isLoading,
  };
};

export default useGetMyComment;
