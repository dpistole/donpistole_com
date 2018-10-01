import React, { Component } from 'react';
import _ from 'lodash';
import experiences from '../../data/experiences.js'

export class Skills extends Component {

  render() {
    return (
      <div className="experience-container">
      {
        _.map(experiences, (experience) =>
        (
          <div className="professional-experience">
            <div className="title">
              <span>{ experience.title }</span>
            </div>
            <div className="company-info">
              <div className="company-name">
                <a href="{ experience.companyLink" target="_new">{ experience.companyName }</a>
              </div>
              <div className="role">
                { experience.role }
              </div>
            </div>
          </div>
          ))
      }
      </div>
    );
  }
}

export default Skills;
