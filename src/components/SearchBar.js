import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Handle search functionality here
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by location..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
