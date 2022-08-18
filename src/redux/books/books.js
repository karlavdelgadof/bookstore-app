// import axios from "axios";
import { createSlice } from '@reduxjs/toolkit';

// Actions for books
// const apiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xLpSkyNe48QmO2ebahy2/books';

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

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => { state.push(action.payload); },
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload.id),
    getBooks: (action) => action.payload,
  },
});

// Action creators are generated for each case reducer function
export const { addBook, removeBook, getBooks } = booksSlice.actions;

export default booksSlice.reducer;
