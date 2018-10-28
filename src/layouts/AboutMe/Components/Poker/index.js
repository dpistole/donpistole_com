import React from 'react';
import hellmuthImage from './hellmuth.png';
import ThingILike from '../ThingILike';

function Poker() {
  return (
    <ThingILike
      imageSrc={hellmuthImage}
      title="Poker"
    >
      <p>Poker is one of my favorite ways to decompress.</p>  
    </ThingILike>
    );
}

export default Poker;
