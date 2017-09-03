import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { connect } from 'react-redux';
import { selectLocation} from 'actions';
import  { bindActionCreators } from 'redux';


const SimpleMapExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={12}
        defaultCenter={{ lat: 32.7767, lng: -96.7970 }}
    />
));


export class LocationsMap extends Component {
    render() {
        return (
            <div className="col-sm-3">
            <SimpleMapExampleGoogleMap
                containerElement={
                    <div style={{ height: `100%`, minHeight: `400px` }} />
                }
                mapElement={
                    <div style={{ height: `100%` }} />
                }
            />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        locations: state.locations,
        activeLocation: state.activeLocation
    }
}

function mapDispatchToProps(dispatch) {
    //when selectLocation is called, result is passed to all reducers
    return bindActionCreators({ selectLocation: selectLocation } , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationsMap);