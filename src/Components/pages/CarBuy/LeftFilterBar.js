// FilterBar.js
import React from 'react';

const LeftFilterBar = ({ setSortOption, className }) => { //added className
  let appliedClassName = "left-filter-bar";
  if (className) {
      appliedClassName += ` ${className}`;
  }
  return (
      <div className={appliedClassName}>
      <div className="price-range">
        <label>Price Range</label>
        <input type="range" min="50000" max="7000000" />
      </div>
      <div className="brands-models">
        <label>Brands + Models</label>
        <input type="text" placeholder="Search" style={{ width: '100%' }} />
        <div>
          <label><input type="checkbox" /> Hyundai</label>
          <label><input type="checkbox" /> Maruti Suzuki</label>
          <label><input type="checkbox" /> Honda</label>
          <label><input type="checkbox" /> Tata</label>
          <label><input type="checkbox" /> Renault</label>
          <label><input type="checkbox" /> Volkswagen</label>
        </div>
      </div>
    </div>
  );
};

export default LeftFilterBar;
