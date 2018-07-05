import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'class-autobind';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// actions
import {
  openSocialLinksModal,
  closeSocialLinksModal,
} from 'actions';


class NavBar extends Component {

  constructor(props) {
    super(props);
    autobind(this);
  }


  toggleSocialLinksModal() {
    const {
      isSocialLinksModalOpen,
      dispatch,
    } = this.props;

    if(isSocialLinksModalOpen){
      dispatch(closeSocialLinksModal());
    } else {
      dispatch(openSocialLinksModal());
    }
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="container">
          <div className="left-links">
            <Link title="Home" to="/">
              <i className="fas fa-home" />
            </Link>
            <Link title="My Work" to="/projects">
              <i className="fas fa-briefcase" />
            </Link>
            <Link title="My Resume" to="/resume">
              <i className="fas fa-id-card" />
            </Link>
          </div>
          <div className="hidden-mobile">
            Don Pistole
          </div>
          <div className="right-links">
            <button title="Other Social" onClick={this.toggleSocialLinksModal}>
              <i className="far fa-globe-americas"></i>  
            </button> 
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSocialLinksModalOpen: state.isSocialLinksModalOpen,
  };
}

NavBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(NavBar);
