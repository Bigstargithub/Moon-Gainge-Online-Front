'use client'

import { SMainContainer } from './styled';
import Head from 'next/head';
import LeftMain from './leftmain';

export default function Page() {
  return (
    <>
      <Head>
        <title>Hello, World!</title>
      </Head>
      <SMainContainer>
        <LeftMain />
      </SMainContainer>
    </>
  );
}