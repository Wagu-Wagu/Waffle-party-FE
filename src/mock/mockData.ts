export interface Post {
  postId: number;
  userId: number;
  title: string;
  content: string;
  photoes: string[] | null;
  ottTag: string;
  thumbNail: string;
  commentCount: number;
  isActive: boolean;
  createdAt: Date;
  modifiedAt: Date;
}

export interface User {
  userId: number;
  nickName: string;
  email: string;
  createdAt: Date;
  modifiedAt: Date;
}

export const PostList: Post[] = [
  {
    postId: 1,
    userId: 1,
    ottTag: "티빙",
    title: "여고추리반3 보실 분",
    content:
      "무서운 저주가 떠도는 학교로 전학 간 추리반 학생들이 학교에 숨겨진 진실에 다가갈수록 더욱더 거대한 사건을 마주하면서 벌어지는 미스터리 어드벤처 여고추리반3 같이 봐요!",
    photoes: [
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fditto-phinf.pstatic.net%2F20240405_208%2F1712296500539nVxqY_JPEG%2F660f9233b8c2545456c85fd6.jpg&type=o&size=472x472&ttype=input",
    ],
    thumbNail:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fditto-phinf.pstatic.net%2F20240405_208%2F1712296500539nVxqY_JPEG%2F660f9233b8c2545456c85fd6.jpg&type=o&size=472x472&ttype=input",
    commentCount: 26,
    isActive: true,
    createdAt: new Date("2024-05-19T00:00:00"),
    modifiedAt: new Date("2024-05-19T00:00:00"),
  },
  {
    postId: 2,
    userId: 2,
    ottTag: "넷플릭스",
    title:
      "와플맨의 3650가지 비밀 - 반죽의 황금비율과 소비자의 충동구매를 부추길 수 있는 요소들, 장인만의 떼돈 버는 특급 비법 그 어딘가를 찾아서 같이 보실 분",
    content:
      "와플장사로 제 2의 인생을 살아보려고 하는데, 같이 보실 자영업자 사장님들 구합니다.",
    photoes: null,
    thumbNail: "",
    commentCount: 30,
    isActive: true,
    createdAt: new Date("2024-05-19T00:00:00"),
    modifiedAt: new Date("2024-05-19T00:00:00"),
  },
  {
    postId: 3,
    userId: 1,
    ottTag: "티빙",
    title: "여고추리반 시즌 1부터 시즌 3까지 함께 달려요! (스포 절대 금지)",
    content: "스포 싫어요ㅜㅜ",
    photoes: [
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fditto-phinf.pstatic.net%2F20240405_208%2F1712296500539nVxqY_JPEG%2F660f9233b8c2545456c85fd6.jpg&type=o&size=472x472&ttype=input",
    ],
    thumbNail:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fditto-phinf.pstatic.net%2F20240405_208%2F1712296500539nVxqY_JPEG%2F660f9233b8c2545456c85fd6.jpg&type=o&size=472x472&ttype=input",
    commentCount: 3,
    isActive: true,
    createdAt: new Date("2024-05-20T00:00:00"),
    modifiedAt: new Date("2024-05-20T00:00:00"),
  },
  {
    postId: 4,
    userId: 3,
    ottTag: "웨이브",
    title: "윌터의 상상은 현실이 된다 1",
    content: "제 상상도 현실이 되었으면 좋겠네요. 같이 보실 분?",
    photoes: null,
    thumbNail: "",
    commentCount: 5,
    isActive: true,
    createdAt: new Date("2024-05-11T00:00:00"),
    modifiedAt: new Date("2024-05-11T00:00:00"),
  },
  {
    postId: 5,
    userId: 3,
    ottTag: "웨이브",
    title: "윌터의 상상은 현실이 된다 2",
    content: "제 상상도 현실이 되었으면 좋겠네요. 같이 보실 분?",
    photoes: null,
    thumbNail: "",
    commentCount: 5,
    isActive: true,
    createdAt: new Date("2024-05-12T00:00:00"),
    modifiedAt: new Date("2024-05-12T00:00:00"),
  },
  {
    postId: 6,
    userId: 3,
    ottTag: "웨이브",
    title: "윌터의 상상은 현실이 된다 3",
    content: "제 상상도 현실이 되었으면 좋겠네요. 같이 보실 분?",
    photoes: null,
    thumbNail: "",
    commentCount: 5,
    isActive: true,
    createdAt: new Date("2024-05-13T00:00:00"),
    modifiedAt: new Date("2024-05-13T00:00:00"),
  },
  {
    postId: 7,
    userId: 3,
    ottTag: "웨이브",
    title: "윌터의 상상은 현실이 된다 4",
    content: "제 상상도 현실이 되었으면 좋겠네요. 같이 보실 분?",
    photoes: null,
    thumbNail: "",
    commentCount: 5,
    isActive: true,
    createdAt: new Date("2024-05-14T00:00:00"),
    modifiedAt: new Date("2024-05-14T00:00:00"),
  },
  {
    postId: 8,
    userId: 3,
    ottTag: "웨이브",
    title: "윌터의 상상은 현실이 된 5",
    content: "제 상상도 현실이 되었으면 좋겠네요. 같이 보실 분?",
    photoes: null,
    thumbNail: "",
    commentCount: 5,
    isActive: true,
    createdAt: new Date("2024-05-15T00:00:00"),
    modifiedAt: new Date("2024-05-15T00:00:00"),
  },
  {
    postId: 9,
    userId: 3,
    ottTag: "웨이브",
    title: "윌터의 상상은 현실이 된다 6",
    content: "제 상상도 현실이 되었으면 좋겠네요. 같이 보실 분?",
    photoes: null,
    thumbNail: "",
    commentCount: 5,
    isActive: true,
    createdAt: new Date("2024-05-16T00:00:00"),
    modifiedAt: new Date("2024-05-16T00:00:00"),
  },
  {
    postId: 10,
    userId: 3,
    ottTag: "웨이브",
    title: "윌터의 상상은 현실이 된다 7",
    content: "제 상상도 현실이 되었으면 좋겠네요. 같이 보실 분?",
    photoes: null,
    thumbNail: "",
    commentCount: 5,
    isActive: true,
    createdAt: new Date("2024-05-17T00:00:00"),
    modifiedAt: new Date("2024-05-17T00:00:00"),
  },
  {
    postId: 11,
    userId: 2,
    ottTag: "넷플릭스",
    title: "더본컴퍼니 다큐 보실분",
    content: "백종원처럼 되고싶어요ㅜㅜ",
    photoes: null,
    thumbNail: "",
    commentCount: 99,
    isActive: true,
    createdAt: new Date("2024-05-23T16:20:00"),
    modifiedAt: new Date("2024-05-23T16:20:00"),
  },
];

export const UserList: User[] = [
  {
    userId: 1,
    nickName: "와플중독자",
    email: "waffle@user.com",
    createdAt: new Date("2024-01-01T00:00:00"),
    modifiedAt: new Date("2024-01-01T00:00:00"),
  },
  {
    userId: 2,
    nickName: "와플입문자",
    email: "newb@user.com",
    createdAt: new Date("2024-01-01T00:00:00"),
    modifiedAt: new Date("2024-01-01T00:00:00"),
  },
  {
    userId: 3,
    nickName: "공상가",
    email: "visionary@user.com",
    createdAt: new Date("2024-01-01T00:00:00"),
    modifiedAt: new Date("2024-01-01T00:00:00"),
  },
];
