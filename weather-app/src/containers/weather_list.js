import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather (cityData) {
    const name = cityData.city.name;
    const strokeWidth = 0.25;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => _.round(_.subtract(_.multiply(temp,9/5), 459.67)));
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;
    

    return (
      <tr key={name} >
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} type="temperature" colors={{strokeWidth:strokeWidth, stroke: "rgba(203, 75, 22,1)", fill: "rgba(203, 75, 22,0.5)" }} /></td>
        <td><Chart data={pressures} type="pressure" colors={{strokeWidth:strokeWidth, stroke: "rgba(38, 139, 210,1)", fill: "rgba(38, 139, 210,0.5)" }} /></td>
        <td><Chart data={humidities} type="humidity" colors={{strokeWidth:strokeWidth, stroke: "rgba(42, 161, 152,1)", fill: "rgba(42, 161, 152,0.5)" }} /></td>
      </tr>
    );
  }
  
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F) </th>
            <th>Pressure (inHg) </th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps ({ weather }) {
  return { weather } // <= the same as => {weather : weather }
}

export default connect (mapStateToProps)(WeatherList);

