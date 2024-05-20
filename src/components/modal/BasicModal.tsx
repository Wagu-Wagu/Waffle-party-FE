import BottomSheet from "./BottomSheet";
import BottomSheetHeader from "./BottomSheetHeader";
import Button from "../common/Button";

interface modalProps {
  // post, comment
  isShow: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function BasicModal(props: modalProps) {
  const { isShow, onClick } = props;
  return (
    <BottomSheet isShow={isShow} onClick={onClick}>
      <BottomSheetHeader />
      <div className="flex flex-col gap-[3rem] bg-gray14 px-[2rem] py-[2.3rem] text-white">
        <div className="flex flex-col gap-[1.2rem]">
          <p className="text-d3 h-[2.8rem] text-center font-pretendard font-normal leading-[1.6rem]">
            댓글을 삭제하시겠어요?
          </p>
          <p className="text-center font-pretendard text-caption font-normal leading-[1.6rem]">
            댓글을 삭제하시면 다시 되돌릴 수 없습니다.
          </p>
        </div>
        <div className="flex gap-[1.2rem] justify-center">
          <Button
            type="button"
            disabled={false}
            size="sm"
            variant="transparentYellow"
            onClick={onClick}
          >
            취소하기
          </Button>
          <Button
            type="button"
            disabled={false}
            size="sm"
            variant="yellow"
            onClick={onClick}
          >
            삭제하기
          </Button>
        </div>
      </div>
    </BottomSheet>
  );
}
