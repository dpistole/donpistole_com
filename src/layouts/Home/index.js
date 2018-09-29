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
              <div className="card__title small">Hello World</div>
              <p>Hey there, thanks for visiting.</p>
              <p>I'm gonna be honest, other than job hunting I really don't feel like I'm important enough to warrant having my own website.</p>
              <p>
                But it's { (new Date()).getFullYear()}, and someone might google me, so here we are.
              </p>
              <Link className="card__button" title="Coming Soon" to="/about-me">
                Get to know me.
              </Link>
            </div>
            <div className="card">
              <div className="card__title small">Text Voicemail</div>
              <p>
                Hello, you've reached the webpage of Don Pistole. I'm not available at the moment, but leave a message and I'll get back to you as soon as I can.
              </p>
              <p>
                Beeeeeeeeeeeeeeeeep.
              </p>
              <Link className="card__button" title="Contact Me" to="/contact-me">
                Leave A Message
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
