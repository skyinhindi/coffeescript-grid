import React, { useState } from "react";
import ProductView from "../containers/ProductView";
import "../styles/ProductCard.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [productView, setProductView] = useState("/");

  const navigate = useNavigate();

  const { title, image, price, desc } = product;

  return (
    // <Link
    //       onClick={() => {setProductView(product.id)}}
    //       to={`/product/${product.id}`} key={product.id}>
    <div
      className="product-card-container"
      onClick={() => {
        <ProductView product={product} />;
      }}
    >
      <div className="product-image-container">
        <img className="product-image" src={image}></img>
        <div className="product-hover">
          <div className="product-price">
            <span className="price-display-span">{price}</span>
          </div>
        </div>
      </div>
      <div className="product-details">
        <div className="product-title-text">
          {title.length > 40
            ? title.substring(0, 10) + `\n` + title.substring(11, 20) + "..."
            : title}
        </div>
        <div className="product-description-text">
          {/* {desc.substring(0, 30)} */}
          {desc}
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default ProductCard;
