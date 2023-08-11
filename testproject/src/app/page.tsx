/* eslint-disable prettier/prettier */
import Head from "next/head";
import React from "react";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="h-screen">
      <main className="">
        <head>
          <title>AIRBNB</title>
          <link rel="icon" href="/favicon.ico" />
        </head>
        {/* Header */}
        <Header />
        {/* Banner */}
      </main>
    </div>
  );
}
