import React from "react";
import "../styles/Products.css";
import ProductCard from "../components/ProductCard";

function Products({ products }) {
  return (
    <div className="products-view-container">
      {products.length === 0 ? (
        <p>No products for u bich</p>
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
}

export default Products;
