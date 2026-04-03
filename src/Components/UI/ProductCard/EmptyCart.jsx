import React from 'react';
import { GiShoppingCart } from "react-icons/gi";

const EmptyCart = () => {
    return (
        <div className='border-2 border-white shadow-md w-10/12 mx-auto flex flex-col justify-center items-center h-50'>
            
            <GiShoppingCart className='w-15 h-15 mb-3 rounded-md' />
            <h2 className='text-2xl'>Your Cart is Empty</h2>

        </div>
    );
};

export default EmptyCart;