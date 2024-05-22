import BottomSheet from "./BottomSheet";
import BottomSheetHeader from "./BottomSheetHeader";
import Button from "../common/Button";
import { forwardRef } from "react";

interface modalProps {
  isShow: boolean;
  isLogout: boolean;
  target?: string;
  onConfirm: (v: boolean) => void;
  children?: React.ReactNode;
}

const BasicModal = forwardRef<HTMLElement, modalProps>(
  (props: modalProps, ref) => {
    const { isShow, isLogout, target, onConfirm } = props;
    return (
      <BottomSheet isShow={isShow} ref={ref}>
        <BottomSheetHeader />
        <div className="flex flex-col gap-[3rem] bg-gray14 px-[2rem] py-[2.3rem] text-white">
          {isLogout ? (
            <p className="text-[2rem] h-[2.8rem] text-center font-pretendard font-normal leading-[1.6rem]">
              로그아웃 하시겠어요?
            </p>
          ) : (
            <div className="flex flex-col gap-[1.2rem]">
              <p className="text-[2rem] h-[2.8rem] text-center font-pretendard font-normal leading-[1.6rem]">
                {target}을 삭제하시겠어요?
              </p>
              <p className="text-gray3 text-center font-pretendard text-[1.2rem] font-normal leading-[1.6rem]">
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
              취소하기
            </Button>
            <Button
              type="button"
              disabled={false}
              size="sm"
              variant="yellow"
              onClick={() => onConfirm(true)}
            >
              삭제하기
            </Button>
          </div>
        </div>
      </BottomSheet>
    );
  },
);

export default BasicModal;
