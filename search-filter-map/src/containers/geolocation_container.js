import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getGeolocation} from "../actions";
import {GET_GEOLOCATION} from "../actions/types";
import SearchBar from "../components/search_bar";
import Button from "../components/button";
import Dropdown from "../components/dropdown";


class GeolocationContainer extends Component {

  constructor(props) {
    super(props);
    this.getGeolocation = this.getGeolocation.bind(this);

    this.state = {
      zipcode: ''
    }
  }

  componentWillMount() {
    this.props.getGeolocation();
  }

  getGeolocation() {
    const geolocation = navigator.geolocation;

    const location = new Promise((resolve, reject) => {
      if (!geolocation) {
        reject(new Error('Not Supported'));
      }

      geolocation.getCurrentPosition((position) => {
        resolve(position);
        this.reverseGeocoding(position);

      }, () => {
        reject(new Error('Permission denied'));
      });
    });

    return {
      type: GET_GEOLOCATION,
      payload: location

    }
  }

  reverseGeocoding(position) {
    const geocoder = new google.maps.Geocoder;
    let latlng = {lat: position.coords.latitude, lng: position.coords.longitude};
    const self = this;
    var zipcode = '';

    geocoder.geocode({'location': latlng}, function (results, status) {
      if (status === 'OK') {
        if (results[0]) {
          zipcode = results[0].address_components[6].short_name;
          self.setState({zipcode: zipcode});
        } else {
          console.log("no results")
        }
      } else {
        console.log('Geocoder failed due to: ' + status);
      }
    });
  }

  onInputChange(value) {
    this.setState({zipcode: value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    if (this.state.zipcode !== '') {

      this.props.locations.map(location => {

        let destination = new google.maps.LatLng(location.lat, location.lng);

        this.getDistances(this.state.zipcode, location.position);
      });

    }
  }

  getDistances(origin, destination) {
    const self = this;
    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL,
        avoidHighways: false,
        avoidTolls: false
      }, callback);


    function callback(response, status) {
      if (status != google.maps.DistanceMatrixStatus.OK) {
        console.log(err);
      } else {
        const origin = response.originAddresses[0];
        const destination = response.destinationAddresses[0];
        if (response.rows[0].elements[0].status === "ZERO_RESULTS") {
          console.log("no distance");
        } else {
          let distance = response.rows[0].elements[0].distance;
          let distance_value = distance.value;
          let distance_text = distance.text;
          let miles = distance_text.substring(0, distance_text.length - 3);
          //console.log("It is " + miles + " miles from " + origin + " to " + destination);
          console.log(miles);
        }
      }
    }
  }

  render() {
    return (
      <div>
        <Button onClick={this.getGeolocation} title="Detect My Location"/>
        <SearchBar
          pattern="(\d{5}([\-]\d{4})?)"
          placeholder="ZIP Code"
          onChange={this.onInputChange.bind(this)}
          onFormSubmit={this.onFormSubmit.bind(this)}
          value={this.state.zipcode}
        />
        <Dropdown options={Distances}/>
      </div>
    );
  }

}

const Distances = [
  {'value': '5', 'label': '5 miles'},
  {'value': '15', 'label': '15 miles'},
  {'value': '30', 'label': '30 miles'},
  {'value': '40', 'label': '40 miles'},
  {'value': '50', 'label': '50+ miles'},
];

function mapStateToProps(state) {
  return {
    geolocation: state.location,
    locations: state.locations
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getGeolocation: getGeolocation}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GeolocationContainer);