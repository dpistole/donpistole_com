import React from 'react';
import PropTypes from 'prop-types';
import hellmuth from './hellmuth.png';

function Hellmuth(props) {
  const {
    height,
  } = props;

  return (
    <div className="hellmuth-container">
      <img style={{ height }}alt="Greatest of All Time" className={`hellmuth`} src={hellmuth} />
    </div>
  );
}

Hellmuth.propTypes = {
  height: PropTypes.height,
};

Hellmuth.defaultProps = {
  height: '150px',
};

export default Hellmuth;
