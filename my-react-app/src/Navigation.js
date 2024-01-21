// Navigation.js
import React from 'react';
import './App.css'; //links to css styling


//functional component called Navigation
//returns nav bar with unordered list with navigation links

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

  //exports the Navigation component for use in other parts of the applicaiton
  export default Navigation;