
/*
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5555/register', {name, email, password})
        .then(res => {
            navigate('/login')
        }).catch(err => console.log(err))
    }

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
          </form>
          <p>Already Have an Account</p>
          <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Login
          </Link>
        
      </div>
    </div>
  );
}

export default Signup;
*/

import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5555/auth/signup', { name, email, password })
      .then(res => {
        navigate('/login');
      }).catch(err => console.log(err));
  }

  return (
    <div className="flex justify-center items-center bg-gray-600 h-screen">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Register
          </button>
        </form>
        <p className="mt-4 text-center">Already Have an Account?</p>
        <Link to="/login" className="block w-full mt-2 text-center py-2 border bg-gray-100 rounded hover:bg-gray-200">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
