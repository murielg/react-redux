import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectLocation} from 'actions';
import  { bindActionCreators } from 'redux';
import Location from "../components/location";

class LocationsList extends Component {

    render() {
        return (
            <ul className="list-group col-sm-6">
                {this.props.locations.map(location => (
                    <Location
                        key={location.id}
                        onClick = {() => this.props.selectLocation(location)}
                        active = {location.id === this.props.activeLocation.id}
                        {...location} />
                ))}
            </ul>
        );
    }

    componentDidUpdate(){
        //console.log("componentDidUpdate");
    }

}

//whatever is returned from this, shows up as props
//inside LocationsList
function mapStateToProps(state) {
    return {
        locations: state.locations,
        activeLocation: state.activeLocation,
        filters : state.filters
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