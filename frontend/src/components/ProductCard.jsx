import React, { useState } from "react";
import ProductView from "../containers/ProductView";
import "../styles/ProductCard.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductCard = ({ product, handleBuy }) => {
  const navigate = useNavigate();
  const { id, title, description, image } = product;
  const price = "0.01 ETH";

  return (
    <div
      className="product-card-container"
      onClick={() => {
        navigate(`/product/${id}`);
      }}
    >
      <div className="product-image-container">
        <img className="product-image" src={image}></img>
      </div>
      <div className="product-details">
        <div className="product-title-text">{title}</div>
        <div className=""></div>
        <div className="divider"></div>
        <div className="product-bottom-row">
          <a onClick={() => handleBuy(id, title)}>Add to cart</a>
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default ProductCard;
