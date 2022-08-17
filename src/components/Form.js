import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function Form() {
  const dispatch = useDispatch();
  const [bTitle, setTitle] = useState('');
  const [bAuthor, setAuthor] = useState('');

  return (
    <div id="add-book">
      <h1>ADD NEW BOOK</h1>
      <form id="form-book">
        <input id="title" value={bTitle} onInput={(e) => setTitle(e.target.value)} placeholder="Book title" type="text" />
        <input id="author" value={bAuthor} onInput={(e) => setAuthor(e.target.value)} placeholder="Author" type="text" />
        <button
          type="button"
          onClick={() => {
            dispatch(addBook({
              title: bTitle,
              author: bAuthor,
              id: uuidv4(),
            }));
            setAuthor('');
            setTitle('');
          }}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default Form;
