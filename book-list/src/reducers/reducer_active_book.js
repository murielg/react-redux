//state is not application state, just the state
//this reducer is responsible for, e.g. creating books
//if state is undefined, set to null
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;  
  }
  
  return state;
}
