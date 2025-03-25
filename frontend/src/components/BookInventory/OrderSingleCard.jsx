/*
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import OrderModal from './OrderModal';

const OrderSingleCard = ({ order }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div
            key={order._id}
            className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'
        >
            
            <h4 className='my-2 text-gray-500'>{order._id}</h4>
            <div className='flex justify-start items-center gap-x-2'>
                <PiBookOpenTextLight className='text-red-300 text-2xl' />
                <h2 className='my-1'>{order.bookDetails}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <PiBookOpenTextLight className='text-red-300 text-2xl' />
                <h2 className='my-1'>{order.customerName}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <BiUserCircle className='text-red-300 text-2xl' />
                <h2 className='my-1'>{order.address}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <BiUserCircle className='text-red-300 text-2xl' />
                <h2 className='my-1'>{order.email}</h2>
            </div>
            <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                <Link to={`/books/edit/${order._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
                </Link>
                <Link to={`/books/delete/${order._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
                </Link>
            </div>
            {showModal &&
                <OrderModal order={order} onClose={() => setShowModal(false)} />
            }
        </div>
    );
};

export default OrderSingleCard
*/

import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import OrderModal from './OrderModal';

const OrderSingleCard = ({ order }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div
            key={order._id}
            className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'
        >
            
            <h4 className='my-2 text-gray-500'>{order._id}</h4>
            <div className='flex justify-start items-center gap-x-2'>
                <span className='font-bold'>Book and amount:</span>
                <h2 className='my-1'>{order.bookDetails}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <span className='font-bold'>Customer:</span>
                <h2 className='my-1'>{order.customerName}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <span className='font-bold'>Address:</span>
                <h2 className='my-1'>{order.address}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <span className='font-bold'>Email:</span>
                <h2 className='my-1'>{order.email}</h2>
            </div>
            <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                <Link to={`/orders/AdminEditOrder/${order._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
                </Link>
                <Link to={`/orders/AdminDeleteOrder/${order._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
                </Link>
            </div>
            {showModal &&
                <OrderModal order={order} onClose={() => setShowModal(false)} />
            }
        </div>
    );
};

export default OrderSingleCard;
