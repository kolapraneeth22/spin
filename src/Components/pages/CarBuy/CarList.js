// import React, { useState, useEffect } from 'react';
// import carData from './CarData';
// import './Carbuy.css';

// const CarList = ({ sortOption }) => {
//   const [sortedCars, setSortedCars] = useState([]);

//   useEffect(() => {
//     let sortedArray = [...carData];
//     switch (sortOption) {
//       case 'priceLowToHigh':
//         sortedArray.sort((a, b) => a.price - b.price);
//         break;
//       case 'priceHighToLow':
//         sortedArray.sort((a, b) => b.price - a.price);
//         break;
//       case 'kmLowToHigh':
//         sortedArray.sort((a, b) => a.km - b.km);
//         break;
//       case 'yearNewToOld':
//         sortedArray.sort((a, b) => b.year - a.year);
//         break;
//       default:
//         break;
//     }
//     setSortedCars(sortedArray);
//   }, [sortOption]);

//   return (
//     <div className="car-list">
//         <div className="car-count">
//         {sortedCars.length} Used cars available
//       </div>
//       {sortedCars.map((car) => (
//         <div className="car-card" key={car.id}>
//           <img src={car.image} alt={car.model} />
//           <h3>{car.model}</h3>
//           <p>Price: ₹{car.price} Lakh</p>
//           <p>Year: {car.year}</p>
//           <p>KM Driven: {car.km} km</p>
//           <p>Fuel: {car.fuel}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CarList;


import React, { useState, useEffect } from 'react';
import './Carbuy.css';

const CarList = ({ sortOption, cars }) => {
  const [sortedCars, setSortedCars] = useState([]);

  useEffect(() => {
    let sortedArray = [...cars];
    switch (sortOption) {
      case 'priceLowToHigh':
        sortedArray.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighToLow':
        sortedArray.sort((a, b) => b.price - a.price);
        break;
      case 'kmLowToHigh':
        sortedArray.sort((a, b) => a.km - b.km);
        break;
      case 'yearNewToOld':
        sortedArray.sort((a, b) => b.year - a.year);
        break;
      default:
        break;
    }
    setSortedCars(sortedArray);
  }, [sortOption, cars]);

  return (
    <div className="car-list">
      <div className="car-count">
        {sortedCars.length} Used cars available
      </div>
      {sortedCars.map((car) => (
        <div className="car-card" key={car.id}>
          <img src={car.image} alt={car.model} />
          <h3>{car.model}</h3>
          <p>Price: ₹{car.price} Lakh</p>
          <p>Year: {car.year}</p>
          <p>KM Driven: {car.km} km</p>
          <p>Fuel: {car.fuel}</p>
        </div>
      ))}
    </div>
  );
};

export default CarList;
