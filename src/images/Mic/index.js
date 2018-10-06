import React from 'react';
import PropTypes from 'prop-types';
import mic from './mic.png';

function Mic(props) {
  const {
    height,
  } = props;

  return (
    <div className="mic-container">
      <img style={{ height }} alt="microphone" className={`mic`} src={mic} />
    </div>
  );
}

Mic.propTypes = {
  height: PropTypes.height,
};

Mic.defaultProps = {
  height: '150px',
};

export default Mic;
