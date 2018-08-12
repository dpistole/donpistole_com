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
              <div className="card__title">About Me</div>
              <p>
                What's up the internet. My name is Don, I'm a tech guy, this is my website. I don't feel importnant enough to need my own website, but it looks good on a resume, so here we are.
              </p>
              <Link className="card__button" title="Coming Soon" to="/coming-soon">
                Get to know me.
              </Link>
            </div>
            <div className="card">
              <div className="card__title small">Work With Me</div>
              <p>
                Have a project that might be a good fit for my skillset? Let me know, I'm always open to new opportunities. 
              </p>
              <Link className="card__button" title="Coming Soon" to="/coming-soon">
                Let's talk.
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
