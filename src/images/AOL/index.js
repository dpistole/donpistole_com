import React from 'react';
import PropTypes from 'prop-types';
import aol from './aol.png';

function AOL(props) {
  const {
    height,
  } = props;

  return (
    <div className="aol-container">
      <img style={{ height }}alt="America Online" className={`aol`} src={aol} />
    </div>
  );
}

AOL.propTypes = {
  height: PropTypes.height,
};

AOL.defaultProps = {
  height: '150px',
};

export default AOL;
