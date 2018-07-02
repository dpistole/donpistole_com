import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

  render() {
    return (
      <div className="nav-bar">
        <div className="container">
          <div className="my-links">
            <Link to="/">
              <i className="fas fa-home" />
            </Link>
            <Link to="/projects">
              <i className="fas fa-briefcase" />
            </Link>
            <Link to="/resume">
              <i className="fas fa-id-card" />
            </Link>
          </div>
          <div className="hidden-mobile">
            Don Pistole
                </div>
          <div className="social-links hidden-mobile">
            <a href="https://github.com/dpistole/" title="My Github" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github-alt" />
            </a>
            <a href="https://meta.stackoverflow.com/users/2291892/donald-p" title="My Twitter" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-stack-overflow" />
            </a>
            <a href="https://www.linkedin.com/in/donald-pistole/" title="My LinkedIn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;
