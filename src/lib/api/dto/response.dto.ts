/**
 * 반환용 DTO
 */
export class ResponseDto {
  success: boolean | undefined = undefined;
  resultMsg: string | undefined = undefined;
  data?: any; // 여기에 가져올 데이터를 담을 것
}
