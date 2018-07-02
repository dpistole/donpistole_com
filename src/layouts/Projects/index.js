import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'class-autobind';

class ProjectLayout extends Component {

  constructor() {
    super();
    autobind(this);
  }

  render() {
    return (
      <div className="project-layout">
        <div className="coming-soon">
          I'm definately going to get some projects done for this page. Definately.
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
