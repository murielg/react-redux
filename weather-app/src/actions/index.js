import axios from 'axios';//kinda like $.get, and also Fetch but with better error handling

import configData from '../../../../config.json'; // Get API KEYS from local config file

const configKeys = configData || "";

const API_KEY = configKeys.OPENWEATHERMAP.API_KEY;

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url);
  
  console.log('Request: ',request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
