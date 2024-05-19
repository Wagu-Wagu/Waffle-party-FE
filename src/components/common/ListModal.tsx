import { useEffect, useState } from "react";

interface modalProps {
  // post, comment
  isShow: boolean;
  type: string;
  onClick?: () => void;
}

export default function BottomSheet(props: modalProps) {
  const { isShow, type, onClick } = props;
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
    <>
      {isVisible && (
        <section
          className={`fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-30 flex justify-center items-end`}
          onClick={onClick}
        >
          <div className="max-w-[50rem] w-full px-[0.8rem] pb-[3.4rem]">
            <button className={`w-full ${modalClassName}`}>
              {/* 모달 내용 */}
              <div className="w-full">
                {isShow && (
                  <div className="flex flex-col gap-[0.8rem] ">
                    <ul className="w-full bg-white rounded-xl">
                      {options.map((option, index) => (
                        <li
                          className="w-full h-[5.6rem] py-[1.7rem] text-[1.7rem] cursor-pointer"
                          key={index}
                          onClick={option.action}
                        >
                          {option.label}
                        </li>
                      ))}
                    </ul>
                    <ul className="bg-white rounded-xl">
                      <li className="h-[5.6rem] py-[1.7rem] text-[1.7rem] cursor-pointer">
                        취소
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </button>
          </div>
        </section>
      )}
    </>
  );
}
