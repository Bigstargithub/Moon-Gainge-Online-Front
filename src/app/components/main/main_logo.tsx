import { SMainLogo } from "./styled";

export default function MainLogo() {
  return (
    <SMainLogo>
      <div className="logo">
        <img src="/main-logo.svg" alt="메인 로고" />
        <p>하고라(H.Agora)</p>
      </div>
    </SMainLogo>
  );
}