import React, { Component } from 'react';
import LocationsList from "../containers/locations_list";
import SearchBar from "../containers/search_bar";

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <SearchBar/>
        <LocationsList/>
      </div>
    );
  }
}
