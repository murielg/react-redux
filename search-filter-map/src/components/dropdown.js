import React, {Component} from 'react';

class Dropdown extends Component {
    render() {
        return (
            <select onClick={this.props.onClick}>
                {this.props.options.map((option)=> {
                    return (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    );
                })}
            </select>
        );
    }

}

export default Dropdown;
