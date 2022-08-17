import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  books: booksReducer,
  categories: categoriesReducer,
});

export default store;
