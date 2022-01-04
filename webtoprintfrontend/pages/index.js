import Head from 'next/head'
import HomeAdsColumns from '../component/home/HomeAdsColumns'
import HomeBanner from '../component/home/HomeBanner'
import HomeDefaultTopCategories from '../component/home/HomeDefaultTopCategories'

import FooterDefault from '../component/shared/footers/FooterDefault'
import HeaderDefault from '../component/shared/headers/HeaderDefault'

/* 2021년 8월 17일 */
// 메모리 누수가 발생 가능성이 있음 
// 지금은 300M 이하로 매우 양호하지만 메모리 누수가 다시 발생할 경우 고쳐야 함
// 빌드 컴파일 시간이 너무 오래걸린다. 이것은 pre-render로 해결을 해야 할 것같다. 

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebToPrint</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderDefault/>
      <main id="homepage-1">
        <HomeBanner/>
        <HomeAdsColumns/>
        <HomeDefaultTopCategories/>
      </main>
      <FooterDefault/>
    </div>
  )
}
