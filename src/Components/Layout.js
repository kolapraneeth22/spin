import React from 'react';
import Header from './HeaderComp/Header';
// import LocationMenu from './pages/CarBuy/LocationMenu';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
