/* eslint-disable react/prop-types,  react/destructuring-assignment */

function BookItem(props) {
  const {
    book,
  } = props;
  return (
    <div className="book">
      <div className="b-info">
        <span>{ book.genre }</span>
        <h2>{ book.title }</h2>
        <h3>{ book.author }</h3>
        <div className="actions-container">
          <button type="button" className="btn" id="comment">Comments</button>
          <button type="button" className="btn" id="comment">Remove</button>
          <button type="button" className="btn" id="comment">Edit</button>
        </div>
      </div>

      <div className="progress-percent">
        <h3>{ book.percentage }</h3>
        <span>Completed</span>
      </div>

      <div className="update-progress">
        <span>Current Chapter</span>
        <h2>{ book.chapter }</h2>
        <button type="button">Update progress</button>
      </div>

    </div>
  );
}

export default BookItem;
