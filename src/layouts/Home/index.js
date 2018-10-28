import React, { Component } from 'react';
import { connect } from 'react-redux';
// import _ from 'lodash';
import autobind from 'class-autobind';
// components
import FooterBar from 'components/FooterBar';
import Card from 'components/Card';

class OutdoorsSceneLayout extends Component {

  constructor() {
    super();
    autobind(this);
  }

  render() {
    return (
      <div className={`home-layout`}>
        <div className="container">
          <div className="cards two-cards">
              <Card
                title="Resume"
                linkTo="/resume"
                linkText="View Resume."
              >
                <p>
                  Here because you're considering working with me? This is the button for you!
                </p>
              </Card>
              <Card
                title="About Me"
                linkTo="/about-me"
                linkText="Get to know me."
              >
                <p>
                  It's like MTV diary, but a webpage instead of a show, and I'm not a celebrity.
                </p>
              </Card>
              <Card
                title="Contact Me"
                linkTo="/contact-me"
                linkText="Leave A Message"
              >
                <p>
                  Looking to get in touch? Click the button.
                </p>
              </Card>
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
