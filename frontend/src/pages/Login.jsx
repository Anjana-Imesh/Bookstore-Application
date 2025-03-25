/*
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5555/auth/login', { email, password })
      .then(res => {
        console.log("login: " + res.data);
        if (res.data.Status === "Success") {
          if (res.data.role === "admin") {
            navigate('/AdminDashboard');
          } else {
            navigate('/books/CustomerInventory');
          }
        }
      }).catch(err => console.log(err));
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-72 p-5 border border-gray-300 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <label htmlFor="email" className="block mb-2 font-medium">
          Email:
        </label>
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md"
        />

        <label htmlFor="password" className="block mb-2 font-medium">
          Password:
        </label>
        <input
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md"
        />

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Login
        </button>
        <Link
          to="/forgotPassword"
          className="block text-center text-blue-500 mt-4"
        >
          Forgot Password?
        </Link>
        <p className="text-center mt-4">
          Don't Have an Account?{" "}
          <Link to="/signup" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
*/

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5555/auth/login', { email, password })
      .then(res => {
        console.log("login: " + res.data);
        if (res.data.Status === "Success") {
          if (res.data.role === "admin") {
            navigate('/AdminDashboard');
          } else {
            navigate('/books/CustomerInventory');
          }
        }
      }).catch(err => console.log(err));
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-72 p-5 border border-gray-300 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <label htmlFor="email" className="block mb-2 font-medium">
          Email:
        </label>
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md"
        />

        <label htmlFor="password" className="block mb-2 font-medium">
          Password:
        </label>
        <input
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md"
        />

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Login
        </button>
        
        <Link
          to="/forgotPassword"
          className="block text-center text-blue-500 mt-4"
        >
          Forgot Password?
        </Link>
        
        <p className="text-center mt-4">
          Don't Have an Account?{" "}
          <Link to="/signup" className="text-blue-500">
            Sign Up
          </Link>
        </p>

        {/* Home Button */}
        <Link
          to="/"
          className="block text-center text-blue-500 mt-4"
        >
          Go to Home
        </Link>
      </form>
    </div>
  );
};

export default Login;
