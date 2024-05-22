import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import CommentInput from "./CommentInput";
import UserCard from "./card/UserCard";

export default function CommentSection({
  comments,
  handleModal,
  onClick,
  handleAddComment,
  handleChangeContent,
  handleKeyPress,
  isLocked,
  isFocused,
  inputValue,
  uptoSubmit,
  setIsLocked,
  setIsFocused,
  setInputValue,
  setPlaceHolderClass,
  setTextClass,
}) {
  const defaultValues = {
    comments: comments.map((comment) => ({
      content: comment.content || "",
      lock: comment.lock || false,
      morecomment: comment.morecomment || [],
      mycomment: comment.mycomment || false,
      nickname: comment.nickname || "",
      profilePicture: comment.profilePicture || "",
      timestamp: comment.timestamp || "",
      mymorecomment: comment.mymorecomment || false,
    })),
  };

  const { control } = useForm({ defaultValues });

  const {
    fields: commentFields,
    append: appendComment,
    remove: removeComment,
  } = useFieldArray({
    control,
    name: "comments",
  });
  console.log(commentFields);

  // 대댓글 추가 함수
  const addMoreComment = (commentIndex) => {
    appendComment(
      {
        nickname: "",
        timestamp: "",
        profilePicture: "",
        content: "",
        morecomment: [],
        lock: false,
      },
      { name: `comments[${commentIndex}].morecomment` },
    );
  };

  return (
    <div className="flex flex-col w-full gap-[1rem]">
      {commentFields.map((comment, index) => (
        <React.Fragment key={index}>
          <UserCard
            data={comment}
            isMyPage={false}
            showMoreIcon={true}
            onClick={() => onClick(comment)}
          />
          <div className="h-[0.1rem] bg-gray13"></div>
          {/* 대댓글 */}
          {comment.morecomment?.map((moreComment, moreIndex) => (
            <div className="pl-[4.8rem]" key={moreIndex}>
              <UserCard
                data={moreComment}
                isMyPage={false}
                showMoreIcon={true}
                onClick={() => onClick(comment)}
              />
              <div className="h-[0.1rem] bg-gray13"></div>
            </div>
          ))}
          {/* <div className="h-[10rem]">
            <CommentInput
              isLocked={isLocked}
              isFocused={isFocused}
              inputValue={inputValue}
              uptoSubmit={uptoSubmit}
              setIsLocked={setIsLocked}
              setIsFocused={setIsFocused}
              setInputValue={setInputValue}
              handleAddComment={handleAddComment}
              handleChangeContent={handleChangeContent}
              handleKeyPress={handleKeyPress}
              setPlaceHolderClass={setPlaceHolderClass}
              setTextClass={setTextClass}
            />
          </div> */}
        </React.Fragment>
      ))}
    </div>
  );
}
