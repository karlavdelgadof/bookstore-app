function BookItem(props) {
  const {
    title, genre, percentage, author, chapter,
  } = props.book;
  return (
    <div className="book">
      <div className="b-info">
        <span>{ genre }</span>
        <h2>{ title }</h2>
        <h3>{ author }</h3>
        <div className="actions-container">
          <button type="button" className="btn" id="comment">Comments</button>
          <button type="button" className="btn" id="comment">Remove</button>
          <button type="button" className="btn" id="comment">Edit</button>
        </div>
      </div>

      <div className="progress-percent">
        <h3>{ percentage }</h3>
        <span>Completed</span>
      </div>

      <div className="update-progress">
        <span>Current Chapter</span>
        <h2>{ chapter }</h2>
        <button type="button">Update progress</button>
      </div>

    </div>
  );
}

export default BookItem;
