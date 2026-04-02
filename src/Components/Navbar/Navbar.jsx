import React from 'react';
import { CiShoppingCart } from "react-icons/ci";


const Navbar = ({cart}) => {
    return (
        <div className='bg-white border border-[#F2F2F2] shadow-md p-5'>

        
        <div className='md:w-10/12 mx-auto flex  flex-col  md:flex-row md:justify-between items-center '>
            <div>

            <h2 className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-5xl font-bold p-2'>DigiTools</h2>
            </div>

            <ul className='flex flex-wrap gap-8 items-center '>
                <li><a className='font-semibold text-[#101727]' href="">Products</a></li>
                <li><a className='font-semibold text-[#101727]' href="">Features</a></li>
                <li><a className='font-semibold text-[#101727]' href="">Pricing</a></li>
                <li><a className='font-semibold text-[#101727]' href="">Testimonials</a></li>
                <li><a className='font-semibold text-[#101727]' href="">FAQ</a></li>
            </ul>

            <div className='flex items-center gap-2 '> 
                
                {/* <span className='relative'>
                    <CiShoppingCart className='w-10 h-8' />
                    <p className='absolute -top-1 right-0 text-red-600 text-xl'>2</p>
                </span> */}
                <div className="indicator">
            <span className="indicator-item badge badge-secondary">{cart.length}</span>
                <CiShoppingCart className='w-10 h-8' />
            </div>
                
                <button className='btn btn-ghost shadow-md rounded-md font-semibold text-[#101727]'>Login</button>
                
                <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-4 py-3 rounded-full font-semibold text-white'>Get Started</button>
            </div>

        </div>
    </div>
    );
};

export default Navbar;