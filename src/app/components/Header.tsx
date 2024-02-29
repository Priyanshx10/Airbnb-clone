'use client';

/* eslint-disable react/button-has-type */
import Image from 'next/image';
import {
  SearchIcon,
  UsersIcon,
  GlobeAltIcon,
  MenuAlt1Icon,
  UserCircleIcon,
} from '@heroicons/react/solid';
import { SetStateAction, useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

function Header() {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1);

  const handleSelect = (ranges: {
    selection: {
      startDate: SetStateAction<Date>;
      endDate: SetStateAction<Date>;
    };
  }) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput(' ');
  };

  // Corrected spelling: key: 'Selection'
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection', // Provide a value for the 'key' property
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
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start Your Search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
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
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
            className="text-black "
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold text-black">
              Number of Guests
            </h2>
            <div>
              <UsersIcon className="h-5 mr-2" />
            </div>
            <input
              value={noOfGuest}
              min={1}
              onChange={(e) => setNoOfGuest(Number(e.target.value))}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-black ">
              Cancel
            </button>
            <button className="flex-grow text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
