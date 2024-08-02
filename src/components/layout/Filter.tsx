"use client";

import React, { useState } from 'react';

interface FilterTabsProps {
  onFilterChange: (filter: string) => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  const filters = ['All', 'Chicken', 'Seafood', 'Pasta', 'Rice bowl'];

  return (
    <div className="filter-tabs">
      {filters.map(filter => (
        <button
          key={filter}
          className={`button-outline ${activeFilter === filter ? 'active' : ''}`}
          onClick={() => handleFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;