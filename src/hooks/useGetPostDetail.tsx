import { AxiosResponse } from "axios";
import useSWR from "swr";
import { waffleFetcher } from "../lib/axios";
import { postDetailType } from "../types/postDetail";

const useGetPostDetail = (postId: string) => {
  const { data, mutate, isLoading } = useSWR<AxiosResponse<postDetailType>>(
    `api/v1/post/detail/${+postId}`,
    waffleFetcher,
  );

  console.log(isLoading);

  return {
    postDetailData: data?.data,
    isLoading: isLoading,
    refetch: mutate,
  };
};

export default useGetPostDetail;
