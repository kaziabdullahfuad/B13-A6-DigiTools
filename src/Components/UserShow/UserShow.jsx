import React from 'react';

const UserShow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            
            <div className='grid grid-cols-5 place-items-center py-5'>

                <div>
                    <h3 className='text-white font-bold text-6xl mb-3'>50K+</h3>
                    <p className='text-white  text-2xl'>Active Users</p>
                </div>
                <hr className='border-white'/>
                <div>
                    <h3 className='text-white font-bold text-6xl mb-3'>200+</h3>
                    <p className='text-white  text-2xl'>Premium Tools</p>
                </div>

                <div>
                    <h3 className='text-white font-bold text-6xl mb-3'>4.9</h3>
                    <p className='text-white  text-2xl'>Rating</p>
                </div>

            </div>
        </div>
    );
};

export default UserShow;