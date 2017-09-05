import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFilter, removeFilter } from 'actions';
import SearchBar from "../components/search_bar";
import Filter from "../components/filter_link";
import DropdownFilter from "../components/filter_dropdown";


class FiltersContainer extends Component {

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillMount() {

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

    renderFilters(category) {
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

    renderActiveFilters(){
        if (this.props) {
            return this.props.filters.map((filter) => {
                return (
                    <div
                        key={filter}
                        onClick={() => this.props.removeFilter(filter)}
                    >
                        {filter}
                    </div>
                )
            })
        }
    }

    handleFilterClick(property){
        this.props.addFilter(property);
    }

    render() {

        return (
            <div className="col-sm-3">
                <SearchBar/>
                {this.renderActiveFilters()}
                {this.renderCategories()}
            </div>
        );
    }

}

const FilterCategories = [
    {
        'title' : 'city',
        'type' : 'link',
        'properties' : ['Dallas', 'Austin', 'Houston']
    },
    {
        'title' : 'elevation',
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
        filters: state.filters
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addFilter: addFilter, removeFilter: removeFilter}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersContainer);
