import { client } from "../axios";
import { getAccessToken } from "../token";
import { NickNameDto } from "./dto/user.dto";
import { AxiosError } from "axios";

/**
 * 프로필 사진 변경
 * @param file
 * @returns
 */
export const patchProfileImage = async (file: File | null) => {
  try {
    const formData = new FormData();

    if (file) {
      formData.append("userImage", file, file.name);
    } else {
      // 빈 파일을 추가하여 빈 리스트로 처리
      formData.append("userImage", new Blob(), "");
    }
    const token = getAccessToken("accessToken");

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      },
    };

    const { data } = await client.patch("/api/v1/user/image", formData, config);
    if (data.data) {
      return data;
    }
  } catch (e) {
    console.error(e);
  }
};

/**
 * 온보딩 - 닉네임 등록
 * @param param
 * @param nav
 * @returns
 */
export const patchOnBoard = async (
  param: NickNameDto,
  nav: (path: string) => void,
) => {
  try {
    const { data } = await client.patch("/api/v1/user/onboard", param);
    return data;
  } catch (e: any) {
    const error = e as AxiosError<any>;
    if (error.response) {
      if (error.response.status === 400) {
        const errorMessage = error.response.data.message;
        if (errorMessage === "유저 닉네임은 빈스트링 일 수 없습니다.") {
          window.alert("닉네임을 입력해야 합니다.");
        } else if (errorMessage === "이미 온보딩을 한 유저입니다.") {
          window.alert(errorMessage);
          nav("/");
        }
      } else {
        console.error("온보딩 요청 중 에러 발생:", error.response.data);
      }
    } else {
      console.error("온보딩 요청 중 에러 발생:", error.message);
    }
    throw e;
  }
};

/**
 * 유저 닉네임 변경
 * @param param
 * @returns
 */
export const patchNickName = async (param: NickNameDto) => {
  try {
    const { data } = await client.patch("/api/v1/user/nickname", param);
    return data;
  } catch (e: any) {
    const error = e as AxiosError<any>;
    if (error.response) {
      if (error.response.status === 400) {
        const errorMessage = error.response.data.message;
        window.alert(errorMessage);
      } else {
        console.error("닉네임 변경 중 에러 발생:", error.response.data);
      }
    } else {
      console.error("닉네임 변경 중 에러 발생:", error.message);
    }
    throw e;
  }
};
