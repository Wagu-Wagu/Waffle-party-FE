import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import PostForm from "../components/PostForm";
import Close from "../assets/icons/CloseIcon.svg?react";
import { useState } from "react";

export default function PostCreatePage() {
  const navigate = useNavigate();
  const [showFullImage, setShowFullImage] = useState<boolean>(false);

  const handleHeaderClick = () => {
    navigate("/");
  };

  const data = {
    ott: null,
    title: "",
    content: "",
    postImage: null,
  };
  const postFormProps = {
    data: data,
    onHeaderClick: handleHeaderClick,
    setShowFullImage,
    showFullImage,
  };

  return (
    <>
      {!showFullImage && (
        <Header
          leftChild={<Close />}
          title="글 작성"
          rightChild="작성"
          noBorder={false}
          onClick={handleHeaderClick}
        />
      )}

      <PostForm {...postFormProps} />
    </>
  );
}
