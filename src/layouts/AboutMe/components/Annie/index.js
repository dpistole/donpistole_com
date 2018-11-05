import React from 'react';
import annieImage from './annie.png';
import ThingILike from '../ThingILike';

function Annie() {
  return (
    <ThingILike
      imageSrc={annieImage}
      title="Annie"
    >
      <p>Hey Annie <span role="img" aria-label="it's annie">😁</span></p>
      <p>I like you the most.</p>
    </ThingILike>
    );
}

export default Annie;
