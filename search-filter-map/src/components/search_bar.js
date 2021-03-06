import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.props.onChange(event.target.value);
  }

  onFormSubmit(event) {
    this.props.onFormSubmit(event);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          type="text"
          className="form-control"
          pattern={this.props.pattern}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.onInputChange}
        />
      </form>
    );

  }
}

export default SearchBar;