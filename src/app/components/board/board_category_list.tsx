export default function BoardCategoryList({ activeCategory, setActiveCategory }: any) {
  return (
    <>
      <li className={
          activeCategory === 1 ? 'board active' : 'board'
        } onClick={() => setActiveCategory(1)}>인사이트</li>
      <li className={
          activeCategory === 2 ? 'board active' : 'board'
        } onClick={() => setActiveCategory(2)}>자유게시판</li>
      <li className={
          activeCategory === 3 ? 'board active' : 'board'
        } onClick={() => setActiveCategory(3)}>이벤트</li>
      <li className={
          activeCategory === 4 ? 'board active' : 'board'
        } onClick={() => setActiveCategory(4)}>가인지포럼 시작하는데 어쩌고 저쩌고</li>
    </>
  )
}