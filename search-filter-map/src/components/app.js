import React, { Component } from 'react';
import LocationsList from "../containers/locations_list";
import SearchBar from "../containers/search_bar";
import LocationsMap from "../containers/locations_map";

export default class App extends Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="row">
                <SearchBar/>
                <LocationsList/>
                <LocationsMap/>
            </div>
        </div>
    );
  }
}
