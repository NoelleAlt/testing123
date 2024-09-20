// src/App.js
import React from 'react';
import Menu from './Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const menuItems = ['Home', 'About', 'Services', 'Contact'];

  const handleSelect = (item) => {
    console.log(`Selected: ${item}`);
    // Here you can add logic to navigate or change the app state
  };

  return (
    <div>
      <Menu items={menuItems} onSelect={handleSelect} />
      <div className="container">
        <h1>Welcome to My App</h1>
        {/* Other components can go here */}
      </div>
    </div>
  );
};

export default App;
