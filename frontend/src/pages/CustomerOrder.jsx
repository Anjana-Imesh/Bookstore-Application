import React, { useState } from 'react'
import CustomerBackButton from '../components/CustomerBackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CustomerOrder = () => {
    const [customerName, setcustomerName] = useState('');
    const [bookDetails, setbookDetails] = useState('');
    const [address, setaddress] = useState('');
    const [email, setemail] = useState('');
    const [loading, setLoading] = useState('');
    const navigate = useNavigate();
    const { enqueueSnackbar } =useSnackbar();

    const handleSaveOrder = () => {
        const data = {
            customerName,
            bookDetails,
            address,
            email,
        };
        setLoading(true);
        axios
            .post('http://localhost:5555/orders', data)
            .then(() =>{
                setLoading(false);
                enqueueSnackbar('Order created successfully',{variant: 'success'});
                navigate('/books/CustomerInventory');
            })
            .catch((error) => {
                setLoading(false);
                //alert('An error happend. Please check console');
                enqueueSnackbar('Error',{ variant: 'error'});
                console.log(error);
            });
    };

    return (
        <div className='p-4'>
            <CustomerBackButton />
            <h1 className='text-3xl my-4'>Create Order</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Customer Name</label>
                    <input
                        type='text'
                        value={customerName}
                        onChange={(e) => setcustomerName(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Book and how many copies</label>
                    <input
                        type='text'
                        value={bookDetails}
                        onChange={(e) => setbookDetails(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Address</label>
                    <input
                        type='text'
                        value={address}
                        onChange={(e) => setaddress(e.target.value)}
                        className='border -2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Email</label>
                    <input
                        type='text'
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        className='border -2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleSaveOrder}>
                    Place Order
                </button>
            </div>
        </div>
    );
}

export default CustomerOrder