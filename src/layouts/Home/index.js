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
              <p>
                You've stumbled upon the official website of Don Pistole, a web developer and all around tech enthusiast.
              </p>
              <p>
                There isn't a ton here, but what kind of web developer would I be if I didn't have my own website?
              </p>
              <Link className="card__button" title="Coming Soon" to="/about-me">
                Get to know me.
              </Link>
            </div>
            <div className="card">
              <div className="card__title small">Contact Me</div>
              <p>
                I can be reached by email at junkmail at donaldpistole dot com, else you can click the button below.
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
