interface myReactProps {
  ott: string;
  title: string;
  content: string;
  writer: string;
  timestamp: string;
  postImage?: string[] | null;
}
export default function MyReactCard(props: { data: myReactProps }) {
  const { data } = props;
  return (
    <main className="inline-flex flex-col items-start justify-start w-full border-b bg-gray14 border-gray13">
      <section className="flex flex-col items-start self-stretch justify-start gap-[0.8rem] p-[2rem]">
        <section className="flex flex-col items-start justify-start gap-[0.8rem]">
          <div className="px-[0.6rem] py-[0.4rem] bg-gray12 rounded-[0.6rem] justify-start items-start gap-[1rem] inline-flex">
            <div className="text-white text-[1.1rem] font-normal font-['Pretendard'] leading-[1.2rem]">
              {data.ott}
            </div>
          </div>
        </section>
        <section className="inline-flex items-start self-stretch justify-start gap-[1.2rem]">
          <div className="inline-flex flex-col items-start justify-start gap-[0.8rem] grow shrink basis-0">
            <div className="self-stretch h-[5rem] flex-col justify-start items-start gap-[0.4rem] flex">
              <p className="self-stretch text-white text-[1.6rem] font-semibold font-['Pretendard'] leading-[2.4rem]">
                {data.title}
              </p>
              <p className="overflow-hidden text-ellipsis self-stretch text-gray9 text-[1.4rem] font-medium font-['Pretendard'] leading-[2.2rem]">
                {data.content}
              </p>
            </div>
            <span className="self-stretch text-gray9 text-[1.2rem] font-normal font-['Pretendard'] leading-[1.6rem]">
              {data.writer}.{data.timestamp}
            </span>
          </div>
          <div className="w-[7.6rem] h-[7.6rem]">
            {data.postImage && (
              <img
                className="w-full h-full rounded-[0.4rem]"
                src={data.postImage[0]}
              />
            )}
          </div>
        </section>
      </section>
    </main>
  );
}
