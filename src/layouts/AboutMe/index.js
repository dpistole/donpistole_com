import React, { Component } from 'react';
import autobind from 'class-autobind';
import { Link } from 'react-router-dom';

class AboutMe extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="about-me-layout">
        <div className="container">
          <h1>About Me</h1>
        </div>
      </div>
    )
  }
}

export default ContactMe;
