import React from 'react';
import '../assets/css/service.css'; // Import the CSS file for styling

const AddService = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <a href="#">Brand Logo</a>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AddService;
