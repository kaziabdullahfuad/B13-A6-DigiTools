import React from 'react';

const UserShow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            
            <div className='w-10/12 mx-auto '>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-2 place-items-center py-5'>

                <div>
                    <h3 className='text-white font-bold text-6xl mb-3'>50K+</h3>
                    <p className='text-white  text-2xl'>Active Users</p>
                </div>
               <hr className="w-px h-16 bg-white border-none hidden md:block" />
                <div>
                    <h3 className='text-white font-bold text-6xl mb-3'>200+</h3>
                    <p className='text-white  text-2xl'>Premium Tools</p>
                </div>

                <hr className="w-px h-16 bg-white border-none hidden md:block" />

                <div>
                    <h3 className='text-white font-bold text-6xl mb-3'>4.9</h3>
                    <p className='text-white  text-2xl'>Rating</p>
                </div>

            </div>
            </div>
        </div>
    );
};

export default UserShow;