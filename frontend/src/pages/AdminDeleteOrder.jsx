import React, { useState} from 'react'
import OrderBackButton from '../components/OrderBackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const AdminDeleteOrder = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const{ id } = useParams();
    const { enqueueSnackbar} =useSnackbar();

    const handleAdminDeleteOrder = () => {
      setLoading(true);
      axios
        .delete(`http://localhost:5555/orders/${id}`)
        .then(() =>{
            setLoading(false);
            enqueueSnackbar('Order deleted successfully', {variant: 'success'});
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
             <OrderBackButton/>
            <h1 className='text-3xl my-4'>Delete Order</h1>
            {loading ? <Spinner/> : ''}
            <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
                <h3 className='text-2xl'>Are you sure you want to delete this order?</h3>
                <button className='p-4 bg-red-600 text-white m-8 w-full'
                onClick={handleAdminDeleteOrder}
                >
                    Yes, Delete it
                </button>
            </div>
        </div>
    )
}

export default AdminDeleteOrder