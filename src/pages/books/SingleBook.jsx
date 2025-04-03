import React from 'react'
import { FiShoppingCart } from "react-icons/fi"
import { useParams } from "react-router-dom"

import { getImgUrl } from '../../utilis/getImgUrl';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useFetchBookByIdQuery } from '../../redux/features/books/booksApi';

const SingleBook = () => {
    const {id} = useParams();
    const {data: book, isLoading, isError} = useFetchBookByIdQuery(id);
    
    const dispatch =  useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error happending to load book info</div>
  return (
    <div className="max-w-lg bg-white shadow-lg rounded-lg p-6 mx-auto border border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{book.title}</h1>

            <div className='"flex flex-col items-center"'>
                <div>
                    <img
                        src={`${getImgUrl(book.coverImage)}`}
                        alt={book.title}
                        className="w-60 h-80 object-cover rounded-lg shadow-md mb-5 border"
                    />
                </div>

                <div className='text-gray-700 w-full'>
                    <p className="mb-2"><strong>Author:</strong> {book.author || 'admin'}</p>
                    <p className="mb-2">
                        <strong>Published:</strong> {new Date(book?.createdAt).toLocaleDateString()}
                    </p>
                    <p className="mb-2 capitalize">
                        <strong>Category:</strong> {book?.category}
                    </p>
                    <p className="mb-4"><strong>Description:</strong> {book.description}</p>
                </div>

                <button onClick={() => handleAddToCart(book)} className="flex items-center gap-2 bg-yellow-500 text-white px-6 py-2 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-yellow-600 shadow-md">
                    <FiShoppingCart size={20} />
                    <span>Add to Cart</span>

                </button>
            </div>
        </div>
  )
}

export default SingleBook