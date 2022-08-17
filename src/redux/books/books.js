// Actions for books
const ADD_BOOK = 'bookstore-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-app/books/REMOVE_BOOK';

const initialState = [{
  id: 1,
  title: 'Book 1',
  genre: 'Action',
  percentage: 64,
  author: 'Suzanne Collins',
  chapter: 17,
},
{
  id: 2,
  title: 'Book 2',
  genre: 'Sci-Fi',
  percentage: 35,
  author: 'Frank Herbert',
  chapter: 3,
},
{
  id: 3,
  title: 'Book 3',
  genre: 'Economy',
  percentage: 18,
  author: 'Suzanne Collins',
  chapter: 8,
}];

// Reducer
export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    default: return state;
  }
}

// Actions creators
export const addBook = (book) => ({ type: ADD_BOOK, book });

export const removeBook = (book) => ({ type: REMOVE_BOOK, book });
