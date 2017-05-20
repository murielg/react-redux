import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';


import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends Component {
  render() { return <div>Hello</div>}
}
class Goodbye extends Component {
  render() { return <div>Goodbye</div>}
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/goodbye" component={Goodbye} />
        <Route path="/hello" component={Hello} />
      </div>
    </BrowserRouter> 
  </Provider>
  , document.querySelector('.container'));

