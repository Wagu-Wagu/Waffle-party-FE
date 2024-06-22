<div>
<div align="center">
    <img src="https://github.com/Wagu-Wagu/Waffle-party-FE/assets/111286497/e3c15c59-fcee-466c-85da-d425bf9bef77"/><h1><b>Waffle Party</b></h1>
</div>

> OTT 같이 볼 사람이 필요할 때, Waffle Party

<br/>
<h2>📢 서비스 소개</h2>
<h3>배경</h3>
OTT를 같이 보면서 채팅할 수 있는 그룹시청 서비스가 꾸준히 이용되고 있고, <b>그룹 시청자의 84%</b>는 다음카페, 트위터 등 <b>온라인에서 같이 볼 사람을 구한다</b>고 답했습니다.

<h3>기존 채널의 문제점</h3>
다음카페: 등업한 회원에게만 구인 글이 보입니다.<br/>
트위터: 나를 팔로우한 유저에게만 구인 글이 보입니다.

<h3>해결</h3>
기존 채널의 폐쇄성에 주목하여, 별도의 등업절차 혹은 인맥과 관계없이 참여 가능한 <b>개방형 커뮤니티 와플파티</b>를 만들었습니다.
<br/><br/>
<img src="https://github.com/Wagu-Wagu/Waffle-party-BE/assets/77230391/805c5883-8785-46fe-a1d7-802499519a05"/>

<br/>
<h2>🏠 FE 팀원</h2>
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/boeunLee">
        <img
          src="https://github.com/Wagu-Wagu/Waffle-party-FE/assets/111286497/f29f8608-90e1-4bba-a23f-a5a895807a72"
          width="100px;"
        /><br />이보은(FE)</a><br />
    </td>
    <td align="center">
      <a href="https://github.com/Stilllee">
       <br />이에스더(FE)</a><br />
    </td>
  </tr>
</table>
<br/>
<h2>⚙️ 기술스택</h2>

![React](https://badgen.net/badge/React/v18.2.0/61DAFB)
![Vite](https://badgen.net/badge/Vite/v5.2.0/646CFF)
![TypeScript](https://badgen.net/badge/TypeScript/v5.2.2/3178C6)
![TailwindCss](https://badgen.net/badge/Tailwind/v3.4.3/DB7093?)
![React-Router](https://badgen.net/badge/React-Router/v6.23.1/CA4245)
![SWR](https://badgen.net/badge/SWR/v2.2.5/FF4154)
![Axios](https://badgen.net/badge/Axios/v1.7.1/5A29E4?)
![Recoil](https://badgen.net/badge/Recoil/v0.7.7/3578E5)
![Eslint](https://badgen.net/badge/Eslint/v8.57.0/4B32C3?)
![Prettier](https://badgen.net/badge/Prettier/v3.2.5/F7B93E?)
<br/>

<h2>😊 서비스 주 기능</h2>
<h4>필터칩</h4>
<img src="https://github.com/Wagu-Wagu/Waffle-party-FE/assets/111286497/d6856de1-ff12-4404-80c5-a3c35f7a1f0e"/>
<h4>댓글&비밀댓글</h4>
<img src="https://github.com/Wagu-Wagu/Waffle-party-FE/assets/111286497/4b9acd5a-d681-4021-85d8-35df9577cce9"/>
<h4>내소식</h4>
<img src="https://github.com/Wagu-Wagu/Waffle-party-FE/assets/111286497/26c631b6-0796-4038-8ba3-e173e9c65519"/>

<br/>
<h2>💻 트러블슈팅</h2>
<details>
	<summary><b>댓글, 답댓글 등록&수정&삭제</b></summary>
  댓글과 답댓글 데이터가 변경될 때, 사용자에게 즉각적으로 변경된 내용을 반영하는 것이 중요합니다. 
  
  >이를 위해 데이터가 변경되었을 때 새로고침을 요구하지 않고, SWR 라이브러리에서 제공하는 <b>`mutate 함수`</b>를 사용했습니다.

<b>`mutate함수`</b>는 서버의 데이터를 최신화시키고, SWR에서 fetch한 값으로 데이터를 다시 변경합니다.

<br/>
<pre>const useGetPostDetail = (postId: string) => {
  const { data, mutate, isLoading } = useSWR...

return {
postDetailData: data?.data,
isLoading: isLoading,
refetch: mutate,
};
};</pre>

<pre>useEffect(() => {
if (refresh) {
refetch(); // 데이터 갱신을 위한 함수 호출
setRefresh(false); // 갱신 후 상태 초기화
}
}, [refresh, refetch]);</pre>
</details>
<details>
	<summary><b>웹 성능을 저하시킬 수 있는 큰 파일 크기로 인한 경고</b></summary>
<img src="https://github.com/Wagu-Wagu/Waffle-party-FE/assets/111286497/1bff9ea5-27b4-4264-807c-2b4bfa34e638"/>

> 웹 페이지의 초기 로드 시간은 페이지의 성능에 큰 영향을 미치므로, 큰 파일을 최소화하기 위해 `lazy`를 사용하여 <b>청크 크기</b>를 줄였습니다.

1. 기존에는 Index.js에 모두 담겨있었습니다. 이를 lazy를 사용하여 라우팅으로 분리된 각 페이지를 split 하였습니다.
2. Suspense는 컴포넌트 로딩중 fallback이 발생할때 보여집니다.

- 개선된 모습
<img alt="chunk개선" src="https://github.com/Wagu-Wagu/Waffle-party-FE/assets/111286497/c03a23ab-3c94-4e4d-8aae-7610b2b98ed4">
</details>
<details>
	<summary><b>딥링크</b></summary>
서비스의 디자인은 다크 모드를 기본으로 제작되었습니다. 하지만 삼성 브라우저의 다크 모드 접속 시, 다음과 같은 문제가 발생하였습니다.

1. `prefers-color-scheme CSS` 기능을 지원하지 않아 다크 모드를 감지하지 못하는 문제가 발생했습니다.
2. 삼성 브라우저 자체의 알고리즘으로 색상이 변경되어, 의도하지 않은 디자인이 표시되었습니다.

> 이러한 문제를 해결하기 위해 삼성 브라우저에서 접속할 경우, <b>`딥링크`를 사용하여 크롬 브라우저로 열리도록</b> 수정하였습니다.

<pre>const userAgent = navigator.userAgent;
const isSamsung = userAgent.includes("SamsungBrowser");

const url = window.location.href;

// 삼성 브라우저일 경우 root 요소에 samsung 클래스 추가
if (isSamsung) {
  window.alert("와플파티는 크롬에 최적화되어있습니다.\n크롬으로 이동할까요?",);
  // window.location.href를 변경하여 리디렉션
  const url = window.location.href;
  // http 혹은 https
  const protocol = window.location.protocol.replace(":", "");
  // 크롬 앱이 없다면, playstore 크롬 앱 다운로드 링크로 이동
  window.location.href = `intent://${url.replace(/^https?:\/\//,"",)}#Intent;scheme=${protocol};package=com.android.chrome;S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.android.chrome;end`;}</pre>
</details>

<br/>
<h2>📁 프로젝트 폴더 구조</h2>

```
📦src
 ┣ 📂assets
 ┃ ┣ 📂icons
 ┃ ┃ ┣ 📜.DS_Store
 ┃ ┃ ┣ 📜AlertCirlcleError.svg
 ┃ ┃ ┣ 📜BellIcon.svg
 ┃ ┃ ┣ 📜Camera.svg
 ┃ ┃ ┣ 📜Chat.svg
 ┃ ┃ ┣ 📜Check.svg
 ┃ ┃ ┣ 📜CheckBoxOff.svg
 ┃ ┃ ┣ 📜CheckBoxOn.svg
 ┃ ┃ ┣ 📜CheckChip.svg
 ┃ ┃ ┣ 📜CloseIcon.svg
 ┃ ┃ ┣ 📜DividerStrongLarge.svg
 ┃ ┃ ┣ 📜DividerStrongShort.svg
 ┃ ┃ ┣ 📜DividerThinLarge.svg
 ┃ ┃ ┣ 📜DividerThinShort.svg
 ┃ ┃ ┣ 📜HomeIcon.svg
 ┃ ┃ ┣ 📜HomePageLogo.svg
 ┃ ┃ ┣ 📜Image.svg
 ┃ ┃ ┣ 📜ImageDeleteButton.svg
 ┃ ┃ ┣ 📜InputCheck.svg
 ┃ ┃ ┣ 📜InputDelete.svg
 ┃ ┃ ┣ 📜InputError.svg
 ┃ ┃ ┣ 📜KakaoIcon.svg
 ┃ ┃ ┣ 📜KakaoTalkIcon.svg
 ┃ ┃ ┣ 📜LeftArrowIcon.svg
 ┃ ┃ ┣ 📜Lock.svg
 ┃ ┃ ┣ 📜LockActive.svg
 ┃ ┃ ┣ 📜MoreIcon.svg
 ┃ ┃ ┣ 📜OptionsIcon.svg
 ┃ ┃ ┣ 📜PencilIcon.svg
 ┃ ┃ ┣ 📜PencilUnderLine.svg
 ┃ ┃ ┣ 📜ProfileComment.svg
 ┃ ┃ ┣ 📜ProfileIcon.svg
 ┃ ┃ ┣ 📜ProfileMoreComment.svg
 ┃ ┃ ┣ 📜ProfileMyPage.svg
 ┃ ┃ ┣ 📜RightArrow.svg
 ┃ ┃ ┣ 📜RoundClosed.svg
 ┃ ┃ ┣ 📜Symbol.svg
 ┃ ┃ ┣ 📜SymbolIcon.svg
 ┃ ┃ ┣ 📜UnLock.svg
 ┃ ┃ ┣ 📜WafflePartyLogo.svg
 ┃ ┃ ┗ 📜profile.svg
 ┃ ┣ 📂image
 ┃ ┃ ┣ 📜HeroImage01.png
 ┃ ┃ ┗ 📜HeroImage02.png
 ┃ ┗ 📜.DS_Store
 ┣ 📂components
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜HeaderButton.tsx
 ┃ ┃ ┗ 📜HeaderLoginButton.tsx
 ┃ ┣ 📂Home
 ┃ ┃ ┣ 📜Banner.tsx
 ┃ ┃ ┗ 📜FilterList.tsx
 ┃ ┣ 📂Login
 ┃ ┃ ┣ 📜KakaoLogin.tsx
 ┃ ┃ ┗ 📜Loading.tsx
 ┃ ┣ 📂MyPage
 ┃ ┃ ┗ 📜MyPageSection.tsx
 ┃ ┣ 📂Navigation
 ┃ ┃ ┣ 📜NavButton.tsx
 ┃ ┃ ┗ 📜Navigation.tsx
 ┃ ┣ 📂card
 ┃ ┃ ┣ 📜MyCommentsCard.tsx
 ┃ ┃ ┣ 📜MyPageListCard.tsx
 ┃ ┃ ┣ 📜MyReactCard.tsx
 ┃ ┃ ┣ 📜NotiCard.tsx
 ┃ ┃ ┣ 📜PostListCard.tsx
 ┃ ┃ ┗ 📜UserCard.tsx
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┣ 📜CheckBox.tsx
 ┃ ┃ ┣ 📜Chip.tsx
 ┃ ┃ ┣ 📜EmptyList.tsx
 ┃ ┃ ┣ 📜Input.tsx
 ┃ ┃ ┣ 📜MiniChip.tsx
 ┃ ┃ ┗ 📜ProfileImageUploader.tsx
 ┃ ┣ 📂modal
 ┃ ┃ ┣ 📜ActionSheet.tsx
 ┃ ┃ ┣ 📜BasicModal.tsx
 ┃ ┃ ┣ 📜BottomSheet.tsx
 ┃ ┃ ┣ 📜BottomSheetHeader.tsx
 ┃ ┃ ┗ 📜ListModal.tsx
 ┃ ┣ 📜DeletePostMessage.tsx
 ┃ ┣ 📜FullImage.tsx
 ┃ ┣ 📜ImagePreview.tsx
 ┃ ┣ 📜NickNameForm.tsx
 ┃ ┗ 📜ProfilePreview.tsx
 ┣ 📂hooks
 ┃ ┣ 📜checkValidation.ts
 ┃ ┣ 📜formatDate.ts
 ┃ ┣ 📜useFormattedDate.ts
 ┃ ┣ 📜useGetMyComment.tsx
 ┃ ┣ 📜useGetMyPost.tsx
 ┃ ┣ 📜useGetMyProfile.tsx
 ┃ ┣ 📜useGetNotification.tsx
 ┃ ┣ 📜useGetPostDetail.tsx
 ┃ ┗ 📜useGetPostList.tsx
 ┣ 📂layout
 ┃ ┗ 📜BasicLayout.tsx
 ┣ 📂lib
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┣ 📜comment.dto.ts
 ┃ ┃ ┃ ┣ 📜login.dto.ts
 ┃ ┃ ┃ ┣ 📜post.dto.ts
 ┃ ┃ ┃ ┣ 📜response.dto.ts
 ┃ ┃ ┃ ┗ 📜user.dto.ts
 ┃ ┃ ┣ 📜comment.ts
 ┃ ┃ ┣ 📜image.ts
 ┃ ┃ ┣ 📜login.ts
 ┃ ┃ ┣ 📜notification.ts
 ┃ ┃ ┣ 📜post.ts
 ┃ ┃ ┗ 📜profile.ts
 ┃ ┣ 📜axios.ts
 ┃ ┗ 📜token.ts
 ┣ 📂mock
 ┃ ┣ 📜detail.ts
 ┃ ┣ 📜mockData.ts
 ┃ ┣ 📜myComment.ts
 ┃ ┣ 📜notification.ts
 ┃ ┗ 📜userInfo.ts
 ┣ 📂pages
 ┃ ┣ 📜HomePage.tsx
 ┃ ┣ 📜KakaoCallback.tsx
 ┃ ┣ 📜LoginPage.tsx
 ┃ ┣ 📜MyCommentsPage.tsx
 ┃ ┣ 📜MyPage.tsx
 ┃ ┣ 📜MyPostsPage.tsx
 ┃ ┣ 📜NicknamePage.tsx
 ┃ ┣ 📜NotificationsPage.tsx
 ┃ ┣ 📜PostCreatePage.tsx
 ┃ ┣ 📜PostDetailPage.tsx
 ┃ ┣ 📜PostEditPage.tsx
 ┃ ┣ 📜PrivacyPolicyPage.tsx
 ┃ ┣ 📜PrivateRoute.tsx
 ┃ ┣ 📜ProfileEditPage.tsx
 ┃ ┣ 📜PublicRoute.tsx
 ┃ ┗ 📜TermsPage.tsx
 ┣ 📂recoil
 ┃ ┣ 📜notificationState.ts
 ┃ ┣ 📜postDetailState.ts
 ┃ ┣ 📜postListState.ts
 ┃ ┣ 📜userProfile.ts
 ┃ ┗ 📜userState.ts
 ┣ 📂styles
 ┃ ┗ 📜homeCustomSlick.css
 ┣ 📂types
 ┃ ┣ 📜actionSheetOption.ts
 ┃ ┣ 📜enum.ts
 ┃ ┣ 📜notification.ts
 ┃ ┣ 📜ottTags.ts
 ┃ ┣ 📜postDetail.ts
 ┃ ┣ 📜postList.ts
 ┃ ┣ 📜userProfile.ts
 ┃ ┣ 📜userToken.ts
 ┃ ┗ 📜validationResultType.ts
 ┣ 📜.DS_Store
 ┣ 📜App.tsx
 ┣ 📜Router.tsx
 ┣ 📜env.d.ts
 ┣ 📜image.d.ts
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┣ 📜svg.d.ts
 ┗ 📜vite-env.d.ts
```

</div>
