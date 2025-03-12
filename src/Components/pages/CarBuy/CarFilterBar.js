import React from 'react';
import './Carbuy.css';

const FilterBar = ({ setSortOption }) => {
  return (
    <div className="filter-bar">
      <div className="sort-by">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" onChange={(e) => setSortOption(e.target.value)}>
          <option value="relevance">Relevance</option>
          <option value="priceLowToHigh">Price - Low to High</option>
          <option value="priceHighToLow">Price - High to Low</option>
          <option value="kmLowToHigh">KM Driven - Low to High</option>
          <option value="yearNewToOld">Year - New to Old</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
