import { AxiosResponse } from "axios";
import useSWR from "swr";
import { waffleFetcher } from "../lib/axios";
import { postListType } from "../types/postList";

const useGetPostList = (selectedOtts: string[]) => {
  const { data, isLoading } = useSWR<AxiosResponse<postListType[]>>(
    `api/v1/post?ottTags=${selectedOtts.join(",")}`,
    waffleFetcher,
  );

  return {
    postListData: data?.data,
    isLoading: isLoading,
  };
};

export default useGetPostList;
