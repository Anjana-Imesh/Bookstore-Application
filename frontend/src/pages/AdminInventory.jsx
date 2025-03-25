/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import BooksTable from '../components/BookInventory/BooksTable';

const AdminInventory = () => {
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
        <div className='p-4'>
            <div className='flex flex-col md:flex-row gap-4 mb-4'>
                
                <input
                    type='text'
                    placeholder='Filter by title'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='border-2 border-black p-2 rounded placeholder-black'
                />

                
                <input
                    type='text'
                    placeholder='Filter by category'
                    value={categoryTerm}
                    onChange={(e) => setCategoryTerm(e.target.value)}
                    className='border-2 border-black p-2 rounded placeholder-black'
                />

                
                <input
                    type='text'
                    placeholder='Filter by author'
                    value={authorTerm}
                    onChange={(e) => setAuthorTerm(e.target.value)}
                    className='border-2 border-black p-2 rounded placeholder-black'
                />

                
                <Link to='/books/create'>
                    <button className='bg-green-500 text-white px-4 py-2 rounded'>
                        Add Book
                    </button>
                </Link>
            </div>

            {loading ? <Spinner /> : <BooksTable books={filteredBooks} />}
        </div>
    );
};

export default AdminInventory;
*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import BooksTable from '../components/BookInventory/BooksTable';

const AdminInventory = () => {
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
        <div className='p-4'>
            <div className='flex justify-between items-center mb-4'>
                <h1 className='text-2xl font-bold'>Book Inventory</h1>
                {/* Back to Dashboard Button */}
                <Link to='/AdminDashboard'>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded'>
                        Back to Dashboard
                    </button>
                </Link>
            </div>

            <div className='flex flex-col md:flex-row gap-4 mb-4'>
                {/* Title Filter */}
                <input
                    type='text'
                    placeholder='Filter by title'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='border-2 border-black p-2 rounded placeholder-black'
                />

                {/* Category Filter */}
                <input
                    type='text'
                    placeholder='Filter by category'
                    value={categoryTerm}
                    onChange={(e) => setCategoryTerm(e.target.value)}
                    className='border-2 border-black p-2 rounded placeholder-black'
                />

                {/* Author Filter */}
                <input
                    type='text'
                    placeholder='Filter by author'
                    value={authorTerm}
                    onChange={(e) => setAuthorTerm(e.target.value)}
                    className='border-2 border-black p-2 rounded placeholder-black'
                />

                {/* Add Book Button */}
                <Link to='/books/create'>
                    <button className='bg-green-500 text-white px-4 py-2 rounded'>
                        Add Book
                    </button>
                </Link>
            </div>

            {loading ? <Spinner /> : <BooksTable books={filteredBooks} />}
        </div>
    );
};

export default AdminInventory;
