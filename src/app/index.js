import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import autobind from 'class-autobind';
// components
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import NavBar from 'components/NavBar/index.js';
import Home from 'layouts/Home';
import OutdoorsScene from 'layouts/OutdoorsScene';
import Projects from 'layouts/Projects';
import Resume from 'layouts/Resume';
import ComingSoon from 'layouts/ComingSoon';
import ContactMe from 'layouts/ContactMe';

class App extends Component {

  constructor(props) {
    super(props);
    autobind(this);
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Router>
          <div className="app-container">
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/fun" component={OutdoorsScene} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/coming-soon" component={ComingSoon} />
            <Route exact path="/contact-me" component={ContactMe} />
          </div>
        </Router>
      </div>
    );
  }

};

const mapStateToProps = (state) => {
  const props = {
  };
  return props;
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(App);
