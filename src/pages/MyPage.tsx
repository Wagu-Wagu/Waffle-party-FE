import Header from "../components/Header/Header";
import MyPageListCard from "../components/card/MyPageListCard";
import MyPageSection from "../components/MyPage/MyPageSection";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import { useRecoilState } from "recoil";
import { userProfileState } from "../recoil/userProfile";

import ProfileImageUploader from "../components/common/ProfileImageUploader";
import Pencil from "../assets/icons/PencilUnderLine.svg?react";
import BasicModal from "../components/modal/BasicModal";
import { useEffect, useRef, useState } from "react";
import ActionSheet from "../components/modal/ActionSheet";
import { optionState } from "../types/actionSheetOption";
import ProfilePreview from "../components/ProfilePreview";
import { userProfileType } from "../types/userProfile";

export default function MyPage() {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const [showAlbum, setShowAlbum] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [userProfile, setUserProfile] = useRecoilState(userProfileState);
  const [image, setImage] = useState(userProfile.userImage);
  const [newImage, setNewImage] = useState<string | null>("");
  const [option, setOption] = useState<optionState>({
    type: "profile",
    isUserImage: false,
  });
  const imageUploaderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setImage(userProfile.userImage);
  }, [userProfile]);

  const handleSelectImage = () => {
    if (imageUploaderRef.current) {
      imageUploaderRef.current.click();
    }
  };

  const handleRemoveImage = () => {
    const res = window.confirm("삭제하시겠습니까?");
    if (res) {
      setUserProfile((prevUserProfile: userProfileType) => ({
        ...prevUserProfile,
        userImage: null,
      }));
      setShowAlbum(false);
    }
  };

  const setProfileImage = () => {
    setUserProfile((prevUserProfile: userProfileType) => ({
      ...prevUserProfile,
      userImage: newImage,
    }));
    setShowPreview(false);
  };

  const handleClickLogout = () => {
    setIsShow((prev) => !prev);
  };

  const handleClickEdit = () => {
    navigate("/profile/edit");
  };

  return (
    <>
      <Header title="마이" />
      {showPreview && newImage && (
        <ProfilePreview
          imgSrc={newImage}
          onClose={() => {
            setNewImage(null);
            setShowPreview(false);
          }}
          onConfirm={() => {
            setProfileImage();
          }}
        />
      )}
      <main className="flex flex-col items-center justify-center main-header-nav pt-[1rem]">
        <section className="flex w-full py-[1.3rem] pl-[2rem] gap-[1.5rem]">
          <ProfileImageUploader
            imageSrc={userProfile.userImage}
            onSelect={(src) => {
              setShowPreview(true);
              setShowAlbum(false);
              setNewImage(src);
            }}
            onClick={() => {
              setOption((prevOption) => ({
                ...prevOption,
                isUserImage: !!userProfile.userImage,
              }));
              setShowAlbum(true);
            }}
            ref={imageUploaderRef}
          />
          <div className="flex flex-col gap-[0.6rem] justify-center">
            <div className="flex gap-[0.6rem]">
              <p className="text-[1.6rem] font-bold leading-[2.4rem] text-white">
                {userProfile.nickname}
              </p>
              <div onClick={handleClickEdit}>
                <Pencil />
              </div>
            </div>
            <span className="text-gray7 text-[1.2rem] font-normal leading-[1.6rem]">
              {userProfile.kakaoId}
            </span>
          </div>
        </section>
        <div className="px-[2rem] w-full h-full">
          <div className="mt-[1rem] h-[0.2rem] w-full border-b border-gray13"></div>
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
            </MyPageSection>
            <MyPageSection title="약관 및 정책">
              <MyPageListCard activeData={undefined} isArrow={true}>
                서비스 이용약관
              </MyPageListCard>
              <MyPageListCard activeData={undefined} isArrow={true}>
                개인 정보 처리 방침
              </MyPageListCard>
            </MyPageSection>
          </section>
          <section className="mt-[4.3rem] w-full justify-center flex gap-[3rem] text-gray8 text-[1.2rem] text-center font-Pretendard font-normal leading-4 underline">
            <button
              className="underline text-gray8"
              onClick={() => setIsShow((prev) => !prev)}
            >
              로그아웃
            </button>
          </section>
        </div>
      </main>
      {!showPreview && <Navigation />}
      {isShow && (
        <BasicModal
          isShow={isShow}
          isLogout={true}
          onConfirm={handleClickLogout}
        />
      )}
      {showAlbum && (
        <ActionSheet
          option={option}
          isShow={showAlbum}
          onSelectImage={handleSelectImage}
          onRemoveImage={handleRemoveImage}
          onClose={() => setShowAlbum(false)}
        />
      )}
    </>
  );
}
