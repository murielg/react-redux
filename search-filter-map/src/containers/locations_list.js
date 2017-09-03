import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectLocation} from 'actions';
import  { bindActionCreators } from 'redux';

class LocationsList extends Component {

    constructor(props) {
        super(props);
    }

    renderList() {
        return this.props.locations.map((location) => {
            return (
                <li
                    key={location.id}
                    className={ "list-group-item " + this.isActive(location.id) }
                    onClick={() => this.props.selectLocation(location)}
                >
                    {location.name}
                </li>
            )
        });
    }

    isActive(locationId){
        return (locationId === this.props.activeLocation.id) ? "active" : "";
    }

    render() {
        return (
            <ul className="list-group col-sm-6">
                {this.renderList()}
            </ul>
        );
    }

}

//whatever is returned from this, shows up as props
//inside LocationsList
function mapStateToProps(state) {
    return {
        locations: state.locations,
        activeLocation: state.activeLocation
    }
}

//anything returned from this function ends up as props
//inside the LocationsList container
//via this.props.actionName e.g. this.props.selectLocation
function mapDispatchToProps(dispatch) {
    //when selectLocation is called, result is passed to all reducers
    return bindActionCreators({ selectLocation: selectLocation } , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);