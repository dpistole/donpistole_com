import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'class-autobind';

class SocialLinksModal extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  getOtherSocialLinks() {
    return [
      {
        href: 'https://github.com/dpistole/',
        title: 'My Github',
        icon: 'fab fa-github-alt',
        class: 'brand-github'
      },
      {
        href: 'https://meta.stackoverflow.com/users/2291892/donald-p',
        title: 'My Stack Overflow',
        icon: 'fab fa-stack-overflow',
        class: 'brand-stack-overflow'
      },
      {
        href: 'https://www.linkedin.com/in/donald-pistole/',
        title: 'My LinkedIn',
        icon: 'fab fa-linkedin-in',
        class: 'brand-linkedin'
      },
      {
        href: 'https://twitter.com/DonaldPistole',
        title: 'My Twitter',
        icon: 'fab fa-twitter',
        class: 'brand-twitter'
      },
      {
        href: 'https://www.reddit.com/user/dpistole/',
        title: 'My Reddit',
        icon: 'fab fa-reddit-alien',
        class: 'brand-reddit'
      }
    ];
  }

  render() {
    const {
      isOpen,
      onBackdropClick,
    } = this.props;

    const otherSocialLinks = this.getOtherSocialLinks();

    return (
      <div className={`modal-container social-links-modal ${isOpen ? 'open' : 'close'}`}>
        <div className="modal-backdrop" onClick={() => { onBackdropClick(); }}>
          <div className="modal-content" onClick={(e) => { e.stopPropagation(); }}>
            <div className="social-links">
              {
                otherSocialLinks.map((data, index) => {
                  return (
                    <div className="link-container" key={index}>
                      <a href={data.href} className={data.class} title={data.title} target="_blank" rel="noopener noreferrer">
                        <i className={data.icon}></i>
                      </a>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SocialLinksModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onBackdropClick: PropTypes.func,
};

SocialLinksModal.defaultProps = {
  onBackdropClick: () => { },
};

export default SocialLinksModal;