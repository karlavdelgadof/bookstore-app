import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import BooksContainer from './components/BooksContainer';
import Categories from './pages/Categories';

import store from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={(
            <Provider store={store}>
              <App />
            </Provider>
        )}
        >
          <Route path="/" element={<BooksContainer />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
