<<<<<<< HEAD
import React from "react";
import "../styles/ProductView.css";
import { useParams } from "react-router-dom";

const ProductView = ({ handleBuy }) => {
  // const{productId} = useParams();

  const title =
    "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet";
  const desc =
    "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.";
  const category = "jewelery";
  const price = "695";
  const image =
    "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg";
  return (
    <div className="product-view-container">
      <div className="product-display-div">
        <img className="product-view-image" src={image}></img>
      </div>
      <div className="product-details-div">
        <h2>{title}</h2>
        <button className="buy-button" onClick={handleBuy}>
          Buy
        </button>
      </div>
    </div>
  );
};
=======
import React, { useEffect, useState}from 'react'
import '../styles/ProductView.css';
import { Link, useNavigate, useParams } from 'react-router-dom'
import BuyBtn from '../components/BuyBtn';
import Loading from '../components/Loading';
import ProductDetails from '../containers/ProductDetails';

function ProductView() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
    async function getProductByID() {
            setLoading(true);
            const response = await  fetch(`https://fakestoreapi.com/products/${productId}`);
            const json = await response.json();
            setProduct(json);
            setLoading(false);
        }

        getProductByID();
        return () => {
        };
    }, []);
    return product==null ? <Loading /> : <div className='product-view-container'>
    <btn onClick = {() => { navigate(-1);}}>Go back</btn>
    <div className='product-display-div'>
        <img className="product-view-image" src={product.image}></img>
    </div>
    <div className='product-details-div'>
        <h2>{product.title}</h2>
        <BuyBtn />
    </div>
</div>;
}
>>>>>>> 62b1eb4bcd06ef535a721fc134c738a64554fba6

export default ProductView;
