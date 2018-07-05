import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import autobind from 'class-autobind';
// actions
import {
  closeSocialLinksModal,
} from 'actions';
// components
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import NavBar from 'components/NavBar/index.js';
import Home from 'layouts/Home';
import Projects from 'layouts/Projects';
import Resume from 'layouts/Resume';
import SocialLinksModal from 'components/SocialLinksModal';

class App extends Component {

  constructor(props) {
    super(props);
    autobind(this);
  }

  closeSocialLinksModal() {
    const {
      dispatch,
    } = this.props;

    dispatch(closeSocialLinksModal());
  }

  render() {
    const {
      isSocialLinksModalOpen,
    } = this.props;

    return (
      <div style={{ height: '100%' }}>
        <Router>
          <div className="app-container">
            <NavBar />
            {
              isSocialLinksModalOpen &&
              <SocialLinksModal isOpen={isSocialLinksModalOpen} onBackdropClick={this.closeSocialLinksModal} />
            }
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
          </div>
        </Router>
      </div>
    );
  }

};

const mapStateToProps = (state) => {
  const props = {
    isSocialLinksModalOpen: state.isSocialLinksModalOpen,
  };
  return props;
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(App);
