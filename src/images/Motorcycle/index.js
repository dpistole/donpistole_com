import React from 'react';
import PropTypes from 'prop-types';
import motorcycle from './bike.png';

function Motorcycle(props) {
  const {
    height,
  } = props;

  return (
    <div className="motorcycle-container">
      <img style={{ height }}alt="Don's Motorcycle" className={`motorcycle`} src={motorcycle} />
    </div>
  );
}

Motorcycle.propTypes = {
  height: PropTypes.height,
};

Motorcycle.defaultProps = {
  height: '200px',
};

export default Motorcycle;
