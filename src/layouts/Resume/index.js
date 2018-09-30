import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'class-autobind';
import Skills from './components/Skills';
import Experience from './components/Experience';
import HeadShot from 'components/HeadShot';

class ResumeLayout extends Component {

  constructor() {
    super();
    autobind(this);
  }

  render() {
    return (
      <div className="resume-layout">
        <div className="resume-container container">
          <div className="my-name-is">
            Don Pistole
          </div>
          <div className="introduction-container">
            <HeadShot />
            <div className="introduction">
              <p>
                I am an IT professional with over 10 years of experience, currently focused on Front End Development and AWS solution engineering.
              </p>
            </div>
          </div>
          <div className="skills-and-experience-container">
            <Skills />
            <Experience />
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
