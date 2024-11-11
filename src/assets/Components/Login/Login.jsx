// import React from 'react';

import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/Firebase";
import { useState } from "react";

function LoginForm() {
    //collect user info
    const [info, setInfo] = useState(null)
    //googleAuth Provider
    const GoogleProvider = new GoogleAuthProvider()
    //handleSubmit 
    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithPopup(auth, GoogleProvider)
        .then((res) => setInfo(res.user))
        .catch((err) => console.log(err))
    }
    //handleSignOut
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log("sign out done")
            setInfo(null)
        })
       
        .catch((err) => console.log(err))
    }
    console.log(info);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        
          <button onClick={handleSignOut} className="bg-blue-300 px-4 py-1 rounded-md">signOut</button>
        <form onSubmit={handleSubmit} className="space-y-4">
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

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
          </div>
        </form>
        
        <p className="text-center text-gray-600">
            Dont have an account? 
            {/* <a href="#register" >Sign up</a> */}
            <Link to="/register" className="text-blue-600 hover:underline">Sign Up</Link>
        </p>
        {info && <h3 className="text-red-600 font-bold text-lg">{info.displayName}</h3>}
      </div>
    </div>
  );
}

export default LoginForm;
