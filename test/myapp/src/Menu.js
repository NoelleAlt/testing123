// src/Menu.js
import React from 'react';
import './Menu.css'; 

export default function Menu({ items, onSelect }) {
  return (
    <nav className="menu">
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => onSelect(item)}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};