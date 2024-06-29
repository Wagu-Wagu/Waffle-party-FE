import BottomSheet from "./BottomSheet";
import BottomSheetHeader from "./BottomSheetHeader";
import { optionState } from "../../types/actionSheetOption";

interface modalProps {
  option: optionState;
  isShow: boolean;
  onPostEdit?: () => void;
  onPostDelete?: () => void;
  // onPostReport?: () => void;
  onCommentReply?: () => void;
  onCommentEdit?: () => void;
  onCommentDelete?: () => void;
  // onReport?: () => void;
  onClose?: () => void;
  onSelectImage?: () => void;
  onRemoveImage?: () => void;
  children?: React.ReactNode;
  setModalActive: (active: boolean) => void;
}

export default function ActionSheet(props: modalProps) {
  const {
    option,
    isShow,
    onPostEdit,
    onPostDelete,
    // onPostReport,
    onCommentReply,
    onCommentEdit,
    onCommentDelete,
    // onReport,
    onClose,
    onSelectImage,
    onRemoveImage,
    setModalActive,
  } = props;

  // 게시물수정
  const postOptions = [
    { label: "수정", action: onPostEdit },
    { label: "삭제", action: onPostDelete },
  ];

  // 다른사람 게시물일때
  // const otherPostOptions = [{ label: "신고", action: onPostReport }];

  // 내가 쓴 댓글일때
  const myCommentOptions = [
    { label: "답댓글", action: onCommentReply },
    { label: "수정", action: onCommentEdit },
    { label: "삭제", action: onCommentDelete },
  ];

  // 다른사람이 쓴 댓글일때
  const otherCommentOptions = [
    { label: "답댓글", action: onCommentReply },
    // { label: "신고", action: onReport },
  ];

  // 내가 쓴 답댓글일때
  const myMoreCommentOptions = [
    { label: "수정", action: onCommentEdit },
    { label: "삭제", action: onCommentDelete },
  ];

  // 다른사람이 쓴 답댓글일때
  // const otherMoreCommentOptions = [{ label: "신고", action: onReport }];

  // 프로필 사진 수정 - 현재 사진이 있을때
  const editImageOptions = [
    { label: "앨범에서 사진 선택", action: onSelectImage },
    { label: "현재 사진 삭제", action: onRemoveImage },
  ];

  // 프로필 사진 수정 - 현재 사진이 없을때
  const createImageOptions = [
    { label: "앨범에서 사진 선택", action: onSelectImage },
  ];

  const getOptions = (option: optionState) => {
    const { type, isOwner, isUserImage } = option;

    switch (type) {
      case "post":
        // return isOwner ? postOptions : otherPostOptions;
        return isOwner && postOptions;
      case "comment":
        return isOwner ? myCommentOptions : otherCommentOptions;
      case "reply":
        // return isOwner ? myMoreCommentOptions : otherMoreCommentOptions;
        return isOwner && myMoreCommentOptions;
      case "profile":
        return isUserImage ? editImageOptions : createImageOptions;
      default:
        return [];
    }
  };

  const options = getOptions(option);

  return (
    <BottomSheet isShow={isShow} setModalActive={setModalActive}>
      <BottomSheetHeader />
      <div className="flex flex-col gap-[0.8rem] border-t border-gray14">
        <ul className="bg-gray14">
          {options &&
            options?.map((optionEl, index) => (
              <li
                className={`flex items-center justify-center w-full h-[5.6rem] py-[1.4rem] text-[1.6rem] cursor-pointer text-center font-pretendard font-normal leading-6 ${
                  index !== options.length - 1 ? "border-b border-gray13" : ""
                } ${
                  index === options.length - 1 &&
                  !(option.type === "profile" && !option.isUserImage)
                    ? "text-danger"
                    : "text-white"
                }`}
                key={index}
                onClick={optionEl.action}
              >
                {optionEl.label}
              </li>
            ))}
        </ul>
        <ul className="bg-gray14" onClick={onClose}>
          <li className="flex items-center justify-center h-[5.6rem] py-[1.4rem] text-[1.6rem] cursor-pointer text-white text-center font-pretendard font-normal leading-6">
            취소
          </li>
        </ul>
      </div>
    </BottomSheet>
  );
}
