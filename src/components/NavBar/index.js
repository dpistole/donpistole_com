import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'class-autobind';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class NavBar extends Component {

  constructor(props) {
    super(props);
    autobind(this);
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="container">
          <div className="left-links">
            <Link title="Home" to="/">
              <i className="fas fa-home" />
            </Link>
            <Link title="Some Fun" to="/fun">
              <i className="fas fa-image" />
            </Link>
            <Link title="My Resume" to="/resume">
              <i className="fas fa-id-card" />
            </Link>
          </div>
          <div className="brand-name hidden-mobile">
            Don Pistole
          </div>
          {/* <div className="right-links">
          </div> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {};
}

NavBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(NavBar);
