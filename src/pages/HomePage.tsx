import MyReactCard from "../components/card/MyReactCard";

export default function HomePage() {
  const data = {
    ott: "넷플릭스",
    title: "제목",
    content:
      "내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다",
    writer: "안녕",
    timestamp: "2024.03.01",
    postImage: [
      "https://gam-image-test.s3.ap-northeast-2.amazonaws.com/work/b7d98ae9-c597-48cf-a625-dc6c8bac0001%E1%84%86%E1%85%A2%E1%84%80%E1%85%A5%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3.jpeg",
      "https://gam-image-test.s3.ap-northeast-2.amazonaws.com/work/f4a05b7c-e9d8-41c0-9236-4f8d19d5a9c4%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%8B%E1%85%B4%E1%84%83%E1%85%A9%E1%86%A8%E1%84%87%E1%85%A2%E1%86%A8%E1%84%89%E1%85%A1%E1%84%86%E1%85%AE%E1%84%89%E1%85%B5%E1%86%AF.png",
    ],
  };
  return (
    <div>
      <MyReactCard data={data} />
    </div>
  );
}
