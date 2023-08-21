import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';

type ExploreDataType = {
  img: string;
  location: string;
  distance: string;
};

const getData = async () => {
  const res = await fetch('https://links.papareact.com/pyp');
  const data: ExploreDataType[] = await res.json();
  return data;
};

export default async function Home() {
  const exploreData: ExploreDataType[] = await getData();
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
          {exploreData?.map((item) => (
            <div key={item.distance} className="w-10 h-10">
              <h1>{item.location}</h1>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
