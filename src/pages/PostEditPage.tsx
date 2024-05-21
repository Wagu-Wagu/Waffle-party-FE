import Header from "../components/Header/Header";
import PostForm from "../components/PostForm";
import Close from "../assets/icons/CloseIcon.svg?react";
import { useNavigate } from "react-router-dom";

export default function PostEditPage() {
  const navigate = useNavigate();

  const handleHeaderClick = () => {
    navigate("/");
  };

  // TODO api 연동
  // const {data, isLoading, isError} = useGetPostDetailData();
  const data = {
    ott: "티빙",
    title: "제목",
    content: "내용입니다",
    postImage: [
      "https://gam-image-test.s3.ap-northeast-2.amazonaws.com/work/b7d98ae9-c597-48cf-a625-dc6c8bac0001%E1%84%86%E1%85%A2%E1%84%80%E1%85%A5%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3.jpeg",
      "https://gam-image-test.s3.ap-northeast-2.amazonaws.com/work/b7d98ae9-c597-48cf-a625-dc6c8bac0001%E1%84%86%E1%85%A2%E1%84%80%E1%85%A5%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3.jpeg",
    ],
  };
  const postFormProps = {
    data: data,
    onHeaderClick: handleHeaderClick,
  };

  return (
    <>
      <Header
        leftChild={<Close />}
        title="글 수정"
        rightChild="수정"
        noBorder={false}
        onClick={handleHeaderClick}
      />
      <PostForm {...postFormProps} />
    </>
  );
}
