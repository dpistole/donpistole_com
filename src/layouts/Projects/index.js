import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'class-autobind';

class ProjectLayout extends Component {

  constructor() {
    super();
    this.state = {
      slideIndex: 0,
    };
    autobind(this);
  }

  getProjectSlides() {
    return [

    ];
  }

  showPreviousProject() {
    const projectSlides = this.getProjectSlides();
    const {
      slideIndex,
    } = this.state;

    if(!this.isPreviousButtonDisabled()) {
      this.setState({
        slideIndex: slideIndex - 1,
      })
    }
  }

  showNextProject() {
    const {
      slideIndex,
    } = this.state;

    if(!this.isNextButtonDisabled()) {
      this.setState({
        slideIndex: slideIndex + 1,
      });
    }
  }

  isPreviousButtonDisabled() {
    const {
      slideIndex,
    } = this.state;
    return (slideIndex === 0);
  }

  isNextButtonDisabled() {
    const {
      slideIndex,
    } = this.state;
    const projectSlides = this.getProjectSlides();
    const availableSlides = (projectSlides.length + 1);
    return (slideIndex < availableSlides);
  }

  render() {

    const {
      slideIndex,
    } = this.state;

    const projectSlides = this.getProjectSlides();

    return (
      <div className="project-layout">
        <div className="projects-slide-show">
          {/* { projectSlides[slideIndex] } */}
          <div className="project-slide">
            <div className="project-code-name">Code Name: <span className="code-name">"The Battlestation"</span></div>
            <div className="project-id">Project ID: <span className="id">847713-574710N</span></div>
            <div className="project-image-container">
              <img src="./images/battlestation.jpg" alt="The Battlestation"/>
            </div>
            <div className="project-description-container">
              <div className="project-description">
                <p>
                  While not a web dev project, I'm pretty proud of my home office setup. Featuring 6 screens, two computers, and some fancy lights.
                </p>
                <p>
                  I've got one PC that I use for work, running Ubuntu and driving the 6 monitors. The second PC is an AMD Gaming Build I did, running Windows 10.
                </p>
                <p>
                  Keyboard, mouse, and headphones are connected to a USB switch that lets me hit a button to toggle between the two computers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="controls">
          <div className={`previous-slide ${ this.isPreviousButtonDisabled ? 'disabled' : null }`} onClick={this.showPreviousProject} role="button" tabIndex="-1" title="Show Previous Slide">
            Previous
          </div>
          <div className={`next-slide ${ this.isNextButtonDisabled ? 'disabled' : null }`} onClick={this.showNextProject} role="button" tabIndex="-1" title="Show Previous Slide">
            Next
          </div>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const props = {};
  return props;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectLayout);
