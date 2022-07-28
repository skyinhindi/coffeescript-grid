import React, { useState } from "react";
import "../styles/Products.css";
import ProductCard from "../components/ProductCard";

const Products = ({ products, setCartItems, cartItems}) => {
  return (
    <div className="products-view-container">
      {products.length === 0 ? (
        <div className="products-notFound">
          {"No products are available! Come back later :)"}
        </div>
      ) : (
        products.map((product) => {
          return <ProductCard product={product} key={product.id} cartItems={cartItems} setCartItems={setCartItems} />;
        })
      )}
    </div>
  );
};

export default Products;
