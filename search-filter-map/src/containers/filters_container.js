import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addFilter, removeFilter} from '../actions';
import Link from "../components/link";
import GeoLocation from "./geolocation_container";


class FiltersContainer extends Component {

  constructor(props) {
    super(props);

    this.handleFilterClick = this.handleFilterClick.bind(this);

  }

  render() {
    return (
        <div>
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
    return FilterGroups.map((group) => {
      return (
        <div key={group.type}>
          <h4>{group.type}</h4>
          {this.renderFilter(group)}
        </div>
      );
    });
  }

  renderFilter(group) {
      return group.properties.map((property) => {
        return (
          <Link
            key={property}
            name={property}
            className="btn-link"
            onClick={() => this.handleFilterClick('add', property)}
          />
        );
      });
  }

  handleFilterClick(action, property) {
    switch (action) {
      case 'add' :
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
    'type': 'city',
    'properties': ['Dallas', 'Austin', 'Houston']
  },
  {
    'type': 'size',
    'properties': ['small', 'medium', 'large']
  },
  {
    'type': 'elevation',
    'properties' : ['low', 'high']
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
