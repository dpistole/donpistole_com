import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'class-autobind';
import Skills from './components/Skills';
import Experience from './components/Experience';
import HeadShot from 'components/HeadShot';
import experiences from './data/experiences.js'

class ResumeLayout extends Component {

  constructor() {
    super();
    autobind(this);
    this.state = {
      selectedExperience: null,
    }
  }

  /**
   * Handler for focusing a specific experience
   * @param {*} experience 
   */
  handleSelectExperience(experience) {
    if (experience !== null) {
      this.setState({
        selectedExperience: Object.assign({}, experience),
      });
    } else {
      this.setState({
        selectedExperience: null,
      });
    }
  }

  render() {
    const {
      selectedExperience
    } = this.state;

    return (
      <div className="resume-layout">
        <div className="resume-container container">
          <div className="introduction-container">
            <HeadShot />
            <div className="introduction">
              <p>
                I am an IT professional with over 10 years of experience, currently focused on web development using Javascript and PHP.
              </p>
              <p className="hidden-tablet hidden-mobile">
                My background in systems and network adminstration has given me a solid foundational understanding of how the web works.
              </p>
            </div>
          </div>
          <div className="skills-and-experience-container">
            <Skills />
            <Experience
              experiences={experiences}
              onSelectExperience={this.handleSelectExperience}
              selectedExperience={selectedExperience}
            />
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
)(ResumeLayout);
