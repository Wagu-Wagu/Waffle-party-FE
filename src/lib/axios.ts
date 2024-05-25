import axios from "axios";
import { getAccessToken } from "./token";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URI,
  headers: {
    "Content-type": "application/json",
  },
});

client.interceptors.request.use((config: any) => {
  const token = getAccessToken("accessToken");
  const headers = {
    ...config.headers,
    Authorization: `Bearer ${token}`,
  };
  console.log("Request Headers:", headers);
  console.log("Request Data:", config.data);
  return { ...config, headers };
});

client.interceptors.response.use(
  function (response) {
    console.log("Response Data:", response.data); // 응답 데이터를 콘솔에 출력
    return response;
  },
  (error) => {
    console.error("Response Error:", error.response); // 에러 응답을 콘솔에 출력
    return error.response;
  },
);

// get 요청시
// const {data, error} = useSWR<AxiosResponse<데이터 타입>>('api 엔드포인트', waffleFetcher, {}) 요런식으로 쓰일거예요
export const waffleFetcher = (url: string) =>
  client.get(url).then((res) => res.data);

export { client };
