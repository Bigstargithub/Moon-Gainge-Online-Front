import { useState } from "react";
import { SMainCategory } from "./styled";
import ClassCategoryList from "./class_category_list";
import BoardCategoryList from "../board/board_category_list";

export default function MainCategory({activeCategory, setActiveCategory, activePage} : any) {

  return (
    <SMainCategory>
      <div className={activeCategory === 0 ? 'all-content active' : 'all-content'} onClick={() => setActiveCategory(0)}>
        <span>전체보기</span>
      </div>
      <ul>
        {activePage === "main" ? 
        <>
          <ClassCategoryList activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        </> : 
        <>
          <BoardCategoryList activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        </>}
       
      </ul>
    </SMainCategory>
  )
}