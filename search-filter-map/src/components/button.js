import React, { Component } from 'react';

class Button extends Component {  
  render () {
    return (
      <button className={this.props.className} onClick={this.props.onClick}>{this.props.title}</button>
    );
  }
};

export default Button;
