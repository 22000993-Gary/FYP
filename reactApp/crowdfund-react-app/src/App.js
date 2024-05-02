import React from 'react';
import './App.css';
import Sidebar from './Sidebar.jsx';

function App() {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

    </div>
  )
}

export default App
