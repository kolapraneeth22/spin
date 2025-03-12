import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Slideshow from './Slideshow';
import ToggleSwitch from './ToggleSwitch';
import BuyCar from './BuyCar';
import SellCar from './SellCar';
import Filterbar from './FilterBar';

const MainContent = () => {
  const location = useLocation();
  const [selected, setSelected] = useState('buy');
  const showMainComponents = location.pathname === '/';

  return (
    <>
      {showMainComponents && (
        <>
          <Filterbar />
          <Slideshow />
          <ToggleSwitch selected={selected} setSelected={setSelected} />
          {selected === 'buy' ? <BuyCar /> : <SellCar />}
        </>
      )}
    </>
  );
};

export default MainContent;
