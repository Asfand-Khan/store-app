import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navBar">
      <h1>
        <Link to="/" className='logo'>
          Shoe<span>store</span>
        </Link>
      </h1>
      <div className="navBar__innerContainer">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/productList">Products</Link>
      </div>
    </div>
  );
};
