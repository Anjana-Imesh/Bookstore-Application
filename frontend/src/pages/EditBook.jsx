import React, { useState, useEffect } from 'react'
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import BackButton from '../components/BackButton';
const EditBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [inStock, setInStock] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();
    const { enqueueSnackbar }= useSnackbar();
    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/books/${id}`)
        .then((response) =>{
            setAuthor(response.data.author);
            setCategory(response.data.category)
            setTitle(response.data.title)
            setPrice(response.data.price)
            setInStock(response.data.inStock)
            setImageUrl(response.data.imageUrl)
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
            alert('An error happend. Please check console');
            console.log(error);
        });
    },[])
    const handleEditBook = () => {
        const data = {
            title,
            author,
            category,
            price,
            inStock,
            imageUrl,
        };
        setLoading(true);
        axios
            .put(`http://localhost:5555/books/${id}`, data)
            .then(() =>{
                setLoading(false);
                enqueueSnackbar('Book Edited successfully', { variant: 'success'});
                navigate('/books/AdminInventory');
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
            <BackButton />
            <h1 className='text-3xl my-4'>Edit Book</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Author</label>
                    <input
                        type='text'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>category</label>
                    <input
                        type='text'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className='border -2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Price</label>
                    <input
                        type='number'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className='border -2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>In stock</label>
                    <input
                        type='number'
                        value={inStock}
                        onChange={(e) => setInStock(e.target.value)}
                        className='border -2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Image Url</label>
                    <input
                        type='text'
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className='border -2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
                    Save
                </button>
            </div>
        </div>
    );
}

export default EditBook