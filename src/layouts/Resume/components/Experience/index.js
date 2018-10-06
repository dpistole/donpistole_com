import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export class Experiences extends Component {

  render() {
    const {
      experiences,
      selectedExperience,
      onSelectExperience,
    } = this.props;

    return (
      <div className="experience-container">
      {
        _.map(experiences, (experience) => {
          if(selectedExperience === null || selectedExperience.id === experience.id){
            return (
              <div className="professional-experience" key={experience.id}>
                <div className="title">
                  <span>{ experience.title }</span>
                </div>
                <div className="company-info">
                  <div className="company-name">
                    <a href={ experience.companyLink } target="_new">{ experience.companyName }</a>
                  </div>
                  <div className="role">
                    { experience.role }
                  </div>
                </div>
                <div className="tell-me-more">
                  {
                    selectedExperience === null ?
                      <button onClick={() => { onSelectExperience(experience) }}>Tell Me More</button> :
                      <button onClick={() => { onSelectExperience(null) }}>Tell Me Less</button>
                  }
                  
                  
                </div>
              </div>
              );
          }
        })
      }
      </div>
    );
  }
}

Experiences.propTypes = {
  experiences: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onSelectExperience: PropTypes.func.isRequired,
  selectedExperience: PropTypes.shape({}),
}

Experiences.defaultProps = {
  selectedExperience: null,
}

export default Experiences;
