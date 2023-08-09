import Image from 'next/image'
import Header from '../../component/Header'
import Head from 'next/head'

export default function Home() {
  return (
  <div className="">  
  <main>
    
      <Head>
        <title>AIRBNB</title>
        <link rel ="icon" href="/favicon.ico"/>
      </Head>

         {/* Header */}
      <Header/>
      {/* Banner */}
    
  </main>
  </div>
  )
}
