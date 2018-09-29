import React, { Component } from 'react';

export class Skills extends Component {

  render() {
    return (
      <div className="experience-container">
        {/* KUBRA */}
        <div className="professional-experience">
          <div className="title">Front End Developer</div>
          <div className="company-info">
            <div className="company-name">
              <a href="https://kubra.com" target="_new">KUBRA</a>
            </div>
            <div className="role">
              <p>
                At KUBRA I build and maintain front end applications used primarily by utility companies to communiate service outages to their customer base.
              </p>
            </div>
          </div>
        </div>
        {/* Dynamic Vision */}
        <div className="professional-experience">
          <div className="title">Software Developer</div>
          <div className="company-info">
            <div className="company-name">
              <a href="https://www.linkedin.com/company/dynamic-vision-design-studio-llc" target="_new">Dynamic Vision</a>
            </div>
            <div className="role">
              At Dynamic Vision we build web applications to support care management for client in the health care industry.
            </div>
          </div>
        </div>
        {/* Dynamic Vision */}
        <div className="professional-experience">
          <div className="title">IT Director / PHP Developer</div>
          <div className="company-info">
            <div className="company-name">
              <a href="https://www.nationalmerchants.com/" target="_new">National Merchants Association</a>
            </div>
            <div className="role">
              At National Merchants we provided merchant processing solutions and risk management tools.
            </div>
          </div>
        </div>
        {/* Affant Communication */}
        <div className="professional-experience">
          <div className="title">Senior Network Engineer</div>
          <div className="company-info">
            <div className="company-name">
              <a href="https://affant.com/" target="_new">Affant</a>
            </div>
            <div className="role">
              At Affant we designed and implemented communications and network security solutions.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
