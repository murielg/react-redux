import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log("onFormSubmit" + this.state.term);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          type="text"
          pattern="[0-9]*"
          placeholder="ZIP Code"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </form>
    );

  }
}

export default SearchBar;