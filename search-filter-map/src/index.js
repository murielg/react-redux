import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';

import './scss/style.scss';

const persistedState = {
  activeLocation: [{
      "id" : "DFW"
  }]
};

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={
      createStoreWithMiddleware(
          reducers,
          persistedState,
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  }>
    <App />
  </Provider>
  , document.querySelector('.container'));
