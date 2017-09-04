import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFilters } from 'actions';
import SearchBar from "../components/search_bar";
import Filter from "../components/filter_link";
import DropdownFilter from "../components/filter_dropdown";


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
                    {this.renderFilters(category)}
                </div>
            );
        });

    }

    renderFilters(category){
            switch (category.type) {
                case 'link':
                    return category.properties.map((property) => {
                        return (
                            <Filter
                                key={property}
                                name={property}
                                onClick={() => this.handleFilterClick(property)}

                            />
                        );
                    });
                case 'dropdown':
                    return (
                        <DropdownFilter options={category.options}/>
                    );
                default:
                    break;
            }

    }

    handleFilterClick(property){
        this.props.setFilters(property);
    }


}

const FilterCategories = [
    {
        'title' : 'Location',
        'type' : 'link',
        'properties' : ['Dallas', 'Austin', 'Houston']
    },
    {
        'title' : 'Elevation',
        'type' : 'dropdown',
        'options' : [
            {'value' : '50', 'label' : '<50'},
            {'value' : '150', 'label' : '<150'},
            {'value' : '151', 'label' : '>150'},
        ]
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
