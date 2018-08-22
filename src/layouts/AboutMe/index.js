import React, { Component } from 'react';

class AboutMe extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="about-me-layout">
        <div className="container">
          <div className="things">
            <div className="empty-thing"></div>
            <div className="thing-i-like">
              <div className="cb-500" />
            </div>
            <div className="thing-i-like">
              <div className="poker" />
            </div>
            <div className="thing-i-like">
              <div className="pc" /></div>
            {/* <div className="thing-i-like"></div> */}
            <div className="empty-thing"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe;
