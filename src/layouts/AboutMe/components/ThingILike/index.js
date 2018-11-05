import React from 'react';
import PropTypes from 'prop-types';

const ThingILike = (props) => {
  const {
    imageSrc,
    title,
    children,
  } = props;


  return (
    <div className="thing-i-like">
      <div className="image">
        <img src={imageSrc} alt={title}/>
      </div>
      <div className="title">
        {title}
      </div>
      <div className="body">
        {children}
      </div>
    </div>
  )
}

ThingILike.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
};

export default ThingILike;
