import React from 'react';
import bikeImage from './bike.png';
import ThingILike from '../ThingILike';

function Motorcycle() {
  return (
    <ThingILike
      imageSrc={bikeImage}
      title="My Motorcycle"
    >
      <p>My CB500F is a real good time.</p>
      <p>Everywhere I go is fun.</p>
    </ThingILike>
    );
}

export default Motorcycle;
