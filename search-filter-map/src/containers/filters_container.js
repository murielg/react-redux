import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFilters } from 'actions';
import SearchBar from "../components/search_bar";
import Filter from "../components/filter";


class FiltersContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-sm-3">
                <SearchBar/>
                {this.renderCategories()}
            </div>
        );
    }

    renderCategories() {
        return FilterCategories.map((category) => {
            return (
                <div key={category.title}>
                    <h3>{category.title}</h3>
                    {this.renderFilters(category.properties)}
                </div>
            );
        });

    }

    renderFilters(properties){
        return properties.map((property) => {
            return (
                <Filter
                    key={property}
                    name={property}
                    onClick={() => this.handleFilterClick(property)}

                />
            )
        })
    }

    handleFilterClick(property){
        this.props.setFilters(property);
    }


}

const FilterCategories = [
    {
        'title' : 'Location',
        'properties' : ['Dallas', 'Austin', 'Houston']
    },
    {
        'title' : 'Features',
        'properties' : ['elevation', 'runway-length']
    }

];
//export default FiltersContainer;

function mapStateToProps(state) {
    return {
        filters: state.activeFilters
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setFilters: setFilters}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersContainer);
