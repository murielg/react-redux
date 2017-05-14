import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import configData from '../../../config.json'; // Get API KEYS from local config file
var config = configData || "";

import SearchBar from './components/search_bar';

const API_KEY = config.YT_API; 

const App = () => {
  return( 
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('.container'));
