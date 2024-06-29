import axios from "axios";
import { clearUserSession, getAccessToken } from "./token";

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
    Authorization: token,
  };
  return { ...config, headers };
});

client.interceptors.response.use(
  function (response) {
    return response;
  },
  (e) => {
    console.error(e);
    if (e.response.status === 401) {
      clearUserSession();
      location.reload();
    }
    return Promise.reject(e);
  },
);

// get 요청시
// const {data, error} = useSWR<AxiosResponse<데이터 타입>>('api 엔드포인트', waffleFetcher, {}) 요런식으로 쓰일거예요
export const waffleFetcher = (url: string) =>
  client.get(url).then((res) => res.data);

export { client };
