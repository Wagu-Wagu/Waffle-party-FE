export default function NotiCard(props: any) {
  const { data, onClick } = props;
  const title = data.type === "댓글" ? data.title : data.comment;
  const content = data.type === "댓글" ? "글" : "댓글";
  const formatTitle = title.length > 20 ? `${title.slice(0, 20)}...` : title;
  const setBorderClass = () => {
    if (data.isCheck) {
      return "text-gray10 border-gray10";
    }
    return "text-red5 border-red5";
  };

  return (
    <main
      className="py-[1.6rem] px-[2rem] bg-gray14  border-b-2 border-gray13"
      onClick={() => onClick(data)}
    >
      <div className="flex items-center justify-center gap-[2rem] ">
        {/* <div className="self-start "> */}
        <section
          className={`w-[5.2rem] px-[0.8rem] py-[0.4rem] rounded-[1.8rem] border ${setBorderClass()} self-start`}
        >
          <div className="text-center whitespace-nowrap  text-[1.1rem] font-normal font-['Pretendard'] leading-[1.2rem]">
            {data.type}
          </div>
        </section>
        {/* </div> */}

        <section className="flex flex-col gap-[0.4rem] ">
          <div className="text-white text-[1.6rem] font-normal font-['Pretendard'] leading-[2.4rem]">
            <span>[{formatTitle}]</span>
            <span>&nbsp;{content}에&nbsp;</span>
            <span>
              {data.type}({data.count})이 달렸습니다.
            </span>
          </div>
          <span className="flex gap-[1.4rem] text-gray9 text-[1.2rem] font-semibold font-['Pretendard'] leading-[1.2rem]">
            {data.timestamp}
          </span>
        </section>
      </div>
    </main>
  );
}
