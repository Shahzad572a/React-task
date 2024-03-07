import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    onSearch(inputValue);
  };

  return (
    <div className="flex justify-center items-center">
      <input 
        type="text" 
        value={query} 
        onChange={handleInputChange} 
        placeholder="Search users..." 
        className="px-4 py-2 w-100 border border-black rounded-md focus:outline-none focus:ring focus:border-blue-500"
      />
    </div>
  );
}

export default SearchBar;
