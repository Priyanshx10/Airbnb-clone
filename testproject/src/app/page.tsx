/* eslint-disable prettier/prettier */
import Head from "next/head";
import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div className="h-screen">
      <main className="">
        <head>
          <title>AIRByNB</title>
          <link rel="icon" href="/favicon.ico" />
        </head>
        {/* Header */}
        <Header />
        {/* Banner */}
        <Banner/>
      </main>
    </div>
  );
}
