import Header from "../components/Header/Header";
import NotiCard from "../components/card/NotiCard";
import EmptyList from "../components/common/EmptyList";
import { notiData } from "../mock/notification";
import AlertCircleError from "../assets/icons/AlertCirlcleError.svg?react";
import Navigation from "../components/Navigation/Navigation";
import { useNavigate } from "react-router-dom";
export default function NotificationsPage() {
  const nav = useNavigate();

  /**
   * response로 userId, postId 올 것 같아서 가져다 쓰면 될 것 같습니다!
   * @param notiEl
   */
  const handleClickNoti = (notiEl: any) => {
    console.log(notiEl);
    if (notiEl.type === "댓글") {
      // nav(`/post-detail/${userId}`);
    } else {
      // nav(`/post-detail/${postId}`);
    }
  };
  console.log(notiData.data);
  return (
    <>
      <Header title="내소식" />
      <main className="h-screen-minus-12.8 relative">
        {notiData.data.length > 0 ? (
          <div className="flex flex-col gap-[1.6rem] mt-[4.6rem]">
            {notiData.data.map((notiData, index) => (
              <NotiCard
                data={notiData}
                key={index}
                onClick={(el: any) => handleClickNoti(el)}
              />
            ))}
          </div>
        ) : (
          <div className="absolute transform -translate-x-1/2 top-1/2 left-1/2 -trnaslate-y-1/2">
            <EmptyList
              icon={<AlertCircleError />}
              mainText="아직 내 소식이 없어요."
              subText={`하단의 글 작성을 통해\n파티원들과 소통을 시작해보세요!`}
            />
          </div>
        )}
      </main>
      <Navigation />
    </>
  );
}
