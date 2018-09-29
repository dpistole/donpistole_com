import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'class-autobind';
import Skills from './components/Skills';
import Experience from './components/Experience';

class ResumeLayout extends Component {

  constructor() {
    super();
    autobind(this);
  }

  render() {
    return (
      <div className="resume-layout">
        <div className="resume-container container">
          <Skills />
          <Experience />
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
