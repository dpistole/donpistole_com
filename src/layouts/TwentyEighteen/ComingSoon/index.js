import React, { Component } from 'react';
// import _ from 'lodash';
import autobind from 'class-autobind';
// components
import FooterBar from 'components/FooterBar';

class ComingSoon extends Component {

  constructor() {
    super();
    autobind(this);
  }

  render() {

    return (
      <div className={`coming-soon-layout`}>
        <div className="container">
          <div className="coming-soon">
            <div className="shit">
              Oops.
            </div>
            <div className="well-this">
              Well this is embarassing.
            </div>
            <div className="blah-blah">
              <p>It looks like you've found a part of the site that's on my To Do list.</p>
              <p>
                Hmmm. Hopefully you wern't anybody super important, otherwise this doesn't make me look very good.
              </p>
            </div>
          </div>
          <FooterBar />
        </div>
      </div>
    );
  }

}

export default ComingSoon;
