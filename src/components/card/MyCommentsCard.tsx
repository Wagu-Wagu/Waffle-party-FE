import MiniChip from "../common/MiniChip";
import "../../index.css";
export default function MyCommentsCard(props: any) {
  const { data, onClick } = props;
  console.log(data);
  return (
    <>
      <div
        className=" h-full border-b border-gray13 p-[2rem] flex flex-col gap-[0.8rem]"
        onClick={() => onClick(data)}
      >
        <p className="comment-overflow text-[1.6rem] font-semibold leading-[2.4rem] text-white">
          {data.comment}
        </p>

        <div className="flex items-start gap-[0.8rem]">
          <div className="flex whitespace-nowrap">
            <MiniChip ott={data.ott} />
          </div>
          <p className="overflow-hidden whitespace-nowrap text-ellipsis text-[1.4rem] font-medium leading-[2.2rem] text-gray9">
            {data.title}
          </p>
        </div>
        <span className="text-[1.2rem] font-normal leading-[1.6rem] text-gray9">
          {data.timeStamp}
        </span>
      </div>
    </>
  );
}
