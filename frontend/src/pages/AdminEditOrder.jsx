import React, { useState, useEffect } from 'react'
import OrderBackButton from '../components/OrderBackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const AdminEditOrder = () => {
    const [customerName, setcustomerName] = useState('');
    const [bookDetails, setbookDetails] = useState('');
    const [address, setaddress] = useState('');
    const [email, setemail] = useState('');
    const [loading, setLoading] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();
    const { enqueueSnackbar }= useSnackbar();
    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/orders/${id}`)
        .then((response) =>{
            setcustomerName(response.data.customerName);
            setbookDetails(response.data.bookDetails)
            setaddress(response.data.address)
            setemail(response.data.email)
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
            alert('An error happend. Please check console');
            console.log(error);
        });
    },[])
    const handleAdminEditOrder = () => {
        const data = {
            customerName,
            bookDetails,
            address,
            email,   
        };
        setLoading(true);
        axios
            .put(`http://localhost:5555/orders/${id}`, data)
            .then(() =>{
                setLoading(false);
                enqueueSnackbar('Order Edited successfully', { variant: 'success'});
                navigate('/orders/AdminViewOrders');
            })
            .catch((error) => {
                setLoading(false);
                //alert('An error happend. Please check console');
                enqueueSnackbar('Error', { variant: 'error'});
                console.log(error);
            });
    };

    return (
        <div className='p-4'>
             <OrderBackButton />
            <h1 className='text-3xl my-4'>Edit Order</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Customer name</label>
                    <input
                        type='text'
                        value={customerName}
                        onChange={(e) => setcustomerName(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Book details</label>
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
                <button className='p-2 bg-sky-300 m-8' onClick={handleAdminEditOrder}>
                    Save
                </button>
            </div>
        </div>
    );
}

export default AdminEditOrder