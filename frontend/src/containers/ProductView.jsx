import React, { useEffect, useState } from "react";
import "../styles/ProductView.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ProductDetails from "../containers/ProductDetails";

function ProductView() {
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
      <btn
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </btn>
      <div className="product-display-div">
        <img className="product-view-image" src={product.image}></img>
      </div>
      <div className="product-details-div">
        <h2>{product.title}</h2>
        <a
          onClick={() => {
            console.log("ADDED TO CART");
          }}
        >
          Add to cart
        </a>
      </div>
    </div>
  );
}

export default ProductView;
