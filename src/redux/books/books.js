import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Actions for books
const apiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/q4jqYH5waNwpAMlI8Ds9/books';

const initialState = [];

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post(apiURL, book);
  if (response.status === 201) {
    return book;
  }
  return response.data;
});

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get(apiURL);
  return response.data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (book) => {
  await axios.delete(`${apiURL}/${book.item_id}`);
  return book;
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // removeBook: (state, action) => state.filter((book) => book.id !== action.payload.id),
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(addBook.fulfilled, (state, action) => {
        // Add user
        state.push(action.payload);
      })
      .addCase(getBooks.fulfilled, (state, action) => Object.entries(action.payload).map(
        ([id, [book]]) => ({ ...book, item_id: id }),
      ))
      .addCase(removeBook.fulfilled, (state, action) => {
        state.forEach((book) => {
          if (book.item_id === action.payload.item_id) {
            state.splice(state.indexOf(book), 1);
          }
        });
      });
  },
});

// Action creators are generated for each case reducer function

export default booksSlice.reducer;
