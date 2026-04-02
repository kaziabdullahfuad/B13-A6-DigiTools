import React from 'react';
import myBanner from '../../assets/banner.png'
import { CiPlay1 } from "react-icons/ci";


const Banner = () => {
    return (
        <div className=''>
            <div className=' md:w-10/12 mx-auto flex flex-col md:flex-row gap-14 md:justify-around  items-center py-9 text-center md:text-left'>
                <div className=''>
                
                    <div className='flex  gap-2 items-center bg-[#E1E7FF] max-w-[294px] rounded-full py-2 px-4 mb-4 mx-auto md:mx-0'>
                        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-3 h-3  rounded-full'>
                            <span className='bg-[#c4b5fd] w-10 h-4 rounded-md'></span>                         
                        </div>

                        <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold'> New: AI-Powered Tools Available</p>                   
                    </div>
                    
                    <h1 className='font-bold text-xl md:text-7xl text-[#101727] mb-4'>Supercharge Your <br /> Digital Workflow</h1>
                    <p className='text-[#627382] text-xl mb-8'>Access premium AI tools, design assets, templates, and productivity <br/> software—all in one place. Start creating faster today. <br /> Explore Products</p>

                    <div className='flex gap-4 justify-center md:justify-normal'>
                        <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full p-4'>Explore Products</button>
                        <button className='border-2 border-[#4F39F6] p-4 rounded-full flex items-center text-[#4F39F6] font-bold gap-1'><CiPlay1 className='text-[#4F39F6] font-bold'/> Watch Demo</button>
                    </div>
                    

                </div>

                <div>
                    <img src={myBanner} alt="" />
                </div>
            
            </div>
        </div>
    );
};

export default Banner;