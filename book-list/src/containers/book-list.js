import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
       return (
         <li 
           key={book.title} 
           onClick={() => this.props.selectBook(book) }
           className="list-group-item">
           {book.title}
        </li>
       );
    });
  }
  
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStatetoProps(state) {
  return {
    books: state.books
  }
}

// return from mapDispatchToProps, will end up as props to BookList container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Promote  BookList from component to container, needs to know about dispatch method. 
// Make it available as a prop.
export default connect (mapStatetoProps, mapDispatchToProps)(BookList);
