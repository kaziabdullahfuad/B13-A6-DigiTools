import React from 'react';
import { CiCircleCheck } from "react-icons/ci";

const ProductCard = ({product}) => {

    const tagStyles={
        "new":"bg-[#DBFCE7] text-[#0A883E] py-1 px-3 font-medium",
        "popular":"bg-[#E1E7FF] text-[#9514FA] py-1 px-3 font-medium",
        "best-seller":"bg-[#FEF3C6] text-[#BB4D00] py-1 px-3 font-medium"
    }

    return (

        <div className='bg-white border border-[#F2F2F2] shadow-md p-4 max-w-[400px]'>
           <span className={`flex ml-auto mb-2 border-2 w-fit  rounded-full ${tagStyles[product.tagType]}`}>{product.tag}</span>
           <div className='border border-[#F2F2F2] rounded-full w-fit p-2'>
            <img src={product.img} alt="" />

           </div>
           <h4 className='mb-4 mt-4 text-[#101727] font-bold text-2xl'>{product.name}</h4>
           <p className='text-[#627382] mb-4'>{product.description}</p>
           <p className='font-bold text-xl'>{product.price}$<span className='text-[#627382] text-sm'>/Month</span></p>
           {
                product.features.map((feature,index)=>{
                    return <ul className='mb-4 mt-4' index={index}>
                        <li className='flex items-center gap-2'><CiCircleCheck className='text-green-800' />{feature}</li>
                    </ul>
                })
           }
           <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full p-3 rounded-full text-white cursor-pointer'>Buy Now</button>
        </div>
    );
};

export default ProductCard;