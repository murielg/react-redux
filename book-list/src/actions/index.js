/*
 * Google Search API
 *
 var books = require('google-books-search');

books.search('React', function(error, results) {
  if ( ! error ) {
    console.log(results);
  } else {
    console.log(error);
  }
});

*/
export function selectBook(book) {
  //selectBook is an actionCreator, needs to return an action, 
  //which is an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }; 
}
