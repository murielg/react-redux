import React, { Component } from 'react';
import SearchBar from "./search_bar";
import Button from "./button";
import Dropdown from "./dropdown";

class GeoLocation extends Component {

  constructor(props) {
     super(props);

     this.state = {
       zipcode : '',
       miles : '50'
     }
   }

  render() {
    return (
      <div>
        <Button onClick={this.getLocation} title="Detect My Location"  />
        <SearchBar/>
        <Dropdown options={Distances}/>
      </div>
    );
  }

  getLocation() {
    console.log("getLocation");
  }


}

const Distances = [
  {'value': '5', 'label': '5'},
  {'value': '15', 'label': '10'},
  {'value': '151', 'label': '50+'},
];


export default GeoLocation;