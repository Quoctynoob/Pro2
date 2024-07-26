// SearchBar.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { courts } from '@/data/courtsData'; // Import the courts data

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [filteredCourts, setFilteredCourts] = useState(courts);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    setFilteredCourts(
      courts.filter((court) =>
        court.name.toLowerCase().includes(value)
      )
    );
  };

  const handleSearch = (court: any) => {
    router.push(`/courts/${court.id}`);
  };

  return (
    //Search Bar with search button
    <div className="relative mx-auto py-1 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300">
      <input type="text" value={query} onChange={handleInputChange} placeholder="Search courts..." className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"/>
      
      <button onClick={() => handleSearch(filteredCourts[0])} className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3" >
        Search
      </button>
      
      {query && (
        <ul className="absolute bg-white border border-gray-300 rounded mt-11 w-full z-10">
          {filteredCourts.map((court) => (
            <li
              key={court.id}
              className="p-2 flex items-center cursor-pointer hover:bg-gray-100"
              onClick={() => handleSearch(court)}
            >
              <img src={court.image} alt={court.name} className="w-10 h-10 mr-2" />
              {court.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;


/*<div className="flex items-center mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="p-2 border border-gray-300 rounded-xl flex justify-end w-full h-12"/>
      <button onClick={handleSearch}>
        <img src="icons/searchicon.svg" alt="Search Icon" className='size-10'/>
      </button>
    </div>*/
