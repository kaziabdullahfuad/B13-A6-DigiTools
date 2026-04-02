import React from 'react';
import ProductCard from '../UI/ProductCard/ProductCard';

const Products = ({products,cart,setCart}) => {
    return (
        <div className='mt-10  w-10/12 mx-auto grid md:grid-cols-3 gap-7 rounded-2xl'>

            {
                products.map((product,index)=>{

                    return <ProductCard product={product} key={index} cart={cart} setCart={setCart}></ProductCard>
                })
            }
        </div>
    );
};

export default Products;