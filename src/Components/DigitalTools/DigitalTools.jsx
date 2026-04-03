import React, { use, useState } from 'react';
import Products from '../Products/Products';
import FullCart from '../FullCart/FullCart';

const DigitalTools = ({productPromise,cart,setCart}) => {

    // ekta use state lagbe
    const [activeBtn,setactiveBtn]=useState('product');
    const products=use(productPromise);
    // console.log(products);
    const [cartPrice,setcartPrice]=useState(0);

    return (

        <div className='p-10'>
            <div className=' w-10/12 mx-auto flex flex-col justify-center items-center gap-4 mt-30'>
                <h3 className='font-bold text-5xl text-[#101727] text-center md:text-left'>Premium Digital Tools</h3>
                <p className='text-[#627382] text-center md:text-left'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>

                <div className='flex bg-white border-[#F6F6F6] border rounded-full gap-2 justify-center items-center p-2 shadow-md'>
                    <button onClick={()=>setactiveBtn('product')} className={`py-3 px-5 ${activeBtn==='product' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full gap-1 font-medium' : 'text-[#25065D] font-medium'}`}>Products</button>
                    {/* <button className='py-3 px-5 text-[#25065D] font-medium'>Cart(2)</button> */}

                    <button onClick={()=>setactiveBtn('cart')} className={`py-3 px-5 ${activeBtn==='cart' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full gap-1 font-medium' : 'text-[#25065D] font-medium'}`}>Cart ({cart.length})</button>
                </div>
                
               
                
            </div>

             {activeBtn==='product' ? <Products products={products} cart={cart} setCart={setCart} cartPrice={cartPrice} setcartPrice={setcartPrice}></Products> : <FullCart cart={cart} setCart={setCart} cartPrice={cartPrice} setcartPrice={setcartPrice}></FullCart>}

        </div>

        
    );
};

export default DigitalTools;