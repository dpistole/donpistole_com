import React from 'react';
import micImage from './mic.png';
import ThingILike from '../ThingILike';

function Podcasts() {
  return (
    <ThingILike
      imageSrc={micImage}
      title="Podcasts"
    >
      <p>My favorite podcasts are about technology and business.</p>
    </ThingILike>
    );
}

export default Podcasts;
