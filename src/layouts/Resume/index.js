import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'class-autobind';

class ResumeLayout extends Component {

  constructor() {
    super();
    autobind(this);
  }

  render() {
    return (
      <div className="resume-layout">
        <p>@TODO: Resume Page</p>
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
