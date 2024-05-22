import { forwardRef } from "react";
import BottomSheet from "./BottomSheet";
import BottomSheetHeader from "./BottomSheetHeader";

interface modalProps {
  isShow: boolean;
  modalData: any;
  onPostEdit: () => void;
  onPostDelete: () => void;
  onCommentReply: () => void;
  onCommentEdit: () => void;
  onCommentDelete: () => void;
  onMoreComment: () => void;
  onReport: () => void;
  children?: React.ReactNode;
}

const ActionSheet = forwardRef<HTMLElement, modalProps>(
  (props: modalProps, ref) => {
    const {
      isShow,
      modalData,
      onPostEdit,
      onPostDelete,
      onCommentReply,
      onCommentEdit,
      onCommentDelete,
      onMoreComment,
      onReport,
    } = props;

    const postOptions = [
      { label: "게시글 수정", action: onPostEdit },
      { label: "게시글 삭제", action: onPostDelete },
    ];

    const commentOptions = [
      { label: "답댓글", action: onCommentReply },
      { label: "댓글 수정", action: onCommentEdit },
      { label: "댓글 삭제", action: onCommentDelete },
    ];

    const moreCommentOptions = [
      { label: "답댓글", action: onMoreComment },
      { label: "신고", action: onReport },
    ];

    const options =
      modalData === "post"
        ? postOptions
        : modalData.mycomment
          ? commentOptions
          : moreCommentOptions;
    console.log(options);

    return (
      <BottomSheet isShow={isShow} ref={ref}>
        <BottomSheetHeader />
        <div className="flex flex-col gap-[0.8rem]">
          <ul className="bg-gray14">
            {options.map((option, index) => (
              <li
                className={`flex items-center justify-center w-full h-[5.6rem] py-[1.4rem] text-[1.6rem] cursor-pointer text-center font-pretendard font-normal leading-6 ${
                  index !== options.length - 1 ? "border-b border-gray13" : ""
                } ${option.label === "삭제" ? "text-danger" : "text-white"}`}
                key={index}
                onClick={option.action}
              >
                {option.label}
              </li>
            ))}
          </ul>
          <ul className="bg-gray14">
            <li className="flex items-center justify-center h-[5.6rem] py-[1.4rem] text-[1.6rem] cursor-pointer text-white text-center font-pretendard font-normal leading-6">
              취소
            </li>
          </ul>
        </div>
      </BottomSheet>
    );
  },
);

export default ActionSheet;
