import Head from "next/head";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="h-screen">
      <main className="">
        <Head>
          <title>AIRBNB</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* Header */}
        <Header />
        {/* Banner */}
      </main>
    </div>
  );
}
