// import React from 'react';

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      {/* Left Side: Logo */}
      <div className="flex-shrink-0">
        <a href="/" className="text-2xl font-bold">Logo</a>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex space-x-8">
        {/* <a href="#home" className="">Home</a>
        <a href="#about" className="hover:text-gray-300">Login</a>
        <a href="#services" className="hover:text-gray-300">Register</a>
        <a href="#contact" className="hover:text-gray-300">Contact</a> */}
        <Link to="/" className="">Home</Link>
        <Link to="/login" className="hover:text-gray-300">Login</Link>
        <Link to="/register" className="hover:text-gray-300">Register</Link>
      </div>

      {/* Right Side: Button */}
      <div className="flex-shrink-0">
        <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
