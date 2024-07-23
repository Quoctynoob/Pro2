import React, { useState } from 'react';
import { useRouter } from 'next/router';

const availableCourts = [
  'Court 1',
  'Court 2',
  'Court 3', 
];

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [filteredCourts, setFilteredCourts] = useState(availableCourts);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setFilteredCourts(
      availableCourts.filter((court) =>
        court.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSearch = () => {
    if (query) {
      router.push(`/courts?name=${query}`);
    }
  };

  return (
    <div className="flex items-center mb-4">
      <div className="relative w-full">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search courts..."
          className="p-2 border border-gray-300 rounded-l w-full"
        />
        {query && (
          <ul className="absolute bg-white border border-gray-300 w-full mt-1 rounded shadow-lg z-10">
            {filteredCourts.map((court) => (
              <li
                key={court}
                onClick={() => {
                  setQuery(court);
                  setFilteredCourts([]);
                }}
                className="p-2 hover:bg-gray-200 cursor-pointer"
              >
                {court}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        onClick={handleSearch}
        className="p-2 bg-blue-500 text-white rounded-r"
      >
        Search
      </button>
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
