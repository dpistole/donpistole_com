import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const {
    title,
    children,
    linkTo,
    linkText,
  } = props;

  return (
    <div className="card">
      {
        title && <div className="card__title">{ title }</div>
      }
      {
        children
      }
      {
        linkTo && 
        <Link className="card__button" to={linkTo}>
          { linkText }
        </Link>
      }
    </div>
    );
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  linkTo: PropTypes.string,
  linkTitle: PropTypes.string,
  linkText: PropTypes.string,
};

Card.defaultProps = {
  title: null,
  linkTo: null,
  linkTitle: null,
  linkText: null,
};

export default Card;
