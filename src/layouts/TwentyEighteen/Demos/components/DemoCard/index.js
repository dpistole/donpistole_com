import React from 'react';
import PropTypes from 'prop-types';

const DemoCard = (props) => {
  const {
    title,
    children,
    linkTo,
    linkText,
    repoUrl,
  } = props;

  return (
    <div className="demo-card">
      {
        title && <div className="demo-card__title">{ title }</div>
      }
      {
        children
      }
      {
        repoUrl &&
          <a
            className="demo-card__repo-link"
            href={repoUrl}
            title="View the code on GitHub."
            target="_new"
          >
            <span className="fab fa-github-alt fa-2x"></span>
          </a>
      }
      {
        linkTo && 
        <a
          className="demo-card__button"
          href={linkTo}
          target="_new"
        >
          { linkText }
        </a>
      }
    </div>
    );
}

DemoCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  linkTo: PropTypes.string,
  linkTitle: PropTypes.string,
  linkText: PropTypes.string,
  repoUrl: PropTypes.string,
};

DemoCard.defaultProps = {
  title: null,
  linkTo: null,
  linkTitle: null,
  linkText: null,
  repoUrl: null,
};

export default DemoCard;
