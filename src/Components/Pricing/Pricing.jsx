import React from 'react';
import { CiCircleCheck } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";


const Pricing = () => {
    return (
        <div className='pb-20'>

            <div className='w-10/12 mx-auto'>
                <h2 className='text-center mb-4 text-5xl font-bold text-[#101727]'>Simple, Transparent Pricing</h2>
                <p className='text-center mb-10 text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

                <div className='grid md:grid-cols-3'>
                    <div className='bg-[#F9FAFC] border border-[#F2F2F2] shadow-md p-7 rounded-2xl max-w-95'>
                        <h3 className='font-bold text-2xl mb-2'>Starter</h3>
                        <p className='mb-6 text-[#627382]'>Perfect for getting started</p>

                        <h3 className='font-bold text-3xl text-[#101727] mb-6'>$0/<span className='text-[#627382] text-xl'>month</span></h3>

                        <ul className='mb-6'>
                            <li className='flex items-center gap-2'><CiCircleCheck className='text-green-800' /> Access to 10 free tools</li>
                            <li className='flex items-center gap-2'><CiCircleCheck className='text-green-800' /> Basic templates</li>
                            <li className='flex items-center gap-2'><CiCircleCheck className='text-green-800' /> Community support</li>
                            <li className='flex items-center gap-2'><CiCircleCheck className='text-green-800' /> 1 project per month</li>
                        </ul>
                        <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full p-3 rounded-full'>Get Started Free</button>
                    </div>

                    <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-md p-7 rounded-2xl max-w-95 text-white relative'>
                        <span className='bg-[#FEF3C6] text-[#BB4D00] py-1 px-2 rounded-full absolute left-1/2 -top-4 -translate-x-1/2 '>Most Popular</span>
                        <h3 className='font-bold text-2xl mb-2'>Pro</h3>
                        <p className='mb-6'>Best for professionals</p>

                        <h3 className='font-bold text-3xl mb-6'>$29<span className='text-xl'>/month</span></h3>

                        <ul className='mb-6'>
                            <li className='flex items-center gap-2'><FaCheck className='text-white' />Access to all premium tools</li>
                            <li className='flex items-center gap-2'><FaCheck className='text-white' />Unlimited templates</li>
                            <li className='flex items-center gap-2'><FaCheck className='text-white' />Priority support</li>
                            <li className='flex items-center gap-2'><FaCheck className='text-white' />Unlimited projects</li>
                            <li className='flex items-center gap-2'><FaCheck className='text-white' />Cloud sync</li>
                            <li className='flex items-center gap-2'><FaCheck className='text-white' />Advanced analytics</li>
                            
                        </ul>
                        <button className='bg-white text-white w-full p-3 rounded-full font-bold'> <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Start Pro Trial</span> </button>
                    </div>

                    <div className='bg-[#F9FAFC] border border-[#F2F2F2] shadow-md p-7 rounded-md max-w-95'>
                        <h3 className='font-bold text-xl mb-2'>Enterprise</h3>
                        <p className='mb-6 text-[#627382]'>For teams and businesses</p>

                        <h3 className='font-bold text-3xl text-[#101727] mb-6'>$99/<span className='text-[#627382] text-xl'>month</span></h3>

                        <ul className='mb-6'>
                            <li className='flex items-center gap-2'><CiCircleCheck className='text-green-800' /> Everything in Pro</li>
                            <li className='flex items-center gap-2'><CiCircleCheck className='text-green-800' /> Team collaboration</li>
                            <li className='flex items-center gap-2'><CiCircleCheck className='text-green-800' /> Custom integrations</li>
                            <li className='flex items-center gap-2'><CiCircleCheck className='text-green-800' /> Dedicated support</li>
                            <li className='flex items-center gap-2'><CiCircleCheck className='text-green-800' /> SLA guarantee</li>
                            <li className='flex items-center gap-2'><CiCircleCheck className='text-green-800' /> Custom branding</li>
                        </ul>
                        <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full p-3 rounded-full'>Contact Sales</button>
                    </div>
                </div>
            </div>

        </div>
       
    );
};

export default Pricing;