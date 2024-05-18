import Button from "../components/Button";

export default function HomePage() {
  const handleClickBtn = () => {
    window.alert("버튼 클릭됨");
  };
  return (
    <>
      <div className="text-sm">홈페이지 입니다.</div>
      <Button
        className={"b-main"}
        type="button"
        disabled={false}
        size="xs"
        onClick={handleClickBtn}
      >
        버튼
      </Button>
      <Button
        className={"f-main"}
        type="button"
        disabled={false}
        size="base"
        onClick={handleClickBtn}
      >
        버튼
      </Button>
      <div>비활성화 버튼</div>
      <Button
        className={"f-main"}
        type="button"
        disabled={true}
        size="base"
        onClick={handleClickBtn}
      >
        버튼
      </Button>
      <Button
        className={"f-sub"}
        type="button"
        disabled={false}
        size="sm"
        onClick={handleClickBtn}
      >
        버튼
      </Button>
      <div className="text-base">dddd</div>
    </>
  );
}
