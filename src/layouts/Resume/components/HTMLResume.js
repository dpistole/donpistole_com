import React from 'react';


const workHistory = [
  {
    company: "KUBRA",
    title: "Front End Developer",
    start: "January 2017",
    end: "Present",
    description: `At KUBRA my responsibilities include the maintenance of older AngularJS codebases, as well as being the lead developer on the React rewrite of the UI for the latest release of our outage mapping solution.`,
  },
  {
    company: "Dynamic Vision",
    title: "Web Developer",
    start: "June 2016",
    end: "January 2017",
    description: `At Dynamic Vision we used the Laravel PHP Framework, along with AngularJS, to build CMS systems for the Healthcare industry.`,
  },
  {
    company: "KUBRA",
    title: "Front End Developer",
    start: "January 2017",
    end: "Present",
    description: `At KUBRA my responsibilities include the maintenance of older AngularJS codebases, as well as being the lead developer on the React rewrite of the UI for the latest release of our outage mapping solution.`,
  },
  {
    company: "National Merchants Association",
    title: "Director of IT",
    start: "January 2014",
    end: "June 2016",
    description: `I started at NMA as a PHP developer, and as the company grew from 5 to 150 employees so did my responsibilities. Everything from web development, to network and systems administration. I oversaw the hiring and management of a team of developers and IT professionals that ultimately allowed me to leave and pursue my web development passion.`,
  },
];

const HTMLResume = () => (
  <div className="html-resume">
    <div className="left-column">
      <div className="name">
        Don <br /> Pistole
      </div>
      <div className="title">
        <div className="title-primary">Web Developer</div>
        <div className="title-secondary">And Technology Enthusiast</div>
      </div>
      <div className="skills">
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>AngularJS</li>
          <li>Node/npm</li>
          <li>Build Tools and Dependencies</li>
        </ul>
        <ul>
          <li>PHP</li>
          <li>Symfony</li>
          <li>Laravel</li>
        </ul>
        <ul>
          <li>Related Skills</li>
          <li>HTML/CSS</li>
          <li>Git</li>
        </ul>
        <ul>
          <li>Bonus Skills</li>
          <li>Server Administration</li>
          <li>Network Engineering</li>
          <li>MySQL</li>
        </ul>
      </div>
      <div className="download-resume">
        <a href="./resume.pdf" title="My Resume" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-file-alt" /> Download Resume (PDF)
          </a>
      </div>
    </div>
    <div className="right-column">
      <div className="about-me-mini">
        <div className="full-name">
          Donald Michael Pistole
        </div>
        <div className="location">
          Tempe, AZ
        </div>
        <div className="website-link">
          <a href="https://donpistole.com">donpistole.com</a>
        </div>
        <div className="available-upon-request">
          Contact Information Available Upon Request
        </div>
        <hr />
      </div>
      <div className="about-me">
        <p>
          IT professional with over 10 years of experience, currently focused on web development. I really enjoy the creative outlet that software development provides, as well as the challenges and learning opportunities that come with an ever
          evolving technical landscape.
        </p>
        <p>
          My varied career history, including positions as senior
          network engineer and server administrator, have given me a
          comprehensive understanding of the supporting
          technologies that make the web work.
        </p>
        <hr />
      </div>
      <div className="work-history">
        {
          workHistory.map((job, index) => {
            return (
              <div className="job" key={index}>
                <div className="employer">
                  <span className="company-name">
                    {job.company}
                  </span>
                  /
                  <span className="title">
                    {job.title}
                  </span>
                </div>
                <div className="duration">
                  <span>
                    {job.start} - {job.end}
                  </span>
                </div>
                <div className="description">
                  <p>{job.description}</p>
                </div>
              </div>
            );
          }
          )
        }
        <hr />
      </div>
    </div>
  </div>
);

export default HTMLResume;
