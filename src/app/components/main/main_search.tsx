import { SMainSearch } from "./styled";

export default function MainSearch() {
  return (
    <SMainSearch>
      <img src="/icon/icon-search-mono.svg" alt="돋보기" />
      <input type="text" name="class_search" id="class_search" placeholder="키워드를 검색해보세요." />
    </SMainSearch>
  )
}