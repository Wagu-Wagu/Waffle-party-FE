import { useFormattedDate } from "../../hooks/useFormattedDate";
import { COMMENT_TYPE, COMMENT_TYPE_KOREAN } from "../../types/enum";

export default function NotiCard(props: any) {
  const { data, onClick } = props;
  const title = data.content;
  const contentType = data.alertType === COMMENT_TYPE.CO ? "글" : "댓글";
  const formatTitle = title.length > 20 ? `${title.slice(0, 20)}...` : title;

  // COMMENT, REPLY 한글 변환
  const commentTypeKorean = COMMENT_TYPE_KOREAN[data.alertType as COMMENT_TYPE];

  const setBorderClass = () => {
    // 내소식을 읽었으면
    if (data.isRead) {
      return "text-gray10 border-gray10";
    }
    // 내소식을 읽지 않았으면
    return "text-red5 border-red5";
  };

  const formattedDate = useFormattedDate(new Date());

  return (
    <main
      className="py-[1.6rem] px-[2rem] bg-gray14  border-b-2 border-gray13"
      onClick={() => onClick(data)}
    >
      <div className="flex items-center gap-[2rem] ">
        <section
          className={`w-[5.2rem] px-[0.8rem] py-[0.4rem] rounded-[1.8rem] border ${setBorderClass()} self-start`}
        >
          <div className="text-center whitespace-nowrap  text-[1.1rem] font-normal font-['Pretendard'] leading-[1.2rem]">
            {commentTypeKorean}
          </div>
        </section>

        <section className="flex flex-col gap-[0.4rem] ">
          <div className="text-white text-[1.6rem] font-normal font-['Pretendard'] leading-[2.4rem]">
            <span>[{formatTitle}]</span>
            <span>&nbsp;{contentType}에&nbsp;</span>
            <span>
              {commentTypeKorean}({data.newAlertCount})이 달렸습니다.
            </span>
          </div>
          <span className="flex gap-[1.4rem] text-gray9 text-[1.2rem] font-semibold font-['Pretendard'] leading-[1.2rem]">
            {formattedDate}
          </span>
        </section>
      </div>
    </main>
  );
}
