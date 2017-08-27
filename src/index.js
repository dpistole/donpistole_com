import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import HomeLayout from './layout/HomeLayout';

import rootReducer from './reducers/rootReducer';

import registerServiceWorker from './registerServiceWorker';

import './style/app.scss';


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
    <Provider store={store}>
        <HomeLayout />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
