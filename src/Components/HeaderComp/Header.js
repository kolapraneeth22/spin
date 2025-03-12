// import React from 'react';
// import SelectLocation from './SelectLocation';
// import SearchBar from './SearchBar';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header>
//       <div className='header-content'>
//       <img src="/Spinny_logo-3.png" alt="Spinny Logo" className='logo' />
//       <SelectLocation />
//       <SearchBar />
//       <nav>
//       <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/buycar">Buy Car</Link></li>
//             <li><Link to="/sellcar">Sell Car</Link></li>
//       </ul>
//       </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import SelectLocation from './SelectLocation';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';


const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <header>
      <div className='header-content'>
        <img src="/Spinny_logo-3.png" alt="Spinny Logo" className='logo' />
        <SelectLocation />
        <SearchBar />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="dropdown"
            >
              <Link to="/buycar">Buy Car</Link>
              {dropdownVisible && (
                <ul className="dropdown-menu">
                  <li><Link to="/buycar">View all cars</Link></li>
                  <li><Link to="/buycar/location/Hyderabad">Used cars in Hyderabad</Link></li>
                  <li><Link to="/buycar/location/Mumbai">Used cars in Mumbai</Link></li>
                  <li><Link to="/buycar/location/Bengaluru">Used cars in Bengaluru</Link></li>
                  <li><Link to="/buycar/location/Chennai">Used cars in Chennai</Link></li>
                  {/* Add more locations as needed */}
                </ul>
              )}
            </li>
            <li><Link to="/sellcar">Sell Car</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
