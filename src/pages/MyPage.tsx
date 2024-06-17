import Header from "../components/Header/Header";
import MyPageListCard from "../components/card/MyPageListCard";
import MyPageSection from "../components/MyPage/MyPageSection";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import { userProfileState } from "../recoil/userProfile";
import { useRecoilState } from "recoil";
import ProfileImageUploader from "../components/common/ProfileImageUploader";
import Pencil from "../assets/icons/PencilUnderLine.svg?react";
import BasicModal from "../components/modal/BasicModal";
import { useEffect, useRef, useState } from "react";
import ActionSheet from "../components/modal/ActionSheet";
import { optionState } from "../types/actionSheetOption";
import ProfilePreview from "../components/ProfilePreview";
import { userProfileType } from "../types/userProfile";
import { patchProfileImage } from "../lib/api/profile";
import useGetMyProfile from "../hooks/useGetMyProfile";
import Loading from "../components/Login/Loading";

export default function MyPage() {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false); //basic 모달창
  const [showAlbum, setShowAlbum] = useState(false); //action sheet 모달창
  const [showPreview, setShowPreview] = useState(false); //미리보기
  const [userProfile, setUserProfile] = useRecoilState(userProfileState);
  const [imageSrc, setImageSrc] = useState(""); //받아온 이미지
  const [newImage, setNewImage] = useState<string>(""); //새로 바꾼 이미지
  const [newFile, setNewFile] = useState<File | null>(null); //새로 바꾼 파일
  // action sheet state
  const [option, setOption] = useState<optionState>({
    type: "profile",
    isUserImage: false,
  });
  // basic modal state
  const [modalType, setModalType] = useState<string>("");
  const imageUploaderRef = useRef<HTMLInputElement>(null);

  /**
   * 마이페이지 정보 조회
   */
  const { userProfileData, isLoading } = useGetMyProfile();
  const baseURL = import.meta.env.VITE_USER_BASE_URL;
  const userId = userProfileData?.userInfo.userId;

  /**
   * 유저 데이터 recoil 업데이트
   */
  useEffect(() => {
    if (userProfileData) {
      setUserProfile(userProfileData);
      setImageSrc(
        userProfileData.userInfo?.userImage
          ? `${baseURL}${userProfileData.userInfo.userImage}`
          : "",
      );
    }
  }, [userProfileData]);

  /**
   * 파일을 선택했을때
   */
  const handleSelectImage = () => {
    if (imageUploaderRef.current) {
      imageUploaderRef.current.click();
    }
  };

  /**
   * 프로필 이미지 삭제
   */
  const handleRemoveImage = async () => {
    const res = window.confirm("삭제하시겠습니까?");
    if (res) {
      setUserProfile((prevUserProfile: userProfileType) => ({
        ...prevUserProfile,
        userInfo: {
          ...prevUserProfile.userInfo,
          userImage: "",
        },
      }));

      // TODO 파일 업로드 api
      await patchProfileImage(newFile);
      setImageSrc("");
      setShowAlbum(false);
    }
  };

  /**
   * 프로필 이미지 설정
   * @param src
   */
  const setProfileImage = async () => {
    setUserProfile((prevUserProfile: userProfileType) => ({
      ...prevUserProfile,
      userInfo: {
        ...prevUserProfile.userInfo,
        userImage: `${baseURL}${newFile?.name}`,
      },
    }));

    // TODO 파일 업로드 api
    await patchProfileImage(newFile);
    setImageSrc(newImage);
    setShowPreview(false);
  };

  const handleClickLogout = () => {
    setIsShow((prev) => !prev);
  };

  const handleClickEdit = () => {
    navigate("/profile/edit");
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <Header title="마이" />
      {showPreview && newImage && (
        <ProfilePreview
          // 미리보기에는 새로운 이미지 띄우기
          imgSrc={newImage}
          onClose={() => {
            setShowPreview(false);
          }}
          onConfirm={setProfileImage}
        />
      )}
      <main className="flex flex-col items-center justify-center main-header-nav pt-[1rem]">
        <section className="flex w-full py-[1.3rem] pl-[2rem] gap-[1.5rem]">
          <ProfileImageUploader
            imageSrc={imageSrc}
            // 사진을 골랐을때
            onSelect={(file: File, src: string) => {
              setShowPreview(true);
              setShowAlbum(false);
              // 사진 고르면 새로운 사진으로 업데이트
              setNewFile(file);
              setNewImage(src);
            }}
            // 프로필 사진을 클릭하면 state에 맞는 action sheet
            onClick={() => {
              setOption((prevOption) => ({
                ...prevOption,
                isUserImage: !!userProfile?.userInfo?.userImage,
              }));
              setShowAlbum(true);
            }}
            ref={imageUploaderRef}
          />
          <div className="flex flex-col gap-[0.6rem] justify-center">
            <div className="flex gap-[0.6rem]">
              <p className="text-[1.6rem] font-bold leading-[2.4rem] text-white">
                {userProfile?.userInfo?.nickName || ""}
              </p>
              <div className="cursor-pointer" onClick={handleClickEdit}>
                <Pencil />
              </div>
            </div>
            <span className="text-gray7 text-[1.2rem] font-normal leading-[1.6rem]">
              {userProfile?.userInfo?.email || ""}
            </span>
          </div>
        </section>
        <div className="px-[2rem] w-full h-full">
          <div className="mt-[1rem] h-[0.2rem] w-full border-b border-gray13"></div>
          <section className="flex flex-col gap-[4rem] w-full mt-[2rem]">
            <div>
              <MyPageSection title="내활동">
                <Link to={`/mypage/post/${userId}`}>
                  <MyPageListCard
                    activeData={userProfile?.userInfo?.postCount}
                    isArrow={true}
                  >
                    작성한 글
                  </MyPageListCard>
                </Link>
                <Link to={`/mypage/comment/${userId}`}>
                  <MyPageListCard
                    activeData={userProfile?.userInfo?.commentCount}
                    isArrow={true}
                  >
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
              <MyPageListCard
                waguVersion={userProfile?.waguVersion}
                activeData={undefined}
                isArrow={false}
              >
                버전
              </MyPageListCard>
            </MyPageSection>
            <MyPageSection title="약관 및 정책">
              <Link to="/terms">
                <MyPageListCard activeData={undefined} isArrow={true}>
                  서비스 이용약관
                </MyPageListCard>
              </Link>
              <Link to="/privacy-policy">
                <MyPageListCard activeData={undefined} isArrow={true}>
                  개인 정보 처리 방침
                </MyPageListCard>
              </Link>
            </MyPageSection>
          </section>
          <section className="mt-[4.3rem] w-full justify-center flex gap-[3rem] text-gray8 text-[1.2rem] text-center font-Pretendard font-normal leading-4 underline">
            <button
              className="underline text-gray8"
              onClick={() => {
                setIsShow(true);
                setModalType("회원탈퇴");
              }}
            >
              회원탈퇴
            </button>
            <button
              className="underline text-gray8"
              onClick={() => {
                setIsShow(true);
                setModalType("로그아웃");
              }}
            >
              로그아웃
            </button>
          </section>
        </div>
      </main>
      {!showPreview && <Navigation />}
      {/* 로그아웃 모달 */}
      {isShow && (
        <BasicModal
          isShow={isShow}
          isLogout={modalType === "로그아웃"}
          isWithDrawal={modalType === "회원탈퇴"}
          onConfirm={handleClickLogout}
          setModalActive={setIsShow}
        />
      )}
      {/*  */}
      {showAlbum && (
        <ActionSheet
          option={option}
          isShow={showAlbum}
          onSelectImage={handleSelectImage}
          onRemoveImage={handleRemoveImage}
          onClose={() => setShowAlbum(false)}
          setModalActive={setShowAlbum}
        />
      )}
    </>
  );
}
