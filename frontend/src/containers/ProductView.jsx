import React, { useEffect, useState } from "react";
import "../styles/ProductView.css";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import arrowLeft from "../assets/goback.svg";

const ProductView = () => {
  const { user } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();

  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    async function getProductByID() {
      setLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const json = await response.json();
      setProduct(json);
      setLoading(false);
    }

    getProductByID();
    return () => {};
  }, []);

  return product == null ? (
    <Loading />
  ) : (
    <div className="product-view-container">
      <a
        id="go-back-btn"
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src={arrowLeft}></img>
        <span>Go Back</span>
      </a>
      <div className="product-view-container-inner">
        <div className="product-display-div">
          <img className="product-view-image" src={product.image}></img>
        </div>
        <div className="product-details-div">
          <div id="product-title-text">{product.title}</div>
          <div id="product-desc-text">{product.description}</div>
          <div id="product-specifics-text">
            <div>
              <span id="specifics-text"> Specifics </span>
            </div>
            <div>
              <span id="specifics-header">Rating: </span>{" "}
              <span id="specifics-value">
                <b>{product.rating.rate}</b>{" "}
              </span>
            </div>
            <div>
              <span id="specifics-header">In </span>{" "}
              <span id="specifics-value">
                <b>{product.rating.count}</b>
              </span>
              <span id="specifics-header"> carts currently </span>
            </div>
          </div>
          <div className="product-view-btn">
            <button
              id="add-to-cart-btn"
              onClick={() => {
                console.log("ADDED TO CART");
              }}
            >
              ADD TO CART
            </button>
            <button
              id="buy-now-btn"
              // onClick={() => {
              //   console.log("ADDED TO CART");
              // }}
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
