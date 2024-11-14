'use client';

import Image from 'next/image';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuAlt1Icon,
  UserCircleIcon,
  UserIcon
} from '@heroicons/react/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';


function Header() {
  const [searchInput, setSearchInput] = useState('');
  const [startDate] = useState(new Date());
  const [endDate] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [noOfGuest, setNoOfGuest] = useState(1); // Correctly initialized state for number of guests

  const selectionRange = {
    startDate,
    endDate,
    key: 'Selection',
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md p-4 flex flex-col md:flex-row items-center md:justify-between">
      {/* Logo */}
      <div className="flex items-center h-10 cursor-pointer my-auto mb-2 md:mb-0">
        <Image
          src="https://links.papareact.com/qd3"
          alt="Airbnb logo"
          height={40}
          width={100}
        />
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row items-center md:border-2 rounded-full py-2 md:shadow-sm w-full max-w-md">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow w-full sm:w-auto pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Where are you going?"
        />
        <SearchIcon className="h-8 w-8 bg-pink-400 text-white rounded-full p-2 cursor-pointer hidden sm:inline-flex mx-2" />
      </div>

      {/* Menu Button for Mobile */}
      <button
        className="lg:hidden flex items-center space-x-2 border-2 p-2 rounded-full"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <MenuAlt1Icon className="h-6" />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 right-4 bg-white shadow-md p-4 w-64 rounded-lg">
          <div className="flex flex-col space-y-4 text-gray-500">
            <p className="cursor-pointer">Become a host</p>
            <GlobeAltIcon className="h-6 cursor-pointer" />
            <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
              <UserCircleIcon className="h-6" />
            </div>
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-4 text-gray-500 mt-2 md:mt-0">
        <p className="cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {/* Conditional Date Picker and Guest Selection */}
      {searchInput && (
        <div className="w-full mt-4 md:mt-2 md:col-span-3 flex flex-col items-center text-black px-4">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
          />

          <div className="flex items-center mt-4 border-b mb-4 w-full max-w-xs md:max-w-sm lg:max-w-md">
            <h2 className="text-lg flex-grow font-semibold">Number of Guests</h2>
            <UserIcon className="h-5 text-gray-600" />
            <input
              value={noOfGuest}
              onChange={(e) => setNoOfGuest(parseInt(e.target.value))}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
