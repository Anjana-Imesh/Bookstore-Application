/*
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const goToBookProcessing = () => {
    navigate('/books/AdminInventory');
  };

  const goToOrderProcessing = () => {
    navigate('/orders/AdminViewOrders');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="space-y-4">
        <button
          onClick={goToBookProcessing}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
        >
          Book Processing
        </button>
        <button
          onClick={goToOrderProcessing}
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition duration-200"
        >
          Order Processing
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
*/

import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const goToBookProcessing = () => {
    navigate('/books/AdminInventory');
  };

  const goToOrderProcessing = () => {
    navigate('/orders/AdminViewOrders');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="space-y-4">
        <button
          onClick={goToBookProcessing}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
        >
          Book Processing
        </button>
        <button
          onClick={goToOrderProcessing}
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition duration-200"
        >
          Order Processing
        </button>
        <button
          onClick={goToLogin}
          className="px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition duration-200"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
