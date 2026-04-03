import React, { useState } from 'react';
import { toast } from 'react-toastify';

const CartProducts = ({cart,setCart,cartPrice,setcartPrice}) => {
    console.log(cart);
    
    const removeBtn=(prod)=>{

        toast.success(`${prod.name} removed from cart`)
        const newCart=cart.filter(product=>product.name!==prod.name);
        setCart(newCart);
        const newPrice=cartPrice-prod.price;
        setcartPrice(newPrice);
    }

    const checkOut=()=>{

        toast.success('All Products removed from Cart');
        setcartPrice(0);
        setCart([])
    }

    return (
        <div className='w-10/12 mx-auto border p-10 shadow-md border-[#F2F2F2]'>
            <h2 className='font-bold text-2xl mb-6'>Your Cart</h2>
            
            {
                cart.map((prod,index)=>{
                   
                    return <div key={index} className='flex justify-between items-center border border-[#F9FAFC] shadow-md mb-4 p-5 rounded-md'>

                        <div className='flex gap-4 items-center'>
                            <div className='border w-fit rounded-full border-[#F2F2F2] p-2'>

                            <img src={prod.img} alt="" />
                            </div>

                            <div>
                                <h3 className='text-[#101727] font-semibold text-xl'>{prod.name}</h3>
                                <p className='text-[#627382] font-medium'>${prod.price}</p>
                            </div>
                            
                        </div>

                        <div>
                           <button onClick={()=>removeBtn((prod))} className='text-[#FF3980] font-bold'>Remove</button>
                        </div>
                    </div>
                })

                
            }
            
            <div className='flex  justify-between mb-5'>
                <p className='text-[#627382]'>Total:</p>
                <h3 className='text-xl font-bold text-[#101727]'>${cartPrice}</h3>
            </div>

            <button onClick={checkOut} className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full text-white p-3 rounded-full cursor-pointer'>Proceed to Checkout</button>
        </div>
    );
};

export default CartProducts;