import BottomSheet from "./BottomSheet";
import BottomSheetHeader from "./BottomSheetHeader";
import Button from "../common/Button";
import { useMemo } from "react";

interface modalProps {
  isShow: boolean;
  isLogout?: boolean;
  isWithDrawal?: boolean;
  option?: string;
  onConfirm: (v: boolean) => void;
  children?: React.ReactNode;
  setModalActive: (active: boolean) => void;
}

export default function BasicModal(props: modalProps) {
  const { isShow, isLogout, isWithDrawal, option, onConfirm, setModalActive } =
    props;

  /**
   * 게시글, 댓글, 답댓글 구분
   */
  const target = useMemo(() => {
    switch (option) {
      case "post":
        return "게시글";
      case "comment":
        return "댓글";
      case "reply":
        return "답댓글";
      default:
        return "";
    }
  }, [option]);
  return (
    <BottomSheet isShow={isShow} setModalActive={setModalActive}>
      <BottomSheetHeader />
      <div className="flex flex-col gap-[3rem] bg-gray14 px-[2.3rem] py-[2rem] text-white items-center self-center">
        {isLogout ? (
          <p className="text-[2rem] h-[2.8rem] text-center font-pretendard font-normal leading-[1.6rem] flex items-center">
            로그아웃 하시겠어요?
          </p>
        ) : isWithDrawal ? (
          <p className="text-[2rem] h-[2.8rem] text-center font-pretendard font-normal leading-[1.6rem] flex items-center">
            정말 탈퇴하시겠어요?
          </p>
        ) : (
          <div className="flex flex-col gap-[1.2rem] items-center">
            <p className="text-[2rem] h-[2.8rem] font-pretendard font-normal leading-[1.6rem] flex items-center">
              {target}을 삭제하시겠어요?
            </p>
            <p className="text-gray3 font-pretendard text-[1.2rem] font-normal leading-[1.6rem] flex items-center">
              삭제하시면 다시 되돌릴 수 없어요.
            </p>
          </div>
        )}
        <div className="flex gap-[1.2rem] justify-center">
          <Button
            type="button"
            disabled={false}
            size="sm"
            variant="borderYellow"
            onClick={() => onConfirm(false)}
          >
            {isLogout || isWithDrawal ? "예" : "취소하기"}
          </Button>
          <Button
            type="button"
            disabled={false}
            size="sm"
            variant="yellow"
            onClick={() => onConfirm(true)}
          >
            {isLogout || isWithDrawal ? "아니오" : "삭제하기"}
          </Button>
        </div>
      </div>
    </BottomSheet>
  );
}
