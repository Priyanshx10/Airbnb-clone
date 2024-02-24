// 'use client' directive placed at the top of the file
'use client';

import Image from 'next/image';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuAlt1Icon,
  UserCircleIcon,
} from '@heroicons/react/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

function Header() {
  const [searchInput, setSearchInput] = useState('');
  const [startDate] = useState(new Date());
  const [endDate] = useState(new Date());

  // Corrected spelling: key: 'Selection'
  const selectionRange = {
    startDate,
    endDate,
    key: 'Selection', // Provide a value for the 'key' property
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt="Airbnb logo"
          height={100} // Adjust the height as needed
          width={100} // Adjust the width as needed
        />
      </div>

      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="flex-grow pl-5 bg-transparent outline-none"
          placeholder="Search Here"
        />
        <SearchIcon className="ml-2 md:inline-flex h-8 bg-pink-400 text-white rounded-full p-2 cursor-pointer md:mx-4" />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="items-center border-2 p-2 rounded-full flex">
          <MenuAlt1Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {/* Conditional rendering with date picker */}
      {searchInput && (
        <div>
          <DateRangePicker ranges={[selectionRange]} />
        </div>
      )}
    </header>
  );
}

export default Header;
