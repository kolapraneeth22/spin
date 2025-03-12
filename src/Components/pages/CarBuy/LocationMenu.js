import React from 'react';
import { Link } from 'react-router-dom';


const LocationMenu = () => {
  return (
    <div className="location-menu">
      <Link to="/buycar">View all cars</Link>
      <Link to="/buycar/location/Hyderabad">Used cars in Hyderabad</Link>
      <Link to="/buycar/location/Mumbai">Used cars in Mumbai</Link>
      <Link to="/buycar/location/Bengaluru">Used cars in Bengaluru</Link>
      <Link to="/buycar/location/Chennai">Used cars in Chennai</Link>
      {/* Add more locations as needed */}
    </div>
  );
};

export default LocationMenu;
