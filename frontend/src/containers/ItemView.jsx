import { React, useEffect, useState } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Products from "./Products";
import "../styles/itemView.css";

const ItemView = ({ searchTerm, setSelected }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getProducts = async () => {
      if (categoryId) {
        setLoading(true);
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${categoryId}`
        );
        const products = await response.json();
        setProducts(products);
        setLoading(false);
      } else {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products/");
        const products = await response.json();
        setProducts(products);
        setLoading(false);
      }
    };

    getProducts();
    return () => {};
  }, [categoryId]);

  useEffect(() => {
    const filterProducts = async () => {
      setLoading(true);
      navigate("/");
      setSelected("/");
      const response = await fetch("https://fakestoreapi.com/products");
      let products = await response.json();
      products = products.filter((product) => {
        const title = product.title.toLowerCase();
        const desc = product.description.toLowerCase();

        if (title.includes(searchTerm) || desc.includes(searchTerm))
          return true;
        else return false;
      });
      setProducts(products);
      setLoading(false);
    };
    filterProducts();
    return () => {};
  }, [searchTerm]);
  return (
    <div className="item-view">
      {loading ? <Loading /> : <Products products={products} />}
    </div>
  );
};

export default ItemView;
