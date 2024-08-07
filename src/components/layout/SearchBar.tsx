"use client";

import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  name?: string;
  type?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search...", name = "search", type = "text" }) => {
  return (
    <div className="search-bar flex items-center border-0 w-full">
      <Search className="text-gray-500" />
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="search-input w-full p-2"
      />
    </div>
  );
};

export default SearchBar;
