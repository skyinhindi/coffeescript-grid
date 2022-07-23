import React from 'react'
import '../styles/ProductView.css';
import { useParams } from 'react-router-dom'
import BuyBtn from '../components/BuyBtn';

function ProductView({}) {
    // const{productId} = useParams();
    const title = "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet";
    const desc = "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection."
    const category = "jewelery";
    const price = "695";
    const image = "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg";
    return (
    <div className='product-view-container'>
        <div className='product-display-div'>
            <img className="product-view-image" src={image}></img>
        </div>
        <div className='product-details-div'>
            <h2>{title}</h2>
            <BuyBtn />
        </div>
    </div>
  )
}

export default ProductView