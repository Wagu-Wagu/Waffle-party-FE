import { useState } from "react";
import Button from "../components/common/Button";
import CheckBox from "../components/common/CheckBox";
import BasicLayout from "../layout/BasicLayout";

export default function HomePage() {
  const handleClickBtn = () => {
    window.alert("버튼 클릭됨");
  };
  const [check, setCheck] = useState(false);
  const handleClickCheckBox = () => {
    setCheck((prev) => !prev);
  };
  return (
    <>
      <BasicLayout>
        <div className="text-sm">홈페이지 입니다.</div>
        <Button
          className=" text-danger bg-primary"
          type="button"
          disabled={false}
          size="xs"
          radius="base"
          onClick={handleClickBtn}
        >
          버튼
        </Button>
        <Button
          className="border border-success text-success text-subtitle"
          type="button"
          disabled={false}
          size="base"
          radius="base"
          onClick={handleClickBtn}
        >
          버튼
        </Button>
        <br />
        <div className="text-title">비활성화 버튼</div>
        <Button
          className="text-danger bg-primary"
          type="button"
          disabled={true}
          size="base"
          radius="sm"
          onClick={handleClickBtn}
        >
          버튼
        </Button>
        <Button
          className="text-base text-gray13 bg-success"
          type="button"
          disabled={false}
          size="sm"
          radius="xs"
          onClick={handleClickBtn}
        >
          버튼
        </Button>
        <CheckBox checked={check} onClick={handleClickCheckBox}>
          체크박스
        </CheckBox>
      </BasicLayout>
    </>
  );
}
