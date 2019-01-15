import React, { Component } from 'react';
import _ from 'lodash';

import {
  frontEndSkillSet,
  backEndSkillSet,
  systemsAdministrationSkillSet,
} from '../../data/skillSets';

export class Skills extends Component {

  render() {

    const skillSets = [
      frontEndSkillSet,
      backEndSkillSet,
      systemsAdministrationSkillSet,
    ];

    return (
      <div className="skills-container">
        {
          _.map(skillSets, (skillset, skillsetIndex) => (
            <div className="skill-set" key={skillsetIndex}>
              <div className="title">
                <span>{ skillset.title }</span>
              </div>
              {
                _.map(skillset.skills, (skill, skillIndex) => (
                  <ul className="skills" key={skillIndex}>
                    <li className="skill">
                      { skill.skill }
                    </li>
                  { skill.skills && 
                    <li className="skill">
                      <ul className="skills">
                      {
                        _.map(skill.skills, (subSkill, subSkillIndex) => (
                          <li className="skill" key={subSkillIndex}>{ subSkill.skill }</li>
                        ))
                      }
                      </ul>
                    </li>
                  }
                  </ul>
                  ))
              }
              
            </div>
            ))
        }
      </div>
    );
  }
}

export default Skills;
