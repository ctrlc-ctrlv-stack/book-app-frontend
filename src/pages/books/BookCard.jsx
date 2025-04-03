import React from 'react'
import { BiBookmarkAlt } from 'react-icons/bi'
import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { getImgUrl } from '../../utilis/getImgUrl'
import {useDispatch} from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'
const BookCard = ({book}) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  return (
    <div className=" rounded-lg transition-shadow duration-300">
  <div className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4">
   <div className="sm:h-60 sm:w-40 flex-shrink-0 border rounded-md overflow-hidden">
    <Link to={`/books/${book._id}`}>
        <img
            src={`${getImgUrl(book?.coverImage)}`}
            alt={book?.title}
            className="w-full h-full object-cover rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
        />
    </Link>
</div>


    <div>
    <Link to={`/books/${book._id}`}>
                        <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
                       {book?.title}
                        </h3>
                    </Link>
                    <p className="text-gray-600 mb-5">
    {book?.description.length > 80 ? `${book.description.slice(0, 80)}...` : book?.description}
</p>

      <p className="font-medium mb-5">
        ${book?.newPrice} <span className="line-through font-normal ml-2">${book?.oldPrice}</span>
      </p>
      <button
      onClick={() => handleAddToCart(book)}
      className="bg-primary text-white hover:bg-blue-700 px-6 py-2 flex items-center gap-1 rounded-md mt-3">
    <FiShoppingCart />
    <span>Add to Cart</span>
</button>

      
    </div>
  </div>
</div>
  )
}
export default BookCard