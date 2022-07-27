import React from "react";
import "../styles/products.css";
import ProductCard from "../components/ProductCard";

function Products({ products }) {
  console.log(products);
  return (
    <div className="products-view-container">
      {products.length === 0 ? (
        <div className="products-notFound">{"No products are available! Come back later :)"}</div>
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
