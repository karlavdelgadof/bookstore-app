import React, { useState } from 'react';
import BookItem from './BookItem';
import Form from './Form';

const books = [
  {
    id: 1,
    title: 'The Hunger Games',
    genre: 'Action',
    percentage: 64,
    author: 'Suzanne Collins',
    chapter: 17,
  },
  {
    id: 2,
    title: 'Dune',
    genre: 'Sci-Fi',
    percentage: 35,
    author: 'Frank Herbert',
    chapter: 3,
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    genre: 'Economy',
    percentage: 18,
    author: 'Suzanne Collins',
    chapter: 8,
  },
];

function BooksContainer() {
  const [state] = useState(books);
  return (
    <>
      <div id="books-list">
        {state.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
      <Form />
    </>
  );
}

export default BooksContainer;
