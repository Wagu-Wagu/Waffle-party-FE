export const ottTags = {
  NETFLIX: "넷플릭스",
  WATCHA: "왓챠",
  DISNEY: "디즈니+",
  WAVE: "웨이브",
  TIVING: "티빙",
  COUPANGPLAY: "쿠팡플레이",
  LAFTEL: "라프텔",
  NAVERSERIES: "네이버시리즈",
  ETC: "기타",
} as const;

export type OttTag = keyof typeof ottTags;
export type OttTagKorean = (typeof ottTags)[OttTag];

export const ottTagsReverse: Record<OttTagKorean, OttTag> = Object.fromEntries(
  Object.entries(ottTags).map(([key, value]) => [value, key]),
) as Record<OttTagKorean, OttTag>;
