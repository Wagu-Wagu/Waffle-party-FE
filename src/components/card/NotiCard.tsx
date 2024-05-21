interface notiProps {
  type: string;
  title: string;
  writer: string;
  timestamp: string;
}
export default function NotiCard(props: { data: notiProps }) {
  const { data } = props;

  return (
    <main className="py-[1.6rem] box-border bg-gray14 border-2 border-b-gray13">
      <div className="px-[2rem] flex gap-[2rem]">
        <section className=" h-[2rem] px-[0.8rem] py-[0.4rem] rounded-[1.8rem] border border-red5 justify-center items-center gap-2.5 inline-flex">
          <div className="text-center text-red5 text-[1.1rem] font-normal font-['Pretendard'] leading-[1.2rem]">
            {data.type}
          </div>
        </section>
        <section className="flex flex-col gap-[0.3rem] h-[3.9rem]">
          <p className="text-white text-[1.6rem] font-normal font-['Pretendard'] leading-[2.4rem]">
            {data.title}
          </p>
          <div className="flex gap-[1.4rem] text-gray9 text-[1.1rem] font-semibold font-['Pretendard'] leading-[1.2rem]">
            <p>{data.writer}</p>
            <p>{data.timestamp}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
