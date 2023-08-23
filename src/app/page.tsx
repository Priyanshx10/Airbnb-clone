/* eslint-disable prettier/prettier */

 import React from "react";
 import Header from "./components/Header";
 import Banner from "./components/Banner";
import SmallCard from "./components/SmallCard";


 
 export default function Home({exploreData}) {
   return (
       <div className="">
         {/* Header */}
         <Header />
         {/* Banner */}
         <Banner/>
 
       <main className="max-w-7xl mx-auto px-8 sm:px-16 ">  
         <section className="p-06">
           <h2 className="text-3xl font-semibold">Explore Nearby</h2>
 
           {/* Pull some data from a server - API are already created. */}
           {exploreData?.map(({img ,location ,distance}) => (
           <SmallCard
           key={img}
           img={img}
           location={location}
           distance={distance}
           />
           ))}
         </section>
         <section>
          <h2>Live Anywhere.</h2>
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
 