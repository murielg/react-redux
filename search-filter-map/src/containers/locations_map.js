import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { connect } from 'react-redux';
import { selectLocation} from 'actions';
import  { bindActionCreators } from 'redux';

const MapTemplate = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={6}
        defaultCenter={{ lat: 32.7767, lng: -96.7970 }}
    >
        {
            props.markers.map(marker => (
                <Marker
                    key={marker.id}
                    position={marker.position}
                    onClick={() => props.onMarkerClick(marker) }
                />
            ))
        }

    </GoogleMap>
));

export class LocationsMap extends Component {

    constructor(props) {
        super(props);

        this.handleMarkerClick = this.handleMarkerClick.bind(this);
    }

    handleMapLoad(map){

    }

    handleMapClick(event) {
        console.log(event);
    }

    handleMarkerClick(marker) {
        this.props.selectLocation(marker);
    }


    render() {
        return (
            <div className="col-sm-3">
                <MapTemplate
                    containerElement={
                        <div style={{ height: `100%`, minHeight: `400px` }} />
                    }
                    mapElement={
                        <div style={{ height: `100%` }} />
                    }
                    onMapLoad={this.handleMapLoad}

                    markers={this.props.locations}

                    onMarkerClick={this.handleMarkerClick}

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