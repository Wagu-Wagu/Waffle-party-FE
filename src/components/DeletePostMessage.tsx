import EmptyList from "./common/EmptyList";
import AlertCircleError from "../assets/icons/AlertCirlcleError.svg?react";
import Button from "./common/Button";

export default function DeletePostMessage({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-screen-minus-12.8">
      <EmptyList
        icon={<AlertCircleError />}
        mainText="해당 게시글은 삭제되어 볼 수 없어요."
      />
      <Button
        type="button"
        disabled={false}
        size="base"
        variant="yellow"
        onClick={onClick}
      >
        이전 화면
      </Button>
    </div>
  );
}
