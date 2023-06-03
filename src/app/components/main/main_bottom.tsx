import { SMainBottom } from "./styled";

export default function MainBottom() {
  return (
    <SMainBottom>
      <div className="board">
        <span>게시판</span>
      </div>
      <div className="content-apply">
        <img src="/icon/icon-plus-background-blue.svg" alt="콘텐츠 등록" />
        <p>콘텐츠 등록</p>
      </div>
    </SMainBottom>
  );
}