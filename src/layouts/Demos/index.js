import React, { Component } from 'react';
import autobind from 'class-autobind';

class DemosLayout extends Component {

  constructor(props) {
    super(props);
    autobind(this);
  }

  render() {
    return (
      <div className="demos-layout">
        <div className="container">
        </div>
      </div>
    );
  }

}

export default DemosLayout;
