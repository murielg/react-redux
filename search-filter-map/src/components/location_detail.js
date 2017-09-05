import React, {Component} from 'react';

class Location extends Component {

    render(){
        return (
            <li
                key={this.props.id}
                className={ "list-group-item " + (this.props.active ? "active" : "")}
                onClick={this.props.onClick}
            >
                {this.props.name}
            </li>
        )
    }
}

export default Location;

