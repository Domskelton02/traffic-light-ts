import { useState } from 'react';

export const FunctionalTrafficLight = () => {
  const lights = ['red', 'yellow', 'green'];
  const [lightIndex, setLightIndex] = useState(0);

  const nextState = () => {
    setLightIndex((lightIndex + 1) % lights.length);
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {lights.map((color, index) => (
          <div key={color} className={`circle ${lightIndex === index ? color : 'black'}`}></div>
        ))}
      </div>
      <button className="next-state-button" onClick={nextState}>Next State</button>
    </div>
  );
};