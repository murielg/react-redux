import React, { Component } from 'react';
import LocationsList from "../containers/locations_container";
import LocationsMap from "../containers/locations_map";
import FiltersContainer from "../containers/filters_container";
import GeolocationContainer from "../containers/geolocation_container";

export default class App extends Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="row">
              <div className="col-sm-3">
                <GeolocationContainer/>
                <FiltersContainer/>
              </div>
                <LocationsList/>
                <LocationsMap/>

            </div>
        </div>
    );
  }
}
