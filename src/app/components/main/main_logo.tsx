import { SMainLogo } from "./styled";
import Link from "next/link";

export default function MainLogo() {
  return (
    <SMainLogo>
      <Link href="/">
        <div className="logo">
          <img src="/main-logo.svg" alt="메인 로고" />
          <p>하고라(H.Agora)</p>
        </div>
      </Link>
    </SMainLogo>
  );
}