import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';

const getData = async () => {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
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
          {data?.map((item: { location: string }) => (
            <h1 key={item.location.toString()}>{item.location}</h1>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Page;
