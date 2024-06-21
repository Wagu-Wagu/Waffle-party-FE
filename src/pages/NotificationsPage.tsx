import Header from "../components/Header/Header";
import NotiCard from "../components/card/NotiCard";
import EmptyList from "../components/common/EmptyList";
import AlertCircleError from "../assets/icons/AlertCirlcleError.svg?react";
import Navigation from "../components/Navigation/Navigation";
import { useNavigate } from "react-router-dom";
import useGetNotification from "../hooks/useGetNotification";
import { useRecoilState } from "recoil";
import { notificationState } from "../recoil/notificationState";
import { useEffect } from "react";
import { getNotification } from "../lib/api/notification";
import Loading from "../components/Login/Loading";
import { notiElementType } from "../types/notification";
export default function NotificationsPage() {
  const [notification, setNotification] = useRecoilState(notificationState);
  const nav = useNavigate();

  const { notificationData, isLoading } = useGetNotification();

  useEffect(() => {
    console.log(notificationData);
    if (notificationData) {
      setNotification(notificationData);
    }
  }, [notificationData]);

  /**
   * @param notiEl
   */
  const handleClickNoti = async (notiEl: notiElementType) => {
    console.log(notiEl);
    // 소식을 확인하면 api 요청해서 소식 읽음으로 변경
    const res = await getNotification(notiEl.alertId);
    if (res.success) {
      // 해당 게시글로 이동
      nav(`/post-detail/${notiEl.postId}`);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <Header title="내소식" />
      <main className="h-screen-minus-12.8 relative">
        {notification && notification.length > 0 ? (
          <div className="flex flex-col mt-[4.6rem]">
            {notification.map(({ getMyNewsResponseVOs }) =>
              getMyNewsResponseVOs.map((notiEl, index) => (
                <NotiCard
                  data={notiEl}
                  key={index}
                  onClick={(el: notiElementType) => handleClickNoti(el)}
                />
              )),
            )}
          </div>
        ) : (
          <div className="absolute transform -translate-x-1/2 top-1/2 left-1/2 -trnaslate-y-1/2">
            <EmptyList
              icon={<AlertCircleError />}
              mainText="아직 내 소식이 없어요."
              subText={
                <>
                  <p>하단의 글 작성을 통해</p>
                  <p>파티원들과 소통을 시작해보세요!</p>
                </>
              }
              // subText={`하단의 글 작성을 통해\n파티원들과 소통을 시작해보세요!`}
            />
          </div>
        )}
      </main>
      <Navigation />
    </>
  );
}
