import React from 'react';
import CartProducts from '../UI/ProductCard/CartProducts';
import EmptyCart from '../UI/ProductCard/EmptyCart';

const FullCart = ({cart}) => {
    return (
        <div className='mt-10'>
            {cart.length ? <CartProducts></CartProducts> : <EmptyCart></EmptyCart>}
        </div>
    );
};

export default FullCart;