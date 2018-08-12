import React from 'react';
import PropTypes from 'prop-types';
import headshot from 'images/hs.jpg';

function HeadShot(props) {
  const {
    shape,
  } = props;

  return (
    <div className="head-shot-container">
      <img alt="Don's Head" className={`head-shot ${shape}`} src={headshot} />
    </div>
  );
}

HeadShot.propTypes = {
  shape: PropTypes.string,
};

HeadShot.defaultProps = {
  shape: 'square',
};

export default HeadShot;
