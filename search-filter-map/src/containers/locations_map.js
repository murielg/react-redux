import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { connect } from 'react-redux';
import { selectLocation} from 'actions';
import  { bindActionCreators } from 'redux';
import _ from 'lodash';

export class LocationsMap extends Component {

    renderMarkers() {
        return this.props.locations.map((location)=> {
            return (
                <Marker
                    key={location.id}
                    position={{lat: location.geometry[0], lng: location.geometry[1]}}

                />
            );
        });
    }

    render() {

        let MapTemplate = withGoogleMap(props => (
            <GoogleMap
                ref={props.onMapLoad}
                defaultZoom={6}
                defaultCenter={{ lat: 32.7767, lng: -96.7970 }}
            >
                markers={this.renderMarkers()}
            </GoogleMap>
        ));

        return (
            <div className="col-sm-3">
            <MapTemplate
                containerElement={
                    <div style={{ height: `100%`, minHeight: `400px` }} />
                }
                mapElement={
                    <div style={{ height: `100%` }} />
                }
                onMapLoad={_.noop}
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