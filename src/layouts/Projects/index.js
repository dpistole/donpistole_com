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
    const {
      slideIndex,
    } = this.state;

    if (!this.isPreviousButtonDisabled()) {
      this.setState({
        slideIndex: slideIndex - 1,
      })
    }
  }

  showNextProject() {
    const {
      slideIndex,
    } = this.state;

    if (!this.isNextButtonDisabled()) {
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

    return (
      <div className="project-layout">
        <div className="projects-slide-show">
          <div className="controls">
            <div className={`previous-slide ${this.isPreviousButtonDisabled ? 'disabled' : null}`} onClick={this.showPreviousProject} role="button" tabIndex="-1" title="Show Previous Slide">
              <i className="fas fa-lg fa-arrow-circle-right"></i>
            </div>
            <div className={`next-slide ${this.isNextButtonDisabled ? 'disabled' : null}`} onClick={this.showNextProject} role="button" tabIndex="-1" title="Show Previous Slide">
              <i className="fas fa-lg fa-arrow-circle-left"></i>
            </div>
          </div>
          {/* { projectSlides[slideIndex] } */}
          <div className="project-slide">
            <h1>Coming Soon</h1>
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
