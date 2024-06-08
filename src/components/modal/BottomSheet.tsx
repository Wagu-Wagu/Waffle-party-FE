import React, { useEffect, useState } from "react";

interface modalProps {
  isShow?: boolean;
  setModalActive: (active: boolean) => void;
  children?: React.ReactNode;
}

export default function BottomSheet(props: modalProps) {
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
          onClick={handleCloseModal}
        >
          <div className="max-w-[50rem] w-full">
            <div className={`w-full ${modalClassName}`}>
              {/* 모달 내용 */}
              {isShow && children}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
