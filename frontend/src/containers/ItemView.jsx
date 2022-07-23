import {React, useEffect, useState}from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import Loading from '../components/Loading';
import Products from '../components/Products';
import '../styles/itemView.css'

const ItemView = () => {

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams();
  useEffect( () => {
    const getProducts = async () => {
      if(categoryId) {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/category/${categoryId}`);
        const products = await response.json();
        console.log(products);
        setProducts(products);
        setLoading(false);
      }
      else {
        setLoading(true);
        const response =  await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        console.log(products);
        setProducts(products);
        setLoading(false);
      }
    }

    getProducts();
    return () => {
    };
  }, [categoryId]);
  console.log(categoryId);
  return (
    <div className='item-view'>
      {loading? <Loading />: <Products products={products} />}
    </div>
  )
}

export default ItemView
