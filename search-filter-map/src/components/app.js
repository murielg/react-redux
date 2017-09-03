import React, { Component } from 'react';
import LocationsList from "../containers/locations_list";
import SearchBar from "./search_bar";
import LocationsMap from "../containers/locations_map";
import FiltersContainer from "../containers/filters_container";

export default class App extends Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="row">
                <FiltersContainer/>
                <LocationsList/>
                <LocationsMap/>
            </div>
        </div>
    );
  }
}
