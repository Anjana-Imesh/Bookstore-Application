/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import CustomerTable from '../components/BookInventory/CustomerTable';

const CustomerInventory = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState(''); // State for title search term
    const [categoryTerm, setCategoryTerm] = useState(''); // State for category search term
    const [authorTerm, setAuthorTerm] = useState(''); // State for author search term

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/books')
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    // Filter books based on search terms
    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        book.category.toLowerCase().includes(categoryTerm.toLowerCase()) &&
        book.author.toLowerCase().includes(authorTerm.toLowerCase())
    );

    return (
        <div className='p-4 flex flex-col items-center'>
            <div className='w-full flex flex-col items-center justify-center my-8'>
                <h1 className='text-black text-3xl mb-4'>Books List</h1>
                
                
                <div className='w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4'>
                    
                    <input
                        type='text'
                        placeholder='Search books by title'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='border-2 border-black p-2 rounded placeholder-black w-full md:w-1/3'
                    />

                    
                    <input
                        type='text'
                        placeholder='Search books by category'
                        value={categoryTerm}
                        onChange={(e) => setCategoryTerm(e.target.value)}
                        className='border-2 border-black p-2 rounded placeholder-black w-full md:w-1/3'
                    />

                    
                    <input
                        type='text'
                        placeholder='Search books by author'
                        value={authorTerm}
                        onChange={(e) => setAuthorTerm(e.target.value)}
                        className='border-2 border-black p-2 rounded placeholder-black w-full md:w-1/3'
                    />
                </div>

                <div className='w-full flex justify-between items-center mb-4'>
                    <div className='flex items-center space-x-4'>
                        
                        <Link
                            to='/orders/CustomerPutOrders' // Adjust the path to match your route
                            className='flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
                        >
                            <MdOutlineAddBox className='mr-2 text-2xl' />
                            Add Order
                        </Link>

                        
                        <Link
                            to='/' // Navigate to homepage
                            className='flex items-center bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600'
                        >
                            Home
                        </Link>
                    </div>
                </div>
            </div>

            {loading ? <Spinner /> : <CustomerTable books={filteredBooks} />}
        </div>
    );
};

export default CustomerInventory;
*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import CustomerTable from '../components/BookInventory/CustomerTable';

const CustomerInventory = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState(''); // State for title search term
    const [categoryTerm, setCategoryTerm] = useState(''); // State for category search term
    const [authorTerm, setAuthorTerm] = useState(''); // State for author search term

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/books')
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    // Filter books based on search terms
    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        book.category.toLowerCase().includes(categoryTerm.toLowerCase()) &&
        book.author.toLowerCase().includes(authorTerm.toLowerCase())
    );

    return (
        <div className='p-4 flex flex-col items-center'>
            <div className='w-full flex flex-col items-center justify-center my-8'>
                <h1 className='text-black text-3xl mb-4'>Books List</h1>
                
                {/* Search and Action Buttons */}
                <div className='w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4'>
                    {/* Title Filter */}
                    <input
                        type='text'
                        placeholder='Search books by title'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='border-2 border-black p-2 rounded placeholder-black w-full md:w-1/3'
                    />

                    {/* Category Filter */}
                    <input
                        type='text'
                        placeholder='Search books by category'
                        value={categoryTerm}
                        onChange={(e) => setCategoryTerm(e.target.value)}
                        className='border-2 border-black p-2 rounded placeholder-black w-full md:w-1/3'
                    />

                    {/* Author Filter */}
                    <input
                        type='text'
                        placeholder='Search books by author'
                        value={authorTerm}
                        onChange={(e) => setAuthorTerm(e.target.value)}
                        className='border-2 border-black p-2 rounded placeholder-black w-full md:w-1/3'
                    />
                </div>

                <div className='w-full flex justify-between items-center mb-4'>
                    <div className='flex items-center space-x-4'>
                        {/* Add Order Button with Icon */}
                        <Link
                            to='/orders/CustomerPutOrders' // Adjust the path to match your route
                            className='flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
                        >
                            <MdOutlineAddBox className='mr-2 text-2xl' />
                            Add Order
                        </Link>

                        {/* Go to Login Button */}
                        <Link
                            to='/login' // Navigate to login page
                            className='flex items-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'
                        >
                            Go to Login
                        </Link>
                    </div>
                </div>
            </div>

            {loading ? <Spinner /> : <CustomerTable books={filteredBooks} />}
        </div>
    );
};

export default CustomerInventory;
