import BoardList from "../components/board/board_list";
import BoardSearchButton from "../components/board/board_search_button";
import ContentTitle from "../components/public/title";
import { SBoardArea, SBoardContentArea } from "./styled";

export default function BoardArea() {
  const contentTitle: string = "게시판";

  return (
    <SBoardArea>
      <SBoardContentArea>
        <ContentTitle title={contentTitle} />
        <BoardSearchButton />
      </SBoardContentArea>
    </SBoardArea>
  );
}