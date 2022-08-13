import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <div id="main-sec">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
