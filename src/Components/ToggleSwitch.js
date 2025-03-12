// import React from 'react';

// const ToggleSwitch = ({ selected, setSelected }) => {
//   return (
//     <div className="toggle-switch">
//       <button 
//         className={`toggle-button ${selected === 'buy' ? 'active' : ''}`} 
//         onClick={() => setSelected('buy')}
//       >
//         Buy car
//       </button>
//       <button 
//         className={`toggle-button ${selected === 'sell' ? 'active' : ''}`} 
//         onClick={() => setSelected('sell')}
//       >
//         Sell car
//       </button>
//     </div>
//   );
// };

// export default ToggleSwitch;



import React from 'react';

const ToggleSwitch = ({ selected, setSelected }) => {
  return (
    <div className="toggle-switch">
      <div 
        className={`toggle-option ${selected === 'buy' ? 'active' : ''}`} 
        onClick={() => setSelected('buy')}
      >
        Buy car
      </div>
      <div 
        className={`toggle-option ${selected === 'sell' ? 'active' : ''}`} 
        onClick={() => setSelected('sell')}
      >
        Sell car
      </div>
    </div>
  );
};

export default ToggleSwitch;
