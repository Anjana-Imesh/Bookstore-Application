/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import OrdersCard from '../components/BookInventory/OrdersCard';
import BackButton from '../components/BackButton';
const AdminOrder = () => {
  const [orders, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/orders')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
       <BackButton />
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Orders List</h1>
      </div>
      {loading ? <Spinner /> : <OrdersCard orders={orders} />}
    </div>
  );
};

export default AdminOrder;
*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import OrdersCard from '../components/BookInventory/OrdersCard';

const AdminOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/orders')
      .then((response) => {
        setOrders(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-3xl'>Orders List</h1>
        {/* Go to Dashboard Button */}
        <Link to='/AdminDashboard'>
          <button className='bg-blue-500 text-white px-4 py-2 rounded'>
            Go to Dashboard
          </button>
        </Link>
      </div>
      {loading ? <Spinner /> : <OrdersCard orders={orders} />}
    </div>
  );
};

export default AdminOrder;
