import { useState } from "react";
import ListModal from "../components/common/ListModal";

export default function HomePage() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const clickModal = () => {
    // window.alert("dd");
    setIsBottomSheetOpen((prev) => !prev);
  };

  return (
    <>
      <ListModal
        isShow={isBottomSheetOpen}
        type="comment"
        onClick={clickModal}
      />
      <div onClick={clickModal}>Open Modal</div>
    </>
  );
}
