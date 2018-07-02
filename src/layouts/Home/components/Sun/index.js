

import React from 'react';
import PropTypes from 'prop-types';
import SunSVG from 'svg/sun.svg';

const Sun = (props) => {
  const {
    addClasses,
    mergeStyles,
    onClick,
  } = props;

  let classNames = 'sun-container';
  addClasses.forEach((additionalClass) => {
    classNames += ` ${additionalClass}`;
  });

  return (
    <div
      className={classNames}
      style={mergeStyles}
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: SunSVG }}
    />
  );
}

Sun.propTypes = {
  addClasses: PropTypes.array,
  mergeStyles: PropTypes.shape({}),
  onClick: PropTypes.func,
};

Sun.defaultProps = {
  addClasses: [],
  mergeStyles: {},
  onClick: () => { },
}

export default Sun;