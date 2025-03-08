import React from 'react';
import SelectLocation from './SelectLocation';
import SearchBar from './SearchBar';


const Header = () => {
  return (
    <header>
      <div className='header-content'>
      {/* <h1>Spinny Clone</h1> */}
      <img src="/Spinny_logo-3.png" alt="Spinny Logo" className='logo' />
      <SelectLocation />
      <SearchBar />
      <nav>
        <ul >
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;
