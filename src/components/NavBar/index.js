import React, { Component } from 'react';

class NavBar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="nav-bar">
            <div className="container">
                <div className="my-links">
                    {/* <a href="./resume.pdf" title="My Projects" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-briefcase" />
                    </a> */}
                    <a href="./resume.pdf" title="My Resume" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-file-alt" />
                    </a>
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
                    {/* <a href="https://github.com/dpistole/" title="My StackOverflow" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter" />
                    </a> */}
                </div>
            </div>
        </div>
        )
    }
}

export default NavBar;
