import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// components
import NavBar from 'components/NavBar/index.js';
import Home from './layouts/Home';
import Projects from 'layouts/Projects';
import Resume from 'layouts/Resume';

import rootReducer from './reducers/rootReducer';

import registerServiceWorker from './registerServiceWorker';

import './style/app.scss';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div style={{ height: '100%' }}>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
      </div>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
