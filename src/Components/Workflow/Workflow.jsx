import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-30 text-white  flex flex-col justify-center items-center'>

           <h2 className='font-bold text-5xl mb-4'>Ready to Transform Your Workflow?</h2>
           <p className='mb-10'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>

           <div className='flex gap-4 mb-4'>
                <button className='bg-white p-4 rounded-full'><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Explore Products</span></button>
                <button className='bg-transparent border py-4 px-6 rounded-full'><span className=''>View Pricing</span></button>
           </div>

           <p>14-day free trial • No credit card required • Cancel anytime</p>
            
        </div>
    );
};

export default Workflow;