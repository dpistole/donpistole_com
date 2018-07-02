import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'class-autobind';
// components
import HTMLResume from './components/HTMLResume.js'

class ResumeLayout extends Component {

  constructor() {
    super();
    autobind(this);
  }

  render() {
    return (
      <div className="resume-layout">
        <div className="html-resume-container container">
          <HTMLResume />
        </div>
        <div className="download-resume-container container">
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
