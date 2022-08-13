import React from 'react';

function Form() {
  return (
    <div id="add-book">
      <h1>ADD NEW BOOK</h1>
      <form id="form-book">
        <input id="title" placeholder="Book title" type="text" />
        <input id="author" placeholder="Author" type="text" />
        <button type="button">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
