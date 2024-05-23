import Header from "../components/Header/Header";
import UserCard from "../components/card/UserCard";
import { userInfos } from "../mock/userInfo";
import MyPageListCard from "../components/card/MyPageListCard";
import MyPageSection from "../components/MyPage/MyPageSection";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

export default function MyPage() {
  const navigate = useNavigate();
  // interface HeaderProps {
  //   leftChild?: React.ReactNode;
  //   title?: string;
  //   rightChild?: React.ReactNode;
  //   noBorder?: boolean;
  // }
  const handleClickLogout = () => {
    // TODO logout api 연동
  };
  const handleClickEdit = () => {
    navigate("/profile/edit");
  };
  return (
    <>
      <Header title="마이" />
      <main className="flex flex-col items-center justify-center main-header-nav pt-[1rem]">
        <UserCard
          isMyPage={true}
          data={userInfos[1]}
          onClick={handleClickEdit}
        />
        <div className="px-[2rem] w-full h-full">
          <div className=" mt-[1rem] h-[0.2rem] w-full bg-gray13"></div>
          <section className="flex flex-col gap-[4rem] w-full mt-[2rem]">
            <div>
              <MyPageSection title="내활동">
                <Link to="/mypage/post">
                  <MyPageListCard activeData={4} isArrow={true}>
                    작성한 글
                  </MyPageListCard>
                </Link>
                <Link to="/mypage/comment">
                  <MyPageListCard activeData={3} isArrow={true}>
                    작성한 댓글
                  </MyPageListCard>
                </Link>
                {/* 다른 내활동 관련 항목들도 여기에 추가 */}
              </MyPageSection>
            </div>
            <MyPageSection title="디바이스 및 앱">
              <a
                target="_blank"
                href="https://wisesky915.notion.site/9be32afba5cc4f998c83f5d01dbe1a8c?pvs=4"
              >
                <MyPageListCard activeData={undefined} isArrow={true}>
                  업데이트 노트
                </MyPageListCard>
              </a>
              <MyPageListCard activeData={undefined} isArrow={false}>
                버전
              </MyPageListCard>
              {/* 다른 디바이스 및 앱 관련 항목들도 여기에 추가 */}
            </MyPageSection>
            <MyPageSection title="약관 및 정책">
              <MyPageListCard activeData={undefined} isArrow={true}>
                서비스 이용약관
              </MyPageListCard>
              <MyPageListCard activeData={undefined} isArrow={true}>
                개인 정보 처리 방침
              </MyPageListCard>
              {/* 다른 약관 및 정책 관련 항목들도 여기에 추가 */}
            </MyPageSection>
          </section>
          <section className="mt-[4.3rem] w-full justify-center flex gap-[3rem] text-gray8 text-[1.2rem] text-center font-Pretendard font-normal leading-4 underline">
            {/* <Link to={"/"} className="underline text-gray8">
              회원탈퇴
            </Link> */}
            <button
              className="underline text-gray8"
              onClick={handleClickLogout}
            >
              로그아웃
            </button>
          </section>
        </div>
      </main>
      <Navigation />
    </>
  );
}
