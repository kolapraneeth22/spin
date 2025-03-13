// FilterBar.js
import React, { useState } from 'react';

const LeftFilterBar = ({ onFilterChange, className }) => { //added className
  const [selectedBrands, setSelectedBrands] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState([0.0, 20.0]);

    const handleBrandChange = (brand) => {
        const isSelected = selectedBrands.includes(brand);
        if (isSelected) {
            setSelectedBrands(selectedBrands.filter((b) => b !== brand));
        } else {
            setSelectedBrands([...selectedBrands, brand]);
        }
        const newBrands = isSelected
            ? selectedBrands.filter((b) => b !== brand)
            : [...selectedBrands, brand];
        onFilterChange(newBrands, searchTerm, priceRange); // Include priceRange
    };

    const handleSearchChange = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
        onFilterChange(selectedBrands, newSearchTerm, priceRange); // Notify parent on change
    };
    const handlePriceRangeChange = (event) => {
      const newValue = parseFloat(event.target.value, 10);
      const [min, max] = priceRange;
      if (event.target.id === 'minPrice') {
        setPriceRange([newValue, max]);
        onFilterChange(selectedBrands, searchTerm, [newValue, max]);
      } else {
        setPriceRange([min, newValue]);
        onFilterChange(selectedBrands, searchTerm, [min, newValue]);
      }
    };
  let appliedClassName = "left-filter-bar";
  if (className) {
      appliedClassName += ` ${className}`;
  }
  return (
      <div className={appliedClassName}>
      <div className="price-range">
        <label>Price Range</label>
        <input type="range" min="0.0" max="20.0"
          value={priceRange[0]}
          onChange={handlePriceRangeChange}
          id="minPrice"
        />
        <input
          type="range"
          min="0.0"
          max="20.0"
          value={priceRange[1]}
          onChange={handlePriceRangeChange}
          id="maxPrice"
        />
        <p>
          Range: ₹{priceRange[0]} - ₹{priceRange[1]} Lakh
        </p>
        </div>
      <div className="brands-models">
        <label>Brands + Models</label>
        <input type="text" placeholder="Search" style={{ width: '100%' }} value={searchTerm} onChange={handleSearchChange} />
        <div>
          <label><input type="checkbox" checked={selectedBrands.includes('Hyundai')} onChange={() => handleBrandChange('Hyundai')} /> Hyundai</label>
          <label><input type="checkbox" checked={selectedBrands.includes('Maruti Suzuki')} onChange={() => handleBrandChange('Maruti Suzuki')} /> Maruti Suzuki</label>
          <label><input type="checkbox" checked={selectedBrands.includes('Honda')} onChange={() => handleBrandChange('Honda')} /> Honda</label>
          <label><input type="checkbox" checked={selectedBrands.includes('Tata')} onChange={() => handleBrandChange('Tata')} /> Tata</label>
          <label><input type="checkbox" checked={selectedBrands.includes('Renault')} onChange={() => handleBrandChange('Renault')} /> Renault</label>
          <label><input type="checkbox" checked={selectedBrands.includes('Volkswagen')} onChange={() => handleBrandChange('Volkswagen')} /> Volkswagen</label>
        </div>
      </div>
    </div>
  );
};

export default LeftFilterBar;
