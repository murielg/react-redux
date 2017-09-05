import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addFilter, removeFilter} from 'actions';
import SearchBar from "../components/search_bar";
import Filter from "../components/filter_link";
import DropdownFilter from "../components/filter_dropdown";


class FiltersContainer extends Component {

  constructor(props) {
    super(props);

    this.handleFilterClick = this.handleFilterClick.bind(this);

  }

  render() {
    return (
      <div className="col-sm-3">
        <SearchBar/>
        {this.renderCurrentFilters()}
        {this.renderFilterGroups()}
      </div>
    );
  }

  renderCurrentFilters() {
    if (this.props) {
      return this.props.filters.map((filter) => {
        return (
          <div
            key={filter}
            onClick={() => this.handleFilterClick('remove', filter)}>
            {filter}
          </div>
        )
      })
    }
  }

  renderFilterGroups() {
    return FilterGroups.map((category) => {
      return (
        <div key={category.title}>
          <h3>{category.title}</h3>
          {this.renderFilter(category)}
        </div>
      );
    });
  }

  renderFilter(filterGroup) {
    switch (filterGroup.type) {
      case 'link':
        return filterGroup.properties.map((property) => {
          return (
            <Filter
              key={property}
              name={property}
              onClick={() => this.handleFilterClick('add', filterGroup.title, property)}
            />
          );
        });
      case 'dropdown':
        return (
          <DropdownFilter options={filterGroup.options}/>
        );
      default:
        break;
    }

  }


  handleFilterClick(action, title, property) {
    let filter = {title, property};
    switch (action) {
      case 'add' :
        console.log(filter);
        this.props.addFilter(property);
        return;
      case 'remove' :
        this.props.removeFilter(property);
        return;
      default:
        return;
    }

  }


}

const FilterGroups = [
  {
    'title': 'city',
    'type': 'link',
    'properties': ['Dallas', 'Austin', 'Houston']
  },
  {
    'title': 'size',
    'type': 'link',
    'properties': ['small', 'medium', 'large']
  },
  {
    'title': 'elevation',
    'type': 'dropdown',
    'options': [
      {'value': '50', 'label': '<50'},
      {'value': '150', 'label': '<150'},
      {'value': '151', 'label': '>150'},
    ]
  }

];

function mapStateToProps(state) {
  return {
    filters: state.filters
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addFilter: addFilter, removeFilter: removeFilter}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersContainer);
