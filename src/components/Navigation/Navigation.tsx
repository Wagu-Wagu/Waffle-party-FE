import HomeIcon from "./../../assets/icons/HomeIcon.svg?react";
import PencilIcon from "./../../assets/icons/PencilIcon.svg?react";
import BellIcon from "./../../assets/icons/BellIcon.svg?react";
import ProfileIcon from "./../../assets/icons/ProfileIcon.svg?react";
import NavButton from "./NavButton";

export default function Navigation() {
  return (
    <nav className="z-10 fixed bottom-0 w-full max-w-[50rem] min-w-[36rem] bg-gray15">
      <ul className="flex justify-between border border-gray13 text-gray9 pt-[0.4rem] pb-[2.9rem] px-[0.8rem]">
        <li>
          <NavButton path={"/"}>
            <HomeIcon />홈
          </NavButton>
        </li>
        <li>
          <NavButton path={"/post-create"}>
            <PencilIcon />글 작성
          </NavButton>
        </li>
        <li>
          <NavButton path={"/notifications"}>
            <BellIcon />내 소식
          </NavButton>
        </li>
        <li>
          <NavButton path={"/mypage"}>
            <ProfileIcon />
            마이
          </NavButton>
        </li>
      </ul>
    </nav>
  );
}
