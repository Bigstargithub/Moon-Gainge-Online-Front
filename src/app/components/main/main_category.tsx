import { useState } from "react";
import { SMainCategory } from "./styled";

export default function MainCategory() {
  const [activeCategory, setActiveCategory] = useState<Number>(1);

  return (
    <SMainCategory>
      <div className={activeCategory === 0 ? 'all-content active' : 'all-content'} onClick={() => setActiveCategory(0)}>
        <span>전체보기</span>
      </div>
      <ul>
        <li className={
          activeCategory === 1 ? 'active' : ''
        } onClick={() => setActiveCategory(1)}>제작마케팅센터 지식나눔이 두줄이 되어버린다면!</li>
        <li className={
          activeCategory === 2 ? 'active' : ''
        } onClick={() => setActiveCategory(2)}>신입사원 필수 시청 영상</li>
      </ul>
    </SMainCategory>
  )
}