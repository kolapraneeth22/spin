// import React, { useState } from 'react';
// import FilterBar from './CarFilterBar';
// import CarList from './CarList';
// import LeftFilterBar from './LeftFilterBar';
// import './Carbuy.css';

// const CarBuy = () => {
//   const [sortOption, setSortOption] = useState('relevance');

//   return (
//     <div className="car-buy-container">
//       <LeftFilterBar setSortOption={setSortOption} />
//       <div style={{ flexGrow: 1 }}>
//         <FilterBar setSortOption={setSortOption} />
//         <CarList sortOption={sortOption} />
//       </div>
//     </div>
//   );
// };

// export default CarBuy;




import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import FilterBar from './CarFilterBar';
import CarList from './CarList';
import LeftFilterBar from './LeftFilterBar';
import CarData from './CarData';
import './Carbuy.css';

const CarBuy = () => {
  const [sortOption, setSortOption] = useState('relevance');
  const { location } = useParams();
  const currentLocation = useLocation();
  const [filterCriteria, setFilterCriteria] = useState({ brands: [], searchTerm: '', priceRange: [0.0, 20.0], });

  const handleFilterChange = (brands, searchTerm, priceRange) => {
    setFilterCriteria({ brands, searchTerm, priceRange });
  };

  let filteredCars = location ? CarData.filter(car => car.location === location) : CarData;

  filteredCars = filteredCars.filter((car) => {
    const brandMatch = filterCriteria.brands.length === 0 || filterCriteria.brands.includes(car.model.split(' ')[0]);
    const searchMatch = car.model.toLowerCase().includes(filterCriteria.searchTerm.toLowerCase());
    const priceMatch =
      parseFloat(car.price) >= filterCriteria.priceRange[0] &&
      parseFloat(car.price) <= filterCriteria.priceRange[1];
    return brandMatch && searchMatch && priceMatch;
  });

  const isLocationRoute = currentLocation.pathname.includes('/buycar/location/');
  const leftFilterBarClass = isLocationRoute ? 'narrow' : 'wide'; //added narrow and wide class  

  return (
    <div className="car-buy-container">
      <LeftFilterBar
        className={leftFilterBarClass}
        onFilterChange={handleFilterChange} />
      <div className="car-list-container">
        <div className="car-filter">
          <FilterBar setSortOption={setSortOption} />
        </div>
        <CarList sortOption={sortOption} cars={filteredCars} />
      </div>
    </div>
  );
};

export default CarBuy;
