import Link from "next/link";
import { SMainBottom } from "./styled";

export default function MainBottom({ activePage }: any) {
  return (
    <SMainBottom>
      <div className="board">
        {activePage === 'main' ? <Link href="/board"><span>게시판</span></Link> : <Link href="/"><span>영상</span></Link>}
        
      </div>
      <div className="content-apply">
        <img src="/icon/icon-plus-background-blue.svg" alt="콘텐츠 등록" />
        <p>콘텐츠 등록</p>
      </div>
    </SMainBottom>
  );
}