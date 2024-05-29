import React, { useEffect, useState, forwardRef, Ref } from "react";

interface modalProps {
  // post, comment
  isShow?: boolean;
  setModalActive: (active: boolean) => void;
  // onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
  children?: React.ReactNode;
}

const BottomSheet = forwardRef((props: modalProps, ref: Ref<HTMLElement>) => {
  const { isShow, children, setModalActive } = props;
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

  const handleCloseModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target === e.currentTarget) {
      e.stopPropagation();
      setIsVisible(false);
      setModalActive(false); // 모달을 닫음
    }
  };

  return (
    <>
      {isVisible && (
        <section
          className={`fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-70 flex justify-center items-end`}
          ref={ref}
          onClick={handleCloseModal}
        >
          <div className="max-w-[50rem] w-full px-[0.8rem]">
            <div className={`w-full ${modalClassName}`}>
              {/* 모달 내용 */}
              {isShow && children}
            </div>
          </div>
        </section>
      )}
    </>
  );
});

export default BottomSheet;
