import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
    return(
        <table className='w-full border-separate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600 rounded-md'>No</th>
                            <th className='border border-slate-600 rounded-md'>Title</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>
                                Author
                            </th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>
                            Category
                            </th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>
                              Price  
                            </th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>
                                In Stock
                            </th>
                            <th className='border border-slate-600 rounded-md'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <tr key={book._id} className='h-8'>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {index + 1}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {book.title}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {book.author}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {book.category}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {book.price}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {book.inStock}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={`/books/details/${book._id}`}>
                                            <BsInfoCircle className='text-2x1 text-green-800' />
                                        </Link>
                                        <Link to={`/books/edit/${book._id}`}>
                                            <AiOutlineEdit className='text-2x1 text-yellow-600' />
                                        </Link>
                                        <Link to={`/books/delete/${book._id}`}>
                                            <MdOutlineDelete className='text-2x1 text-red-600' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
    )
}

export default BooksTable