import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Link extends Component {
    render() {
        return (
            <a className={this.props.className} onClick={this.props.onClick}>
                {this.props.name}
            </a>
        );
    }
}

export default Link;
