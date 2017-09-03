import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

import './scss/style.scss';

const persistedState = {
  activeLocation: [{
      "id" : "DFW"
  }]
};

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, persistedState)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
