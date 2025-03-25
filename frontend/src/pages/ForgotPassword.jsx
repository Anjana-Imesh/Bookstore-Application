import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5555/auth/forgot-password", {
      email,
    })
      .then((response) => {
        if (response.data.status) {
          alert("Check your email for reset password link");
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-72 p-5 border border-gray-300 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>

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

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
