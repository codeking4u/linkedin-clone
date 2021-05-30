import React from 'react';
import './App.css';
import Header from './Header';

import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';

function App() {
  return (
    <div className="app">
      { /* header */}
      <Header />

      {/* app body */}
      <div className="app__body">
        {/* sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
