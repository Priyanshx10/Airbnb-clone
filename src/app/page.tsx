/* eslint-disable prettier/prettier */
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import SmallCard from './components/SmallCard';

const getData = async () => {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
    (res) => res.json(),
  );
  return exploreData;
};

const Page = async () => {
  const data = await getData();
  return (
    <div className="">
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16 ">
        <section className="p-06">
          <h2 className="text-3xl font-semibold">Explore Nearby</h2>

          {/* Pull some data from a server - API are already created. */}
          {data?.map((item: { location: string , img: string , distance: string  }) => (
             <SmallCard 
             key={item.img.toString()}
             img={item.img.toString()}
             location={item.location.toString()}
             distance= {item.distance.toString()}
             />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Page;
