import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Page() {
  return (
    <div className="h-screen">
      <Header />

      <main className="flex">
        <section className="pt-14 px-6 flex-grow">
          <p className="text-sm">300+ stay for 5 Guests</p>

          <h1 className="text-xl font-semibold mt-2 mb-6">Stays in Mars</h1>

          <div className="hidden md:inline-flex mb-5 text-gray-300 whitespace-nowrap space-x-3">
            <p className="button">Cancellation flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Room and Beds</p>
            <p className="button">More Filters</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Page;
