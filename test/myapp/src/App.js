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
      <h1>My App</h1>
      <Menu items={menuItems} onSelect={handleSelect} />
      {/* Other components can go here */}
    </div>
  );
};

export default App;

