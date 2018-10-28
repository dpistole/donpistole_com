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
          <div className="cards">
              <Card
                title="Hello World"
                linkTo="/about-me"
                linkText="Get to know me."
              >
                <p>
                  You've stumbled upon the official website of Don Pistole, a web developer and all around tech enthusiast.
                </p>
              </Card>
              <Card
                title="Contact Me"
                linkTo="/contact-me"
                linkText="Leave A Message"
              >
                <p>
                  I can be reached by email at junkmail at donaldpistole dot com, else you can click the button below.
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
