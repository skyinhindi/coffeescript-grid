import React, { useState, useEffect } from "react";
import "../styles/products.css";
import ProductCard from "../components/ProductCard";
import WishlistItem from "../components/WishlistItem";
import ProductItem from "../components/ProductItem";

const Products = ({ products }) => {
  const [cartItems, setCartItems] = useState([]);
  // console.log(cartItems);

  useEffect(() => {
        let newCartItems = JSON.parse(localStorage.getItem('cartItems'));
        setCartItems(newCartItems);
        // console.log('newcartitems', newCartItems);

    return () => {
    };
  }, [])

  useEffect(() => {
    if(cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    return () => {
    };
  }, [cartItems])

  return (
    <div className="products-view-container">
      {products.length === 0 ? (
        <div className="products-notFound">
          {"No products are available! Come back later :)"}
        </div>
      ) : (
        products.map((product) => {
          return <ProductItem product={product} key={product.id} cartItems={cartItems} setCartItems={setCartItems} />;
        })
      )}
    </div>
  );
};

export default Products;
