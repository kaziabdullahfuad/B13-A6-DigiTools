import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-[#101727] pt-30 pb-9'>
            
            <div className='w-10/12 mx-auto mb-20'>
          
            <div className=' text-white  grid md:grid-cols-5  gap-11 '>
                <div >
                    <h2 className='text-4xl mb-4'>DigiTools</h2>
                    <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                
                <div>
                    <h3 className='mb-4 text-xl font-medium'>Product</h3>

                    <ul className='space-y-4'>
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Templates</a></li>
                        <li><a href="">Integrations</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className='mb-4 text-xl font-medium'>Company</h3>

                    <ul className='space-y-4'>
                        <li><a href="">About</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Press</a></li>
                    </ul>
                </div>
                <div>

                    <h3 className='mb-4 text-xl font-medium'>Resources</h3>

                    <ul className='space-y-4'>
                        <li><a href="">Documenta</a></li>
                        <li><a href="">Help Center</a></li>
                        <li><a href="">Community</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className='font-medium text-xl mb-4'>Social Links</h3>

                    <div className='flex gap-4 items-center'>
                        <div className='bg-white p-2 w-fit rounded-full'>

                        <FaInstagram className='text-black' />
                        </div>
                        <div className='bg-white p-2 w-fit rounded-full'>
                        <FaFacebook className='text-black' />

                        </div>
                        <div className='bg-white p-2 w-fit rounded-full'>

                        <FaXTwitter className='text-black' />
                        </div>
                    </div>
                </div>
            </div>
           
            
         </div>
          <div className='text-white opacity-50 w-10/12 mx-auto'>
                <hr className='mb-7' />

                <div className='flex justify-between'>
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className='flex gap-4'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
          </div>
        </div>
    );
};

export default Footer;