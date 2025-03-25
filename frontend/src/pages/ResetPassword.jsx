import React, { useState } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5555/auth/reset-password/" + token, {
      password,
    })
      .then((response) => {
        if (response.data.status) {
          navigate("/login");
        }
        console.log(response.data);
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
        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>

        <label htmlFor="password" className="block mb-2 font-medium">
          New Password:
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
          Reset
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
