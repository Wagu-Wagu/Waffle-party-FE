import RightArrow from "../../assets/icons/RightArrow.svg?react";
interface myPageListCardProps {
  isArrow: boolean;
  activeData?: number | undefined;
  waguVersion?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function MyPageListCard(props: myPageListCardProps) {
  const { isArrow, activeData, onClick, children, waguVersion } = props;
  return (
    <section className="text-[1.6rem] h-[2.4rem] w-full text-white font-light leading-6 flex">
      <p className="flex items-center"> {children}</p>
      <div className="flex ml-auto gap-[1rem] items-center ">
        {activeData && <p>{activeData}</p>}
        {isArrow ? (
          <div onClick={onClick}>
            <RightArrow />{" "}
          </div>
        ) : (
          <p>{waguVersion}</p>
        )}
      </div>
    </section>
  );
}
