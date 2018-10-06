import React from 'react';
import PropTypes from 'prop-types';
import pizza from './pizza.png';

function Pizza(props) {
  const {
    height,
  } = props;

  return (
    <div className="pizza-container">
      <img style={{ height }}alt="Pepperoni Pizza" className={`pizza`} src={pizza} />
    </div>
  );
}

Pizza.propTypes = {
  height: PropTypes.height,
};

Pizza.defaultProps = {
  height: '200px',
};

export default Pizza;
