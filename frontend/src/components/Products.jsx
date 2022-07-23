import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';


function Products() {
    // useEffect() = {
        
    // };
    const[products, setProducts] = useState([]);
    const getAPI=()=>{
        fetch('https://fakestoreapi.com/products/1')
            .then((res)=>res.json())
            .then((json)=>{
                console.log(json);
                setProducts(json);
            })
            .catch(error => console.log(error));
       };
  return (
    <div className="products-view">
        {/* {products.map((product) => {
            <h2>{product.title}</h2>

        })} */}
        
    </div>
  )
}

export default Products