import React, { Component } from 'react';
import Motorcycle from 'images/Motorcycle';
import AOL from 'images/AOL';
import Hellmuth from 'images/Hellmuth';
import Mic from 'images/Mic';
import Pizza from 'images/Pizza';
// import { Link } from 'react-router-dom';

class AboutMe extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="about-me-layout">
        <div className="container">
          <div className="header">Things I Like:</div>
          <div className="things-i-like">
            {/* Motorcycle */}
            <div className="thing">
              <div className="image">
                <Motorcycle />
              </div>
              <div className="title">
                My Motorcycle
              </div>
            </div>
            {/* Internet */}
            <div className="thing">
              <div className="image">
                <AOL />
              </div>
              <div className="title">
                The Internet
              </div>
            </div>
            {/* Poker */}
            <div className="thing">
              <div className="image">
                <Hellmuth />
              </div>
              <div className="title">
                Poker
              </div>
            </div>
            {/* Mic */}
            <div className="thing">
              <div className="image">
                <Mic height="150px" />
              </div>
              <div className="title">
                Podcasts
              </div>
            </div>
            {/* Pizza */}
            <div className="thing">
              <div className="image">
                <Pizza />
              </div>
              <div className="title">
                Pepperoni Pizza
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe;
