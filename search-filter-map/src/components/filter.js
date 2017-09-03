import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
    render() {
        return (
            <a className="btn-link">
                {this.props.name}
            </a>
        );
    }
}

export default Filter;
