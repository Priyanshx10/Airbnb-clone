import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import SmallCard from './components/SmallCard';
import MediumCard from './components/MediumCard';
import LargeCard from './components/LargeCard';
import Footer from './components/Footer';

const getData = async () => {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
    (res) => res.json(),
  );
  return exploreData;
};

const getData2 = async () => {
  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(
    (res) => res.json(),
  );
  return cardsData;
};

const Page = async () => {
  const data = await getData();
  const data2 = await getData2();
  return (
    <div className="">
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16 ">
        <section className="p-06">
          <h2 className="text-4xl font-semibold">Explore Nearby</h2>

          {/* Pull some data from a server - API are already created. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.map(
              (item: { location: string; img: string; distance: string }) => (
                <SmallCard
                  key={item.img.toString()}
                  img={item.img.toString()}
                  location={item.location.toString()}
                  distance={item.distance.toString()}
                />
              ),
            )}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {data2?.map((item: { img: string; title: string }) => (
              <MediumCard
                key={item.img.toString()}
                img={item.img.toString()}
                title={item.title.toString()}
              />
            ))}
          </div>

          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoor"
            description="Wishlists curated by airbnb"
            buttonText="Get inspired"
          />
        </section>
      </main>
      useClient();
      <Footer />
    </div>
  );
};

export default Page;
