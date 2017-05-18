import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather (cityData) {
    const name = cityData.city.name;
    const strokeWidth = 0.3;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    
    return (
      <tr key={name} >
        <td>{ name }</td>
        <td><Chart data={temps} type="temperature" colors={{strokeWidth:strokeWidth, stroke: "rgba(203, 75, 22,1)", fill: "rgba(203, 75, 22,0.5)" }} /></td>
        <td><Chart data={pressures} type="pressure" colors={{strokeWidth:strokeWidth, stroke: "rgba(38, 139, 210,1)", fill: "rgba(38, 139, 210,0.5)" }} /></td>
        <td><Chart data={humidities} type="humidity" colors={{strokeWidth:strokeWidth, stroke: "rgba(42, 161, 152,0.1)", fill: "rgba(42, 161, 152,0.5)" }} /></td>
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

