import Header from "./Header/Header";
import HeaderButton from "./Header/HeaderButton";

interface previewProps {
  imgSrc: string;
  onClose: () => void;
  onConfirm: (v: string) => void;
}

export default function ProfilePreview(props: previewProps) {
  const { imgSrc, onClose, onConfirm } = props;
  return (
    <>
      <Header
        leftChild={<HeaderButton onClick={onClose}>취소</HeaderButton>}
        title="미리보기"
        rightChild={
          <HeaderButton onClick={() => onConfirm(imgSrc)}>완료</HeaderButton>
        }
      />
      <section className="absolute z-10 w-full h-full bg-black">
        <div className="absolute w-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          {/* 임의로 최대 높이 600px로 설정 */}
          <img className="w-full max-h-[60rem] object-cover" src={imgSrc} />
        </div>
      </section>
    </>
  );
}
