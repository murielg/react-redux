import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={12}
        defaultCenter={{ lat: 32.7767, lng: -96.7970 }}
    />
));


export default class LocationsMap extends Component {
    render() {
        return (
            <div className="col-sm-3">
            <SimpleMapExampleGoogleMap
                containerElement={
                    <div style={{ height: `100%` }} />
                }
                mapElement={
                    <div style={{ height: `100%` }} />
                }
            />
            </div>
        );
    }
}
