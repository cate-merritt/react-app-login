import React from 'react'; // Improt React Library
import './App.css'; // Links to stylesheet file

//Functional component called Navigation
//Returns nav bar with unordered list with navigation links

const Navigation = () => {
    return (
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about">About</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Support</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Shop</a>
          </li>
          {}
        </ul>
      </nav>
    );
  }

export default Navigation; // Exports the Navigation component for use in other parts of the applicaiton