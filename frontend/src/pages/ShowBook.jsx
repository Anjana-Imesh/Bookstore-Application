/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const ShowBook = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/books/${id}`)
            .then((response) => {
                setBook(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [id]);

    return (
        <div className='p-4'>
            <h1 className='text-3xl my-4'>Show Book</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                    {book.imageUrl && (
                        <div className='my-4'>
                            <img
                                src={book.imageUrl}
                                alt={book.title}
                                className='w-48 h-64 object-cover rounded-md'
                            />
                        </div>
                    )}
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Id</span>
                        <span>{book._id}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Title</span>
                        <span>{book.title}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Author</span>
                        <span>{book.author}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Publish year</span>
                        <span>{book.publishYear}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Price</span>
                        <span>{book.price}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>In Stock</span>
                        <span>{book.inStock}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Create Time</span>
                        <span>{new Date(book.createdAt).toString()}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
                        <span>{new Date(book.updatedAt).toString()}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShowBook;
*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const ShowBook = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/books/${id}`)
            .then((response) => {
                setBook(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [id]);

    return (
        <div className='p-4'>
            <h1 className='text-3xl my-4'>Show Book</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className='flex flex-col'>
                    {/* Separate division for book image */}
                    {book.imageUrl && (
                        <div className='my-4 flex justify-center'>
                            <img
                                src={book.imageUrl}
                                alt={book.title}
                                className='w-96 h-auto object-cover rounded-md shadow-lg'
                            />
                        </div>
                    )}

                    {/* Book details */}
                    <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 mx-auto'>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>Id</span>
                            <span>{book._id}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>Title</span>
                            <span>{book.title}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>Author</span>
                            <span>{book.author}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>category</span>
                            <span>{book.category}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>Price</span>
                            <span>{book.price}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>In Stock</span>
                            <span>{book.inStock}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
                            <span>{new Date(book.createdAt).toString()}</span>
                        </div>
                        <div className='my-4'>
                            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
                            <span>{new Date(book.updatedAt).toString()}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShowBook;
