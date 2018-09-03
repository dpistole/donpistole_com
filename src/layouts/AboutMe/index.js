import React, { Component } from 'react';
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

          <div className="things-i-like">
            <p className="header">Things I Like</p>
            <ul>
              <li>The Internet</li>
              <li>My Motorcyle</li>
              <li>Pizza</li>
              <li>Poker</li>
              <li>Podcasts</li>
            </ul>
          </div>
        
          <div className="things-i-know">
            <p className="header">Things I Know</p>
            <ul>
              <li>
                <Link title="Web Development" to="/">
                  Web Development
                </Link>
              </li>
              <li>Systems Administration</li>
              <li>Networking</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe;
