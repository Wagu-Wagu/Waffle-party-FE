import RightArrow from "../../assets/icons/RightArrow.svg?react";
interface myPageListCardProps {
  isArrow: boolean;
  activeData?: number | undefined;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function MyPageListCard(props: myPageListCardProps) {
  const { isArrow, activeData, onClick, children } = props;
  return (
    <section className="text-[1.6rem] w-[32rem] text-white font-light leading-6 flex">
      <p className="flex items-center"> {children}</p>
      <div className="flex ml-auto gap-[1rem] items-center ">
        {activeData && <p>{activeData}</p>}
        {isArrow ? (
          <div onClick={onClick}>
            <RightArrow />{" "}
          </div>
        ) : (
          <p>1.1.0</p>
        )}
      </div>
    </section>
  );
}
