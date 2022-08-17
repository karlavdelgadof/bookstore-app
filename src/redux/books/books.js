// Actions for books
const ADD_BOOK = 'bookstore-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-app/books/REMOVE_BOOK';

const initialState = [];

// Reducer
export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    default: return state;
  }
}

// Actions creators
export const addBook = (book) => ({ type: ADD_BOOK, book });

export const removeBook = (book) => ({ type: REMOVE_BOOK, book });
