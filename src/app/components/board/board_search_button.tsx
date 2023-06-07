import { SBoardSearchButton } from "./styled";

export default function BoardSearchButton() {
  return (
    <SBoardSearchButton>
      <div className="search">
        <img src="/icon/icon-search-mono.svg" alt="검색" />
        <input type="text" name="board_search" id="board_search" placeholder="찾고 싶은 제목을 검색해보십시오!" />
      </div>
      <div className="filter">
        <select name="board-order-filter" id="board-order-filter">
          <option value="1">신규 등록 순</option>
          <option value="2">인기 게시글 순</option>
          <option value="3">내 작성 게시글</option>
        </select>
      </div>
    </SBoardSearchButton>
  )  
}