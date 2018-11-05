import React from 'react';
import pizzaImage from './pizza.png';
import ThingILike from '../ThingILike';

function Pizza() {
  return (
    <ThingILike
      imageSrc={pizzaImage}
      title="Pepperoni Pizza"
    >
      <p>I eat a ton a pizza.</p> 
      <p>Probably too much.</p>
      <p>Definitely too much.</p> 
    </ThingILike>
    );
}

export default Pizza;
