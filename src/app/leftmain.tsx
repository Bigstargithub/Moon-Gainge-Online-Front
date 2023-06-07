import { useState } from "react"
import { SLeftMain } from "./styled"
import MainLogo from "./components/main/main_logo"
import MainProfile from "./components/main/main_profile"
import MainSearch from "./components/main/main_search"
import MainCategory from "./components/main/main_category"
import MainBottom from "./components/main/main_bottom"

export default function LeftMain({ activePage }: any) {
  const [activeCategory, setActiveCategory] = useState<Number>(0);

  return (
    <SLeftMain>
      <MainLogo />
      <MainProfile />
      {activePage === 'main' ? <><MainSearch /></> : <></>}
      <MainCategory activeCategory={activeCategory} setActiveCategory={setActiveCategory} activePage={activePage} />
      <MainBottom activePage={activePage} />
    </SLeftMain >
  )
}