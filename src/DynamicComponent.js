import React from 'react';
import valo from './image.png';
const DynamicContentComponent = () => {
  const dynamicArray = ["Hi", "Kiran", "Kiran", "Is this ", "Dynamic"];
  const imageUrl = process.env.PUBLIC_URL + 'valo.png';

  return (
    <div>
      <h2>Dynamic Array Probably:</h2>
      {dynamicArray.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <h2>Valorant dont play</h2>
      <img src={valo} alt="valo" />
    </div>
  );
};

export default DynamicContentComponent;
