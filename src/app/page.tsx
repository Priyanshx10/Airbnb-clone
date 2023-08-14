 /* eslint-disable prettier/prettier */
 
 import Head from "next/head";
 import React from "react";
 import Header from "./components/Header";
 import Banner from "./components/Banner";
 
 export default function Home({exploreData}) {
   return (
       <div className="">
       
         <head>
           <title>AIRBNB</title>
           <link rel="icon" href="/favicon.ico" />
         </head>
         {/* Header */}
         <Header />
         {/* Banner */}
         <Banner/>
 
       <main className="max-w-7xl mx-auto px-8 sm:px-16 ">  
         <section className="p-06">
           <h2 className="text-3xl font-semibold">Explore Nearby</h2>
 
           {/* Pull some data from a server - API are already created. */}
           {exploreData?.map((item) => (
           <h1>{item.location}</h1>
           ))}
         </section>
       </main>
     </div>
   );
 }
 
 export async function getstaticProps() {
   const exploreData = await fetch("https://links.papareact.com/pyp").
   then(
     (res) =>res.json()
   );
 
   return {
     props: {
       exploreData
     }
   }
 }
 