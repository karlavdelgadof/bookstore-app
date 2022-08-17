import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import Form from './Form';

export default function BooksContainer() {
  const books = useSelector((state) => state.books);
  return (
    <>
      <div id="books-list">
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
      <Form />
    </>
  );
}
