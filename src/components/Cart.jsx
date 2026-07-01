import React from 'react'

function Cart({data}) {
    const {image, title, price} = data;
    return (
        <>
            <div className='border border-red-300 p-5 rounded-md shadow-md shadow-gray-200 hover:shadow-xl'>
                <img src={image} className='h-50 object-cover hover:scale-105 transition-all' />
                <p className='mt-2 text-sm truncate text-left'>{title}</p>
                <p className='mt-2 text-sm truncate text-left'>${price}</p>
            </div>
        </>
    )
}

export default Cart