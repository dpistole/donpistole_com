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
          _.map(skillSets, (skillset) => (
            <div className="skill-set">
              <div className="title">{ skillset.title } </div>
              {
                _.map(skillset.skills, (skill) => (
                  <ul className="skills">
                    <li className="skill">
                      { skill.skill }
                    </li>
                  { skill.skills && 
                    <li className="skill">
                      <ul className="skills">
                      {
                        _.map(skill.skills, (subSkill) => (
                          <li className="skill">{ subSkill.skill }</li>
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
