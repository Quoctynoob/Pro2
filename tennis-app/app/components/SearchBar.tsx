import React, { useState } from 'react';
import { useRouter } from 'next/router';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (query) {
      router.push(`/search?query=${query}`);
    }
  };

  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="p-2 border border-gray-300 rounded-xl flex justify-end w-full h-12"/>
      <button onClick={handleSearch}>
        <img src="icons/searchicon.svg" alt="Search Icon" className='size-10' />
      </button>
    </div>
  );
};

export default SearchBar;