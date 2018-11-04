import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import autobind from 'class-autobind';
// components
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import NavBar from 'components/NavBar/index.js';
import Home from 'layouts/Home';
import OutdoorsScene from 'layouts/OutdoorsScene';
import Demos from 'layouts/Demos';
import Resume from 'layouts/Resume';
import ComingSoon from 'layouts/ComingSoon';
import ContactMe from 'layouts/ContactMe';
import AboutMe from 'layouts/AboutMe';

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
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/demos" component={Demos} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/coming-soon" component={ComingSoon} />
              <Route exact path="/contact-me" component={ContactMe} />
              <Route exact path="/about-me" component={AboutMe} />
              <Route path="/*" component={OutdoorsScene} />
            </Switch>
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
