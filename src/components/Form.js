import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function Form() {
  const dispatch = useDispatch();
  const [bTitle, setTitle] = useState('');
  const [bAuthor, setAuthor] = useState('');
  const [bCategory, setCategory] = useState('');

  return (
    <div id="add-book">
      <h1>ADD NEW BOOK</h1>
      <form id="form-book">
        <input id="title" value={bTitle} onInput={(e) => setTitle(e.target.value)} placeholder="Book title" type="text" />
        <input id="author" value={bAuthor} onInput={(e) => setAuthor(e.target.value)} placeholder="Author" type="text" />
        <select
          id="form-control"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          required
        >
          <option value="">Category</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Mystery">Mystery</option>
          <option value="Thriller">Thriller</option>
          <option value="Horror">Horror</option>
          <option value="Historical">Historical</option>
          <option value="Romance">Romance</option>
          <option value="Western">Western</option>
          <option value="Science">Science</option>
          <option value="Economy">Economy</option>
          <option value="Psychology">Psychology</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Self-help">Self-help</option>
          <option value="Magical Realism">Magical Realism</option>

        </select>
        <button
          type="button"
          onClick={() => {
            dispatch(addBook({
              item_id: uuidv4(),
              title: bTitle,
              author: bAuthor,
              category: bCategory,
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
