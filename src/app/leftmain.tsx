import { useState } from "react"
import { SLeftMain } from "./styled"

export default function LeftMain() {
  const [activeMenu, setActiveMenu] = useState<number>(0)

  return (
    <SLeftMain>
      <div className="logo">
        <img src="/main-logo.svg" alt="메인 로고" />
      </div>
      <div className="category">
        <ul>
          <li className={
            activeMenu === 1 ? 'active' : ''
          } onClick={() => setActiveMenu(1)}>
            전체보기
          </li>
          <li className={
            activeMenu === 2 ? 'active' : ''
          } onClick={() => setActiveMenu(2)}>
            2022 법정의무교육
          </li>
          <li className={
            activeMenu === 3 ? 'active' : ''
          } onClick={() => setActiveMenu(3)}>
            하열사 PT
          </li>
        </ul>
      </div>
    </SLeftMain >
  )
}