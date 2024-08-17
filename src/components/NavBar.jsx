import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Ensure this file exists and is correctly referenced

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cow-inventory">Cow Inventory</Link></li>
        <li><Link to="/add-cow">Add Cow</Link></li>
        <li><Link to="/financial-analysis">Financial Analysis</Link></li>
        <li><Link to="/test">Test Page</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

