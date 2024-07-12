export default function PrivacyPolicyPage() {
  return (
    <div className="h-full bg-white p-[2rem]">
      <div>
        <h1 className="font-bold text-d4 py-[1rem]">
          [필수] 개인정보 수집 및 이용 동의
        </h1>
        <h3 className="font-medium text-d5 py-[1rem]">1.개인정보 수집 항목</h3>
        <p className="text-subtitle">
          당사는 다음과 같은 개인정보를 수집합니다.
        </p>
        <ul className="pl-8 text-black list-disc text-body">
          <li>이름</li>
          <li>이메일</li>
          <li>전화번호</li>
          <li>생년월일</li>
          <li>성별</li>
        </ul>
        {/*  */}
        <h3 className="font-medium text-d5 py-[1rem]">
          2.개인정보 수집 및 이용 목적
        </h3>
        <p className="text-subtitle">
          당사는 수집한 개인정보를 다음의 목적을 위해 이용합니다.
        </p>
        <ul className="pl-8 text-black list-disc text-body">
          <li>
            서비스 제공: 회원제 서비스 이용에 따른 본인 확인, 개인 식별, 서비스
            악용 방지 및 비인가 사용 방지, 가입 의사 확인, 가입 및 가입 횟수
            제한
          </li>
          <li>
            회원 관리: 회원제 서비스 이용에 따른 본인 확인, 개인 식별, 서비스
            악용 방지 및 비인가 사용 방지, 가입 의사 확인
          </li>
          <li>
            마케팅 활용: 이벤트 및 광고성 정보 제공, 접속 빈도 파악 또는 회원의
            서비스 이용에 대한 통계
          </li>
        </ul>
        {/*  */}
        <h3 className="font-medium text-d5 py-[1rem]">
          3. 개인정보의 보유 및 이용 기간
        </h3>
        <p className="text-subtitle">
          당사는 법령에 따른 보유 기간 동안 개인정보를 보유 및 이용합니다.
        </p>
        <ul className="pl-8 text-black list-disc text-body">
          <li>
            회원 탈퇴 시: 당사는 원칙적으로 회원 탈퇴 시 귀하의 개인정보를 즉시
            삭제합니다. 다만, 서비스 악용 방지 및 법령에 따른 의무 준수를 위해
            일정 기간(최대 1년) 동안 일부 정보를 보유할 수 있습니다.
          </li>{" "}
          <li>
            법령에 따라 보유해야 하는 경우: 해당 기간 동안 보관 후 삭제됩니다.
          </li>
        </ul>
        {/*  */}
        <h3 className="font-medium text-d5 py-[1rem]">
          4. 개인정보의 제3자 제공
        </h3>
        <p className="text-subtitle">
          당사는 귀하의 개인정보를 제3자에게 제공하지 않습니다.
        </p>
        {/*  */}
        <h3 className="font-medium text-d5 py-[1rem]">
          5. 동의 거부 권리 및 동의 거부 시 불이익
        </h3>
        <p className="text-subtitle">
          귀하는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다.
          다만, 동의를 거부하실 경우 서비스 제공이 제한될 수 있습니다.
        </p>
      </div>
      {/*  */}
      <div>
        <h1 className="font-bold text-d4 pt-[3rem] pb-[1rem]">
          [선택] 서비스 진행 상황, 할인쿠폰 및 프로모션, 혜택•마케팅 이메일, SMS
          수신 동의
        </h1>
        <h3 className="font-medium text-d5 py-[1rem]">1.개인정보 수집 항목</h3>
        <p className="text-subtitle">
          본 동의를 통해 수집되는 개인정보는 다음과 같습니다
        </p>
        <ul className="pl-8 text-black list-disc text-body">
          <li>이름</li>
          <li>이메일</li>
          <li>전화번호</li>
          <li>생년월일</li>
          <li>성별</li>
        </ul>
        {/*  */}
        <h3 className="font-medium text-d5 py-[1rem]">2. 수집 및 이용 목적</h3>
        <p className="text-subtitle">
          수집된 개인정보는 다음의 목적을 위해 이용됩니다:
        </p>
        <ul className="pl-8 text-black list-disc text-body">
          <li>
            서비스 진행 상황 알림**: 서비스 이용과 관련된 공지 및 업데이트 사항
            전달
          </li>
          <li>
            할인쿠폰 및 프로모션 제공**: 할인쿠폰, 프로모션 및 이벤트 정보 제공
          </li>
          <li>
            혜택•마케팅 정보 제공**: 새로운 서비스, 이벤트, 뉴스레터, 마케팅
            정보 제공
          </li>
        </ul>
        {/*  */}
        <h3 className="font-medium text-d5 py-[1rem]">3. 수집 및 이용 방법</h3>
        <ul className="pl-8 text-black list-disc text-body">
          <li>이메일, SMS 등을 통해 사용자에게 정보를 제공</li>
        </ul>
        {/*  */}
        <h3 className="font-medium text-d5 py-[1rem]">4. 보유 및 이용 기간</h3>
        <ul className="pl-8 text-black list-disc text-body">
          <li>
            동의 철회 시까지 보유 및 이용됩니다. 사용자가 동의를 철회할 경우,
            해당 정보는 즉시 삭제됩니다.
          </li>
        </ul>
        {/*  */}
        <h3 className="font-medium text-d5 py-[1rem]">5. 동의 철회 방법</h3>
        <ul className="pl-8 text-black list-disc text-body">
          <li>
            사용자는 언제든지 [계정 설정]에서 수신 동의를 철회할 수 있습니다.
          </li>
          <li>
            이메일 또는 SMS 하단의 "수신 거부" 링크를 통해 수신 동의를 철회할 수
            있습니다.
          </li>
        </ul>
        {/*  */}
        <h3 className="font-medium text-d5 py-[1rem]">
          6. 동의 거부 권리 및 동의 거부 시 불이익
        </h3>
        <ul className="pl-8 text-black list-disc text-body">
          <li>
            사용자는 본 동의에 대한 선택권을 가지며, 동의하지 않아도 서비스
            이용에 불이익은 없습니다. 다만, 동의하지 않을 경우 서비스 진행 상황,
            할인쿠폰 및 프로모션, 혜택•마케팅 정보 등을 수신하지 못할 수
            있습니다.
          </li>
        </ul>
        {/*  */}
      </div>
    </div>
  );
}
