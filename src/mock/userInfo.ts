/**
 * 게시글 상세 userInfo
 */
export const userData = [
  {
    id: 1,
    name: "User One",
    nickname: "userone",
    profilePicture: "https://example.com/userone.jpg",
    createdAt: "2024-05-20T08:00:00Z",
    comments: [
      {
        id: 1,
        name: "User One",
        nickname: "userone",
        profilePicture: "https://example.com/userone.jpg",
        repliedAt: "2024-05-20T09:00:00Z",
        replies: [
          {
            id: 1,
            name: "Reply User One",
            nickname: "replyuserone",
            profilePicture: "https://example.com/replyuserone.jpg",
            repliedAt: "2024-05-20T09:10:00Z",
          },
          {
            id: 2,
            name: "Reply User Two",
            nickname: "replyusertwo",
            profilePicture: "https://example.com/replyusertwo.jpg",
            repliedAt: "2024-05-20T09:20:00Z",
          },
        ],
      },
      {
        id: 2,
        name: "User One",
        nickname: "userone",
        profilePicture: "https://example.com/userone.jpg",
        repliedAt: "2024-05-20T10:00:00Z",
        replies: [
          {
            id: 3,
            name: "Reply User Three",
            nickname: "replyuserthree",
            profilePicture: "https://example.com/replyuserthree.jpg",
            repliedAt: "2024-05-20T10:10:00Z",
          },
          {
            id: 4,
            name: "Reply User Four",
            nickname: "replyuserfour",
            profilePicture: "https://example.com/replyuserfour.jpg",
            repliedAt: "2024-05-20T10:20:00Z",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "User Two",
    nickname: "usertwo",
    profilePicture: "https://example.com/usertwo.jpg",
    createdAt: "2024-05-19T08:00:00Z",
    comments: [
      {
        id: 3,
        name: "User Two",
        nickname: "usertwo",
        profilePicture: "https://example.com/usertwo.jpg",
        repliedAt: "2024-05-19T09:00:00Z",
        replies: [
          {
            id: 5,
            name: "Reply User Five",
            nickname: "replyuserfive",
            profilePicture: "https://example.com/replyuserfive.jpg",
            repliedAt: "2024-05-19T09:10:00Z",
          },
          {
            id: 6,
            name: "Reply User Six",
            nickname: "replyusersix",
            profilePicture: "https://example.com/replyusersix.jpg",
            repliedAt: "2024-05-19T09:20:00Z",
          },
        ],
      },
      {
        id: 4,
        name: "User Two",
        nickname: "usertwo",
        profilePicture: "https://example.com/usertwo.jpg",
        repliedAt: "2024-05-19T10:00:00Z",
        replies: [
          {
            id: 7,
            name: "Reply User Seven",
            nickname: "replyuserseven",
            profilePicture: "https://example.com/replyuserseven.jpg",
            repliedAt: "2024-05-19T10:10:00Z",
          },
          {
            id: 8,
            name: "Reply User Eight",
            nickname: "replyusereight",
            profilePicture: "https://example.com/replyusereight.jpg",
            repliedAt: "2024-05-19T10:20:00Z",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "User Three",
    nickname: "userthree",
    profilePicture: "https://example.com/userthree.jpg",
    createdAt: "2024-05-18T08:00:00Z",
    comments: [
      {
        id: 5,
        name: "User Three",
        nickname: "userthree",
        profilePicture: "https://example.com/userthree.jpg",
        repliedAt: "2024-05-18T09:00:00Z",
        replies: [
          {
            id: 9,
            name: "Reply User Nine",
            nickname: "replyusernine",
            profilePicture: "https://example.com/replyusernine.jpg",
            repliedAt: "2024-05-18T09:10:00Z",
          },
          {
            id: 10,
            name: "Reply User Ten",
            nickname: "replyuserten",
            profilePicture: "https://example.com/replyuserten.jpg",
            repliedAt: "2024-05-18T09:20:00Z",
          },
        ],
      },
      {
        id: 6,
        name: "User Three",
        nickname: "userthree",
        profilePicture: "https://example.com/userthree.jpg",
        repliedAt: "2024-05-18T10:00:00Z",
        replies: [
          {
            id: 11,
            name: "Reply User Eleven",
            nickname: "replyusereleven",
            profilePicture: "https://example.com/replyusereleven.jpg",
            repliedAt: "2024-05-18T10:10:00Z",
          },
          {
            id: 12,
            name: "Reply User Twelve",
            nickname: "replyusertwelve",
            profilePicture: "https://example.com/replyusertwelve.jpg",
            repliedAt: "2024-05-18T10:20:00Z",
          },
        ],
      },
    ],
  },
];

/**
 * 유저 정보
 */
export const userInfos = [
  {
    id: 1,
    name: "User One",
    nickname: "userone",
    kakaoId: "userone_kakao",
    profilePicture: null,
    content:
      "Lorem ipsum dolor sit amet consectetur.em ipsum dolor sit amet consectetur. ",
    posts: [
      {
        id: 1,
        title: "Post Title 1",
        content: "This is the content of post 1",
        createdAt: "2024-05-20T08:00:00Z",
      },
      {
        id: 2,
        title: "Post Title 2",
        content: "This is the content of post 2",
        createdAt: "2024-05-21T08:00:00Z",
      },
      {
        id: 3,
        title: "Post Title 3",
        content: "This is the content of post 3",
        createdAt: "2024-05-22T08:00:00Z",
      },
    ],
    comments: [
      {
        id: 1,
        postId: 1,
        content: "This is a comment on post 1",
        createdAt: "2024-05-20T09:00:00Z",
      },
      {
        id: 2,
        postId: 2,
        content: "This is a comment on post 2",
        createdAt: "2024-05-21T09:00:00Z",
      },
      {
        id: 3,
        postId: 3,
        content: "This is a comment on post 3",
        createdAt: "2024-05-22T09:00:00Z",
      },
    ],
    notifications: [
      {
        type: "comment",
        postId: 1,
        content: "New comment on your post 1",
        createdAt: "2024-05-20T10:00:00Z",
      },
      {
        type: "comment",
        postId: 2,
        content: "New comment on your post 2",
        createdAt: "2024-05-21T10:00:00Z",
      },
      {
        type: "comment",
        postId: 3,
        content: "New comment on your post 3",
        createdAt: "2024-05-22T10:00:00Z",
      },
      {
        type: "reply",
        commentId: 1,
        content: "New reply to your comment 1",
        createdAt: "2024-05-20T11:00:00Z",
      },
      {
        type: "reply",
        commentId: 2,
        content: "New reply to your comment 2",
        createdAt: "2024-05-21T11:00:00Z",
      },
      {
        type: "reply",
        commentId: 3,
        content: "New reply to your comment 3",
        createdAt: "2024-05-22T11:00:00Z",
      },
    ],
  },
  {
    id: 2,
    name: "User Two",
    nickname: "usertwo",
    kakaoId: "usertwo_kakao",
    profilePicture: null,
    posts: [
      {
        id: 4,
        title: "Post Title 4",
        content: "This is the content of post 4",
        createdAt: "2024-05-20T08:00:00Z",
      },
      {
        id: 5,
        title: "Post Title 5",
        content: "This is the content of post 5",
        createdAt: "2024-05-21T08:00:00Z",
      },
      {
        id: 6,
        title: "Post Title 6",
        content: "This is the content of post 6",
        createdAt: "2024-05-22T08:00:00Z",
      },
    ],
    comments: [
      {
        id: 4,
        postId: 4,
        content: "This is a comment on post 4",
        createdAt: "2024-05-20T09:00:00Z",
      },
      {
        id: 5,
        postId: 5,
        content: "This is a comment on post 5",
        createdAt: "2024-05-21T09:00:00Z",
      },
      {
        id: 6,
        postId: 6,
        content: "This is a comment on post 6",
        createdAt: "2024-05-22T09:00:00Z",
      },
    ],
    notifications: [
      {
        type: "comment",
        postId: 4,
        content: "New comment on your post 4",
        createdAt: "2024-05-20T10:00:00Z",
      },
      {
        type: "comment",
        postId: 5,
        content: "New comment on your post 5",
        createdAt: "2024-05-21T10:00:00Z",
      },
      {
        type: "comment",
        postId: 6,
        content: "New comment on your post 6",
        createdAt: "2024-05-22T10:00:00Z",
      },
      {
        type: "reply",
        commentId: 4,
        content: "New reply to your comment 4",
        createdAt: "2024-05-20T11:00:00Z",
      },
      {
        type: "reply",
        commentId: 5,
        content: "New reply to your comment 5",
        createdAt: "2024-05-21T11:00:00Z",
      },
      {
        type: "reply",
        commentId: 6,
        content: "New reply to your comment 6",
        createdAt: "2024-05-22T11:00:00Z",
      },
    ],
  },
  {
    id: 3,
    name: "User Three",
    nickname: "userthree",
    kakaoId: "userthree_kakao",
    profilePicture: "https://example.com/replyusertwelve.jpg",
    posts: [
      {
        id: 7,
        title: "Post Title 7",
        content: "This is the content of post 7",
        createdAt: "2024-05-20T08:00:00Z",
      },
      {
        id: 8,
        title: "Post Title 8",
        content: "This is the content of post 8",
        createdAt: "2024-05-21T08:00:00Z",
      },
      {
        id: 9,
        title: "Post Title 9",
        content: "This is the content of post 9",
        createdAt: "2024-05-22T08:00:00Z",
      },
    ],
    comments: [
      {
        id: 7,
        postId: 7,
        content: "This is a comment on post 7",
        createdAt: "2024-05-20T09:00:00Z",
      },
      {
        id: 8,
        postId: 8,
        content: "This is a comment on post 8",
        createdAt: "2024-05-21T09:00:00Z",
      },
      {
        id: 9,
        postId: 9,
        content: "This is a comment on post 9",
        createdAt: "2024-05-22T09:00:00Z",
      },
    ],
    notifications: [
      {
        type: "comment",
        postId: 7,
        content: "New comment on your post 7",
        createdAt: "2024-05-20T10:00:00Z",
      },
      {
        type: "comment",
        postId: 8,
        content: "New comment on your post 8",
        createdAt: "2024-05-21T10:00:00Z",
      },
      {
        type: "comment",
        postId: 9,
        content: "New comment on your post 9",
        createdAt: "2024-05-22T10:00:00Z",
      },
      {
        type: "reply",
        commentId: 7,
        content: "New reply to your comment 7",
        createdAt: "2024-05-20T11:00:00Z",
      },
      {
        type: "reply",
        commentId: 8,
        content: "New reply to your comment 8",
        createdAt: "2024-05-21T11:00:00Z",
      },
      {
        type: "reply",
        commentId: 9,
        content: "New reply to your comment 9",
        createdAt: "2024-05-22T11:00:00Z",
      },
    ],
  },
];
