import Header from "../components/Header/Header";
import HeaderLoginButton from "../components/Header/HeaderLoginButton";
import LogoYellow from "./../assets/icons/LogoYellow.svg?react";

export default function HomePage() {
  return (
    <>
      <Header
        leftChild={
          <h1
            aria-label="Waffle Party"
            className="max-w-[8rem] max-h-[2.4rem] overflow-hidden flex items-center justify-center"
          >
            <div className="flex items-center justify-center w-full h-full">
              <LogoYellow />
            </div>
          </h1>
        }
        rightChild={<HeaderLoginButton />}
        noBorder
      />
      홈페이지
    </>
  );
}
