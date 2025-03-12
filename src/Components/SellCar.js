import React from 'react';

const SellCar = () => {
  return (
    <div className="sell-car">
      <h2>Select your car brand to get started</h2>
      <div className="brands-container">
        <div className="brand">Maruti Suzuki</div>
        <div className="brand">Hyundai</div>
        <div className="brand">Tata</div>
        <div className="brand">Honda</div>
        <div className="brand">Renault</div>
        <div className="brand">Ford</div>
        <div className="brand">Volkswagen</div>
        <div className="brand">Mahindra</div>
        <div className="brand">Kia</div>
        <div className="brand">BMW</div>
        <div className="brand">Mercedes-Benz</div>
        <div className="brand">More</div>
      </div>
      <button className="get-price-button">Get price</button>
    </div>
  );
};

export default SellCar;
