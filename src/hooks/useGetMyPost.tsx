import { AxiosResponse } from "axios";
import useSWR from "swr";
import { waffleFetcher } from "../lib/axios";

const useGetMyPost = (userId: string | undefined) => {
  const { data } = useSWR<AxiosResponse<any>>(
    `/api/v1/user/my/posts?userId=${userId && +userId}`,
    waffleFetcher,
  );

  return {
    userPostData: data?.data,
  };
};

export default useGetMyPost;
