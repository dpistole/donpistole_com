import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'class-autobind';
// import {
//   Route,
//   Link,
//   Switch,
// } from 'react-router-dom';

class ResumeLayout extends Component {

  constructor() {
    super();
    autobind(this);
  }

  render() {
    return (
      <div className="resume-layout">
        {/* Front End */}
        <div className="skill-set">
          <div className="title">Front End Web Development</div>
          <ul className="skills">
            <li className="skill">Javascript</li>
            <li className="skill">React</li>
            <li className="skill">Tooling</li>
            <li className="skill">
              <ul className="skills">
                <li className="skill">NPM</li>
                <li className="skill">Babel</li>
                <li className="skill">Webpack</li>
                <li className="skill">...and more.</li>
              </ul>
            </li>
          </ul>
        </div>
        {/* Back End */}
        <div className="skill-set">
          <div className="title">Back End Web Development</div>
          <ul className="skills">
            <li className="skill">Node.js</li>
            <li className="skill">PHP</li>
            <li>
              <ul className="skills">
                <li className="skill">Composer</li>     
                <li className="skill">Symfony</li>   
                <li className="skill">Laravel</li>           
              </ul>
            </li>
          </ul>
        </div>
        {/* Systems Administration */}
        <div className="skill-set">
          <div className="title">Systems Administration</div>
          <ul className="skills">
            <li className="skill">Server Adminstration (Linux/Windows/OSX)</li>
            <li className="skill">Amazon Web Services</li>
            <li className="skill">
              <ul className="skills">
                <li className="skill">VPC</li>
                <li className="skill">EC2</li>
                <li className="skill">S3</li>
                <li className="skill">CloundFront</li>
                <li className="skill">CloundFormation</li>
                <li className="skill">API Gateway</li>
                <li className="skill">Lambda</li>
              </ul>
            </li>
            <li className="skill">Desktop Support (Linux/Windows/OSX)</li>
          </ul>
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
