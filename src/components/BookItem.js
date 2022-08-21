import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

function CircularProgressWithLabel(props) {
  /* eslint-disable */
  return <CircularProgress variant="determinate" {...props} size={"80px"} />;
  /* eslint-enable */
}

export function CircularStatic() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setProgress(30 + Math.floor(Math.random() * 10));
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}

function BookItem(props) {
  const { book } = props;
  const dispatch = useDispatch();
  return (
    <div className="book" id={book.item_id}>
      <div className="b-info">
        <span className="b-category">{book.category}</span>
        <h2>{book.title}</h2>
        <h3 className="b-author">{book.author}</h3>
        <div className="actions-container">
          <button type="button" className="btn comment">
            Comments
          </button>
          <button
            type="button"
            className="btn remove-btn"
            id="comment"
            onClick={() => dispatch(removeBook(book))}
          >
            Remove
          </button>
          <button type="button" className="btn" id="comment">
            Edit
          </button>
        </div>
      </div>

      <div className="progress-percent">
        <CircularStatic />
        <div className="percent-graph">
          <span className="percentage">
            {Math.floor(Math.random() * 101)}
            %
          </span>
          <span>Completed</span>
        </div>
      </div>

      <div className="update-progress">
        <span>Current Chapter</span>
        <h2>
          Chapter
          {' '}
          {Math.floor(Math.random() * 101)}
        </h2>
        <button type="button">Update progress</button>
      </div>
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape(
    {
      title: PropTypes.string,
      author: PropTypes.string,
      category: PropTypes.string,
      item_id: PropTypes.string,
    },
  ).isRequired,
};

export default BookItem;
