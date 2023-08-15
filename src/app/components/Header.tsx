/* eslint-disable prettier/prettier */

import Image from 'next/image';
import React from 'react';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt="abnb logo"
          objectFit="contain"
          objectPosition="left"
          width="80"
          height="80"
        />
      </div>
      {/* middle */}
      <div className=" flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 "
          placeholder="Search Here"
        />
        <SearchIcon
          className="h-8 bg-red-400 text-white rounded-full"
          height={30}
        />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" height={30} />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" height={30} />
          <UserCircleIcon className="h-6" height={30} />
        </div>
      </div>
    </header>
  );
}

export default Header;