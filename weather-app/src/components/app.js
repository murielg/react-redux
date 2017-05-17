import React, { Component } from 'react';

import Button from './button';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <Button title="Tap Me" />
      </div>
    );
  }
}
