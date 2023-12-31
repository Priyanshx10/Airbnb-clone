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
  const[startDate,setStartDate] = useState(new Date());
  const[endDate,setendDate] = useState(new Date());

  const selectionRange = {
    startDate:startDate,
    endDate:endDate
    key : Selection
  };

  return (
    
    <header className=" sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">    
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt="Airbnb logo"
          height={100} // Adjust the height as needed
          width={100} // Adjust the width as needed
        />
      </div>

      {/* middle */}
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
      <div>
        {searchInput && (
          <div>
            <DateRangePicker 
            range= {[selectionRange]}/>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
