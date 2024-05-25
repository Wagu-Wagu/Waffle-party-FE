export default function TermsPage() {
  return (
    <div className="h-full bg-white p-[2rem]">
      <div>
        <h1 className="font-bold text-d4 py-[1rem]">[필수] 이용약관 동의</h1>
        <h3 className="font-medium text-d5 py-[1rem]">1. 서비스 명칭</h3>
        <p className="text-subtitle">
          본 서비스의 명칭은 와플파티(Waffle Party)입니다.
        </p>
        {/*  */}
        <h3 className="font-medium text-d5 py-[1rem]">2. 서비스 내용</h3>
        <p className="text-subtitle">
          와플파티는 OTT(Over-The-Top) 콘텐츠를 온라인으로 함께 시청할 사람을
          찾고 소통할 수 있는 소셜 커뮤니티 웹 서비스입니다.
        </p>
        {/*  */}
        <h3 className="font-medium text-d5 py-[1rem]">3. 이용 대상</h3>
        <p className="text-subtitle">
          와플파티는 연령 제한 없이 누구나 이용할 수 있으며, 특정 이용자 대상
          제한이 없습니다.
        </p>
        {/*  */}
        <h3 className="font-medium text-d5 py-[1rem]">4. 회원가입 및 탈퇴</h3>
        <ul className="pl-8 text-black list-disc text-body">
          <li>
            회원가입: 와플파티는 카카오 로그인을 통해 회원가입이 가능합니다.
          </li>
          <li>
            회원탈퇴: 서비스 내의 회원탈퇴 버튼을 통해 탈퇴 절차를 진행할 수
            있습니다. 회원 탈퇴 시 개인정보는 즉시 삭제됩니다. 단, 서비스 악용
            방지 및 법령에 따른 의무 준수를 위해 일정 기간 동안 일부 정보를
            보유할 수 있습니다.
          </li>
        </ul>
        {/*  */}
        <h3 className="font-medium text-d5 py-[1rem]">5. 이용자의 의무</h3>
        <ul className="pl-8 text-black list-disc text-body">
          <li>본 약관 및 관련 법령을 준수해야 합니다.</li>
          <li>타인의 권리를 침해하거나 불쾌감을 주는 행위를 금지합니다.</li>
          <li>
            서비스 이용 시 부적절한 콘텐츠(음란물, 폭력적 내용 등)를 게시하거나
            공유하지 않습니다.
          </li>
          <li>타인의 개인정보를 무단으로 수집, 이용, 제공하지 않습니다.</li>
        </ul>
        {/*  */}
        <h3 className="font-medium text-d5 py-[1rem]">
          6. 서비스 제공자의 의무
        </h3>
        <ul className="pl-8 text-black list-disc text-body">
          <li>
            와플파티는 사용자의 개인정보를 보호하기 위해 노력하며, 이를 위한
            보안 시스템을 유지합니다.
          </li>
          <li>서비스의 안정적 제공을 위해 최선을 다합니다.</li>
          <li>서비스 중단, 변경, 개선 등 중요한 사항은 사전에 고지합니다.</li>
        </ul>
        {/*  */}
        <h3 className="font-medium text-d5 py-[1rem]">7. 콘텐츠 규제</h3>
        <ul className="pl-8 text-black list-disc text-body">
          <li>
            와플파티는 사용자들이 게시하거나 공유하는 콘텐츠를 검토하고,
            부적절한 콘텐츠는 삭제할 권리를{" "}
          </li>
          가집니다.
          <li>
            이용자는 서비스 이용 중 타인의 권리를 침해하지 않도록 주의해야
            합니다.
          </li>
        </ul>
        {/*  */}
        <h3 className="font-medium text-d5 py-[1rem]">
          8. 저작권 및 지적 재산권
        </h3>
        <ul className="pl-8 text-black list-disc text-body">
          <li>
            이용자가 생성한 콘텐츠에 대한 저작권은 해당 이용자에게 귀속됩니다.
          </li>
          <li>
            저작권 침해 등 문제가 발생할 경우, 해당 콘텐츠는 즉시 삭제되며, 관련
            법령에 따라 조치가 취해질 수{" "}
          </li>
          있습니다.
        </ul>
        {/*  */}
        <h3 className="font-medium text-d5 py-[1rem]">
          9. 서비스 중단 및 변경
        </h3>
        <ul className="pl-8 text-black list-disc text-body">
          <li>
            와플파티는 서비스 개선, 유지보수, 시스템 점검 등의 이유로 서비스의
            일시적 중단이 있을 수{" "}
          </li>
          있으며, 이 경우 사전에 공지합니다.
          <li>서비스 변경 시 변경 내용과 그 사유를 사전에 공지합니다.</li>
        </ul>
        {/*  */}
        <h3 className="font-medium text-d5 py-[1rem]">10. 책임 제한</h3>
        <ul className="pl-8 text-black list-disc text-body">
          <li>와플파티는 사용자 간의 분쟁에 대해 책임을 지지 않습니다.</li>
          <li>
            와플파티는 서비스 이용 중 발생한 손해에 대해 법적 책임을 지지
            않습니다. 단, 와플파티의 고의 또는{" "}
          </li>
          중대한 과실로 인한 경우는 예외로 합니다.
        </ul>
        {/*  */}
        <h3 className="font-medium text-d5 py-[1rem]">11. 분쟁 해결</h3>
        <ul className="pl-8 text-black list-disc text-body">
          <li>
            본 약관과 관련된 분쟁은 대한민국 법령에 따라 해결되며, 관할 법원은
            서울중앙지방법원으로{" "}
          </li>
          합니다.
        </ul>
        {/*  */}
        <h3 className="font-medium text-d5 py-[1rem]">12. 기타</h3>
        <ul className="pl-8 text-black list-disc text-body">
          <li>
            본 약관에 명시되지 않은 사항은 관련 법령 및 상관습에 따릅니다.
          </li>
          <li>
            본 약관은 필요 시 변경될 수 있으며, 변경 시 사전에 공지합니다.
          </li>
        </ul>
        {/*  */}
      </div>
    </div>
  );
}
