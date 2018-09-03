import React, { Component } from 'react';
import { connect } from 'react-redux';
// import _ from 'lodash';
import autobind from 'class-autobind';
// components
import { Link } from 'react-router-dom';
import FooterBar from 'components/FooterBar';

class OutdoorsSceneLayout extends Component {

  constructor() {
    super();
    autobind(this);
  }

  render() {
    return (
      <div className={`home-layout`}>
        <div className="container">
          <div className="cards">
            <div className="card">
              <div className="card__title">Welcome</div>
              <p>
                Hey there. Thanks for stopping by. I'm Don, and you've arrived at my website.
              </p>
              <p>
                It's { (new Date()).getFullYear()}, and I figure as a professional in the tech industry I'd better have a website, so here we are.
              </p>
              <Link className="card__button" title="Coming Soon" to="/about-me">
                Get to know me.
              </Link>
            </div>
            <div className="card">
              <div className="card__title small">Text Voicemail</div>
              <p>
                Looking to get in touch with me? Click the button.
              </p>
              <Link className="card__button" title="Contact Me" to="/contact-me">
                Contact Me
              </Link>
            </div>
          </div>
          <FooterBar />
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  const props = {
  };

  return props;
}

function mapDispatchToProps(dispatch) {
  const props = {
  };

  return props;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OutdoorsSceneLayout);
