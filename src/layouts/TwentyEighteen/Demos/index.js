import React, { Component } from 'react';
import autobind from 'class-autobind';
import DemoCard from './components/DemoCard';

class DemosLayout extends Component {

  constructor(props) {
    super(props);
    autobind(this);
  }

  render() {
    return (
      <div className="demos-layout">
        <div className="container">
          {/* ToDo Apps */}
          <div className="demo-section">
            <div className="title">
              ToDo Apps
            </div>
            <div className="description">
              <p>
                The simplicity and brevity of the ToDo App makes it a solid (though boring) choice for a demo application.
              </p>
            </div>
            <div className="demo-cards">
              <DemoCard
                title="ToDo React"
                linkTo="https://todo-react.donpistole.com"
                linkText="Open Demo"
                repoUrl="https://github.com/dpistole/todo_react"
              >
                <p>
                  A ToDo app built using Facebook's React library.
                </p>
              </DemoCard>
            </div>
          </div>
          {/* Websites */}
          <div className="demo-section">
            <div className="title">
              This Website
            </div>
            <div className="description">
              <p>
                The code that I use for this website is on GitHub.
              </p>
            </div>
            <div className="demo-cards">
              <DemoCard
                title="donpistole.com"
                repoUrl="https://github.com/dpistole/donpistole_com"
              >
                <p>
                  You are here.
                </p>
              </DemoCard>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default DemosLayout;
