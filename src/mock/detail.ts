/**
 * 더미데이터
 */
export const data = {
  id: 1,
  mypost: true,
  ott: "티빙",
  title: "여고추리반3 보실 분",
  text: "무서운 저주가 떠도는 학교로 전학 간 추리반 학생들이 학교에 숨겨진 진실에 다가갈수록 더욱더 거대한 사건을 마주하면서 벌어지는 미스터리 어드벤처 여고추리반3 같이 봐요!",
  thumbnail: [
    "https://search.pstatic.net/common/?src=https%3A%2F%2Fditto-phinf.pstatic.net%2F20240405_208%2F1712296500539nVxqY_JPEG%2F660f9233b8c2545456c85fd6.jpg&type=o&size=472x472&ttype=input",
    "https://search.pstatic.net/common/?src=https%3A%2F%2Fditto-phinf.pstatic.net%2F20240405_208%2F1712296500539nVxqY_JPEG%2F660f9233b8c2545456c85fd6.jpg&type=o&size=472x472&ttype=input",
  ],
  nickname: "와플중독자",
  timestamp: "2024.5.18",
  profilePicture:
    "https://search.pstatic.net/common/?src=https%3A%2F%2Fditto-phinf.pstatic.net%2F20240405_208%2F1712296500539nVxqY_JPEG%2F660f9233b8c2545456c85fd6.jpg&type=o&size=472x472&ttype=input",
  comments: [
    {
      mycomment: true, //내가 쓴 댓글이라는뜻
      nickname: "유저1",
      timestamp: "2024.5.18",
      content:
        "이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다",
      profilePicture:
        "https://gam-image-test.s3.ap-northeast-2.amazonaws.com/work/b7d98ae9-c597-48cf-a625-dc6c8bac0001%E1%84%86%E1%85%A2%E1%84%80%E1%85%A5%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3.jpeg",
      morecomment: [],
      lock: true,
      isUser: true,
    },
    {
      mycomment: false,

      nickname: "유저2",
      timestamp: "2024.5.18",
      content: "저요",
      profilePicture:
        "https://gam-image-test.s3.ap-northeast-2.amazonaws.com/work/b7d98ae9-c597-48cf-a625-dc6c8bac0001%E1%84%86%E1%85%A2%E1%84%80%E1%85%A5%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3.jpeg",
      morecomment: [
        {
          lock: false,
          isUser: true,
          mymorecomment: true, //내가쓴답댓글
          nickname: "유저3",
          timestamp: "2024.5.18",
          content:
            "이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다",
          profilePicture:
            "https://gam-image-test.s3.ap-northeast-2.amazonaws.com/work/b7d98ae9-c597-48cf-a625-dc6c8bac0001%E1%84%86%E1%85%A2%E1%84%80%E1%85%A5%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3.jpeg",
        },
        {
          lock: false,
          isUser: false,
          mymorecomment: true,
          nickname: "유저4",
          timestamp: "2024.5.18",
          content: "dd",
          profilePicture:
            "https://gam-image-test.s3.ap-northeast-2.amazonaws.com/work/b7d98ae9-c597-48cf-a625-dc6c8bac0001%E1%84%86%E1%85%A2%E1%84%80%E1%85%A5%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3.jpeg",
        },
      ],
      lock: false,
    },
    {
      isUser: false,
      mycomment: true,
      nickname: "유저5",
      timestamp: "2024.5.18",
      content: "저도요",
      profilePicture:
        "https://gam-image-test.s3.ap-northeast-2.amazonaws.com/work/b7d98ae9-c597-48cf-a625-dc6c8bac0001%E1%84%86%E1%85%A2%E1%84%80%E1%85%A5%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3.jpeg",
      morecomment: [
        {
          lock: true,
          isUser: true,
          mymorecomment: true,
          nickname: "유저6",
          timestamp: "2024.5.18",
          content:
            "이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다",
          profilePicture:
            "https://gam-image-test.s3.ap-northeast-2.amazonaws.com/work/b7d98ae9-c597-48cf-a625-dc6c8bac0001%E1%84%86%E1%85%A2%E1%84%80%E1%85%A5%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3.jpeg",
        },
        {
          lock: true,
          isUser: false,
          mymorecomment: false,
          nickname: "유저7",
          timestamp: "2024.5.18",
          content:
            "이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다이것은답글입니다",
          profilePicture:
            "https://gam-image-test.s3.ap-northeast-2.amazonaws.com/work/b7d98ae9-c597-48cf-a625-dc6c8bac0001%E1%84%86%E1%85%A2%E1%84%80%E1%85%A5%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3.jpeg",
        },
      ],
      lock: false,
    },
    {
      isUser: false,
      mycomment: false,
      nickname: "유저8",
      timestamp: "2024.5.18",
      content: "이거재밌음??",
      profilePicture:
        "https://gam-image-test.s3.ap-northeast-2.amazonaws.com/work/b7d98ae9-c597-48cf-a625-dc6c8bac0001%E1%84%86%E1%85%A2%E1%84%80%E1%85%A5%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3.jpeg",
      lock: true,
      morecomment: [],
    },
  ],
};
