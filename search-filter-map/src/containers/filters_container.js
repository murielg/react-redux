import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFilter, removeFilter } from 'actions';
import SearchBar from "../components/search_bar";
import Filter from "../components/filter_link";
import DropdownFilter from "../components/filter_dropdown";


class FiltersContainer extends Component {

    componentDidMount() {
        //console.log(this.props);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.filters !== this.props.filters) {
            this.setState({ filters : nextProps.filters })
        }
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
        return this.props.filters.map((filter) => {
            return (
                <span>{filter}</span>
            )
        })
    }

    handleFilterClick(property){
        this.props.addFilter(property);
    }

    render() {

        const { filters } = this.props;

        return (
            <div className="col-sm-3">
                <SearchBar/>
                {this.renderCategories()}
            </div>
        );
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
        filters: state.filters
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addFilter: addFilter, removeFilter: removeFilter}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersContainer);
