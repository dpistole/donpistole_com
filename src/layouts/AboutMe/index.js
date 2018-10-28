import React, { Component } from 'react';
import Pizza from './Components/Pizza';
import Motorcyle from './Components/Motorcycle';
import Podcasts from './Components/Podcasts';
import Poker from './Components/Poker';
import Internet from './Components/Internet';
import Annie from './Components/Annie';
import autobind from 'class-autobind';

const things = [
  <Pizza />,
  <Motorcyle />,
  <Podcasts />,
  <Poker />,
  <Internet />
];

class AboutMe extends Component {
  constructor(props){
    super(props);
    autobind(this);
    this.state = {
      currentIndex: 1,
      consecutivePrevious: 0,
      consecutiveNext: 0,
    };
  }

  getCurrentThingIndex() {
    const {
      currentIndex,
    } = this.state;

    return currentIndex;
  }

  getPreviousThingIndex() {
    const {
      currentIndex,
    } = this.state;

    // if we're at the start of the array, return the last index
    return currentIndex === 0 ? (things.length - 1) : (currentIndex - 1);
  }

  getNextThingIndex() {
    const {
      currentIndex,
    } = this.state;

    // if we're at the end of the array, return the first index
    return currentIndex === (things.length - 1) ? 0 : (currentIndex + 1);
  }

  showPreviousThing() {
    const {
      consecutivePrevious,
    } = this.state;

    this.setState({
      currentIndex: this.getPreviousThingIndex(),
      consecutivePrevious: consecutivePrevious+1,
      consecutiveNext: 0, 
    });
  }

  showNextThing() {
    const {
      consecutiveNext,
      consecutivePrevious,
    } = this.state;
    this.setState({
      currentIndex: this.getNextThingIndex(),
      consecutiveNext: consecutiveNext+1,
      consecutivePrevious: consecutivePrevious === 6 ? 6 : 0,
    });
  }

  render() {

    const {
      consecutiveNext,
      consecutivePrevious,
    } = this.state;

    let showAnnie = false;
    
    // ;)
    if(`${consecutivePrevious}${consecutiveNext}` === '69'){
      showAnnie = true;
    }

    return (
      <div className="about-me-layout">
        <div className="container">
          <h1>Things I Like</h1>
          <div className="things-i-like">
            <div
              className="thing left-thing"
              role="button"
              onClick={this.showPreviousThing}
            >
              { things[this.getPreviousThingIndex()] }
            </div>
            <div className="thing center-thing">
              { showAnnie ?
                <Annie /> :
                things[this.getCurrentThingIndex()]
              }
            </div>
            <div
              className="thing right-thing"
              role="button"
              onClick={this.showNextThing}
            >
              { things[this.getNextThingIndex()] }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe;
