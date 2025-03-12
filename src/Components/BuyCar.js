import React from 'react';
import BCpic1 from './Images/BCpic1.webp';
import BCpic2 from './Images/BCpic2.webp';
import BCpic3 from './Images/BCpic3.webp';
import BCpic4 from './Images/BCpic4.webp';

const BuyCar = () => {
  return (
    <div className="buy-car">
      <h2 style={{ color: '#2e054e', fontSize: '28px', textAlign: 'center', margin: '5px 0' ,fontWeight:'bold',fontFamily:'font-heavy',lineHeight:'34px'}}>Spinny benefits</h2>
      <div className="cards-container">
        <div className="card">
          <img src={BCpic1} alt="200-Points Inspection" />
          <h3 >200-Points Inspection</h3>
          <p>Every car is carefully handpicked after a thorough quality inspection.</p>
        </div>
        <div className="card">
          <img src={BCpic2} alt="Warranty included" />
          <h3>Warranty included</h3>
          <p>Our way of being there for you through your car ownership journey.</p>
        </div>
        <div className="card">
          <img src={BCpic3} alt="5-Day Money Back" />
          <h3>5-Day Money Back</h3>
          <p>All our cars come with a no-questions-asked 5-day money back guarantee.</p>
        </div>
        <div className="card">
          <img src={BCpic4} alt="Fixed Price Assurance" />
          <h3>Fixed Price Assurance</h3>
          <p>No more endless negotiations or haggling. With Spinny, you get the best deal upfront and right away.</p>
        </div>
      </div>
    </div>
  );
};

export default BuyCar;
