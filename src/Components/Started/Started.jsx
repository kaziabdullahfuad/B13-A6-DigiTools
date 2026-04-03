import React from 'react';
import User from '../../assets/user.png'
import Rocket from '../../assets/rocket.png'
import Package from '../../assets/package.png'

const Started = () => {
    return (
        <div className='pt-30 pb-30'>
             <div className='w-10/12 mx-auto'>
                <h2 className='text-center mb-4 text-5xl font-bold text-[#101727]'>Get Started in 3 Steps</h2>
                <p className='text-center mb-10 text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>

                <div className='grid md:grid-cols-3'>
                    <div className='border border-[#F1F1F1] shadow-md p-5 pb-26 max-w-95 rounded-md'>
                        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-fit p-1 rounded-full ml-auto'>
                            <span className='text-white'>01</span>
                        </div>
                        <div className=' space-y-4 flex flex-col justify-center items-center '>
                            <div className='bg-pink-100 w-fit p-2 rounded-full'>

                            <img src={User} alt="" />
                            </div>
                            <h3 className='text-[#101727] font-bold text-2xl'>Create Account</h3>
                            <p className='text-[#627382] text-center'>Sign up for free in seconds. No credit card required to get started. </p>
                        </div>
                       
                    </div>

                    <div className='border border-[#F1F1F1] shadow-md p-5 max-w-95 rounded-md'>
                        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-fit p-1 rounded-full ml-auto'>
                            <span className='text-white'>02</span>
                        </div>
                        <div className=' space-y-4 flex flex-col justify-center items-center '>
                            <div className='bg-pink-100 w-fit p-2 rounded-full'>

                            <img src={Package} alt="" />
                            </div>
                            <h3 className='text-[#101727] font-bold text-2xl'>Choose Products</h3>
                            <p className='text-[#627382] text-center'>Browse our catalog and select the tools <br />that fit your needs.</p>
                        </div>

                        
                    </div>

                    <div className='border border-[#F1F1F1] shadow-md p-5 max-w-95 rounded-md'>
                        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-fit p-1 rounded-full ml-auto'>
                            <span className='text-white'>03</span>
                        </div>
                        <div className=' space-y-4 flex flex-col justify-center items-center '>
                            <div className='bg-pink-100 w-fit p-2 rounded-full'>

                            <img src={Rocket} alt="" />
                            </div>
                            <h3 className='text-[#101727] font-bold text-2xl'>Start Creating</h3>
                            <p className='text-[#627382] text-center'>Download and start using your premium <br />tools immediately.</p>
                        </div>

                        
                    </div>
                </div>
             </div>
        </div>
       
    );
};

export default Started;