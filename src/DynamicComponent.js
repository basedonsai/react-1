import React from 'react';
import valoImage from './image.png';

const DynamicContentComponent = () => {
  const dynamicArray = ["Hi", "Kiran", "Kiran", "Is this ", "Dynamic"];
  
  return (
    <div>
      <h2>Dynamic Array Probably:</h2>
      {dynamicArray.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <h2>Valorant don't play</h2>
      <img src={valoImage} alt="Valorant" />
    </div>
  );
};

export default DynamicContentComponent;
