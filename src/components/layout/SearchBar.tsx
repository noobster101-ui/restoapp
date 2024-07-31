"use client";

import React from 'react';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar flex items-center  border-0 w-full">
      <Search className="text-gray-500" />
      <input
        type="text"
        placeholder="Search menu..."
        className="search-input w-full p-2"
      />
    </div>
  );
};

export default SearchBar;