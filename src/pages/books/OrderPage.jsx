import React from 'react'
import { useGetOrderByEmailQuery } from '../../redux/features/orders/ordersApi'
import { useAuth } from '../../context/AuthContext';

const OrderPage = () => {
    const { currentUser} = useAuth()


    const { data: orders = [], isLoading, isError } = useGetOrderByEmailQuery(currentUser.email);
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error geting orders data</div>
    return (
        <div className='container mx-auto p-6'>
            <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>Your Orders 🛍️</h2>
            {
                orders.length === 0 ? (
                    <div className="text-gray-600 text-center text-lg">No orders found! 📭</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {orders.map((order, index) => (
                            <div key={order._id} className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
                                <div className="flex items-center justify-between">
                                    <p className='text-sm bg-blue-500 text-white px-3 py-1 rounded-full'>Order #{index + 1}</p>
                                    <span className='text-sm text-gray-500'>{new Date(order.createdAt).toLocaleDateString()}</span>
                                </div>
                                <h2 className="font-semibold text-lg mt-2 text-gray-900">Order ID: {order._id}</h2>
                                <p className="text-gray-600 mt-1"><strong>Name:</strong> {order.name}</p>
                                <p className="text-gray-600"><strong>Email:</strong> {order.email}</p>
                                <p className="text-gray-600"><strong>Phone:</strong> {order.phone}</p>
                                <p className="text-green-600 font-semibold text-lg mt-2">Total: ${order.totalPrice}</p>
                                <h3 className="font-semibold mt-4 text-gray-800">Shipping Address:</h3>
                                <p className="text-gray-600">{order.address.city}, {order.address.state}, {order.address.country} - {order.address.zipcode}</p>
                                <h3 className="font-semibold mt-4 text-gray-800">Products Ordered:</h3>
                                <ul className="list-disc pl-5 text-gray-600">
                                    {order.productIds.map((productId) => (
                                        <li key={productId}>{productId}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
}

export default OrderPage