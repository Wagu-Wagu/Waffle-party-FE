import { AxiosResponse } from "axios";
import useSWR from "swr";
import { waffleFetcher } from "../lib/axios";
import { userPostType } from "../types/userProfile";

const useGetMyPost = (userId: string | undefined) => {
  const { data, isLoading } = useSWR<AxiosResponse<userPostType[]>>(
    `/api/v1/user/my/posts?userId=${userId && +userId}`,
    waffleFetcher,
  );

  return {
    userPostData: data?.data,
    isLoading: isLoading,
  };
};

export default useGetMyPost;
