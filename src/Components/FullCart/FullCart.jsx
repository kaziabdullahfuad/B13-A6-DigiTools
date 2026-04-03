import React from 'react';
import CartProducts from '../UI/ProductCard/CartProducts';
import EmptyCart from '../UI/ProductCard/EmptyCart';

const FullCart = ({cart,setCart,cartPrice,setcartPrice}) => {
    return (
        <div className='mt-10'>
            {cart.length ? <CartProducts cart={cart} setCart={setCart} cartPrice={cartPrice} setcartPrice={setcartPrice}></CartProducts> : <EmptyCart></EmptyCart>}
        </div>
    );
};

export default FullCart;