// Navbar.js

import React from 'react';
import '../styles/Navbar.css'; // You can create this CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>
      <ul className="navbar-items">
        <li>
          <a href="/" className="navbar-a">Contact</a>
        </li>
        <li>
          <a href="/title2" className="navbar-a">Profile</a>
        </li>
        <li>
          <a href="/title3" className="navbar-a">Logout</a>
        </li>
        {/* Add more titles as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
