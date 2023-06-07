'use client'

import Head from "next/head"
import { SMainContainer } from "../styled"
import LeftMain from "../leftmain"
import BoardArea from "./board_area"

export default function Page() {
  const activePage = 'board';

  return (
    <div>
      <Head>
        <title>게시판 리스트 페이지</title>
      </Head>
      <SMainContainer>
        <LeftMain activePage={activePage} />
        <BoardArea />
      </SMainContainer>
    </div>
  )
}