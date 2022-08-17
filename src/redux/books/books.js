// Actions for books 
const ADD_BOOK   = 'bookstore-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-app/books/REMOVE_BOOK'

const initialState = [];

// Reducer
export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK: 
      return [...state, action.payload];
    case REMOVE_BOOK: 
      return  state.filter(() => book.id !== action.book.id)
    default: return state;
  }
}

// Actions creators 
export const addBook = () => {
  return { type: ADD_BOOK, book}
}

export const removeBook = () => {
  return { type: REMOVE_BOOK, book}
}