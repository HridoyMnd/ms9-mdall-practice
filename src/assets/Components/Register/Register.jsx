// import React from 'react';

import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
        
        <form className="space-y-4">
          {/* Username Input */}
          <div>
            <label className="block mb-1 text-gray-600" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block mb-1 text-gray-600" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block mb-1 text-gray-600" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label className="block mb-1 text-gray-600" htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Register
            </button>
          </div>
        </form>
        
        <p className="text-center text-gray-600">
          Already have an account?
           {/* <a href="#login" className="text-blue-600 hover:underline">Login</a> */}
           <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;
