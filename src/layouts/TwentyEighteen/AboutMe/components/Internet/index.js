import React from 'react';
import aolImage from './aol.png';
import ThingILike from '../ThingILike';

function Internet() {
  return (
    <ThingILike
      imageSrc={aolImage}
      title="The Internet"
    >
      <p>The internet is a wonderful magical place.</p>  
    </ThingILike>
    );
}

export default Internet;
