import BottomSheet from "./BottomSheet";
import BottomSheetHeader from "./BottomSheetHeader";

interface modalProps {
  // post, comment
  isShow: boolean;
  type: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function ActionSheet(props: modalProps) {
  const { isShow, type, onClick } = props;

  // 게시글 더보기 모달에 대한 옵션
  const postOptions = [
    {
      label: "게시글 수정",
      action: () => {
        window.alert("수정할거?");
      },
    },
    { label: "끌어올리기", action: () => {} },
    { label: "숨기기", action: () => {} },
    { label: "삭제", action: () => {} },
    // { label: "취소", action: onClick },
  ];

  // 댓글 더보기 모달에 대한 옵션
  const commentOptions = [
    { label: "댓글더보기", action: () => {} },
    { label: "답댓글", action: () => {} },
    { label: "복사", action: () => {} },
    { label: "수정", action: () => {} },
    { label: "삭제", action: () => {} },
    { label: "작성자 정보", action: () => {} },
    // { label: "취소", action: onClick },
  ];

  // 현재 모달에 따라서 옵션을 선택
  const options = type === "post" ? postOptions : commentOptions;

  return (
    <BottomSheet isShow={isShow} onClick={onClick}>
      <BottomSheetHeader />
      <div className="flex flex-col gap-[0.8rem] ">
        <ul className=" bg-gray14">
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
        <ul className=" bg-gray14">
          <li
            className="flex items-center justify-center h-[5.6rem] py-[1.4rem] text-[1.6rem] cursor-pointer text-white"
            text-center
            font-pretendard
            font-normal
            leading-6
          >
            취소
          </li>
        </ul>
      </div>
    </BottomSheet>
  );
}
