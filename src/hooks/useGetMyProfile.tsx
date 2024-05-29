import { AxiosResponse } from "axios";
import useSWR from "swr";
import { waffleFetcher } from "../lib/axios";
import { userProfileType } from "../types/userProfile";

const useGetMyProfile = () => {
  const { data } = useSWR<AxiosResponse<userProfileType>>(
    "/api/v1/user/my",
    waffleFetcher,
  );

  return {
    userProfileData: data?.data,
  };
};

export default useGetMyProfile;
