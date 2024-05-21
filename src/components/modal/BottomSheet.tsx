import { useEffect, useState } from "react";

interface modalProps {
  // post, comment
  isShow: boolean;
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
  children?: React.ReactNode;
}

export default function BottomSheet(props: modalProps) {
  const { isShow, onClick, children } = props;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let modalTimer: NodeJS.Timeout;

    if (isShow) {
      setIsVisible(true);
    } else {
      modalTimer = setTimeout(() => setIsVisible(false), 250);
    } // 0.25초뒤에 없어짐

    return () => {
      if (modalTimer !== undefined) {
        clearTimeout(modalTimer);
      }
    };
  }, [isShow]);

  const modalClassName = isVisible ? "animate-fade-in" : "animate-fade-out";

  return (
    <>
      {isVisible && (
        <section
          className={`fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-70 flex justify-center items-end`}
          onClick={onClick}
        >
          <div className="max-w-[50rem] w-full px-[0.8rem]">
            <button className={`w-full ${modalClassName}`}>
              {/* 모달 내용 */}
              {isShow && children}
            </button>
          </div>
        </section>
      )}
    </>
  );
}
