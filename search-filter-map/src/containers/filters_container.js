import React, {Component} from 'react';
import SearchBar from "../components/search_bar";

class FiltersContainer extends Component {
    render() {
        return (
            <div className="col-sm-3">
              <SearchBar/>
            </div>
        );
    }
}

const FilterCategories = [
    {
        'title' : 'Location',
        'properties' : ['Dallas', 'Austin', 'Houston']
    },
    {
        'title' : 'Geography',
        'properties' : ['elevation']
    }


];

export default FiltersContainer;
