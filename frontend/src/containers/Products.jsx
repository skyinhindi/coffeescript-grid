import React, { useState } from "react";
import "../styles/Products.css";
import ProductCard from "../components/ProductCard";

const Products = ({ products }) => {
  return (
    <div className="products-view-container">
      {products.length === 0 ? (
        <div className="products-notFound">
          {"No products are available! Come back later :)"}
        </div>
      ) : (
        products.map((product) => {
          return (
            <ProductCard product={product} key={product.id} />
            // <h2 key={product.id}> {product.title}</h2>
          );
        })
      )}
    </div>
  );
};

export default Products;
