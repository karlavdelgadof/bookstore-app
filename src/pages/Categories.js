import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      id="check-status"
      onClick={() => dispatch(checkStatus())}
    >
      Check status
    </button>
  );
}

export default Categories;
