// Actions for books 
const CHECK_STATUS  = 'bookstore-app/categories/CHECK_STATUS';


const initialState = [];

// Reducer
export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS: 
      return "Under Construction"
    default: return state;
  }
}

// Actions creators 
export const checkStatus = () => {
  return { type: CHECK_STATUS, category}
}
