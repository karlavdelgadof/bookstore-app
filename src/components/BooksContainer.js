import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import BookItem from './BookItem';
import Form from './Form';

export default function BooksContainer() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <>
      <ul id="books-list">
        {books.map((book) => (
          <li key={book.item_id}>
            <BookItem book={book} />
          </li>
        ))}
      </ul>
      <Form />
    </>
  );
}
