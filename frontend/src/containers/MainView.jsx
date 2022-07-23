import React, {useState, useEffect} from 'react'
import {Routes, Route, useParams} from 'react-router-dom'
import ItemView from './ItemView';
import UserProfile from './UserProfile';
import SearchBar from '../components/SearchBar';
import ProductView from './ProductView';


const MainView = () => {
  // const params = useParams();
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [products, setProducts] = useState([]);
  // async function getProducts(categoryId) {
  //   console.log(categoryId);

  //   if(categoryId) {
  //     setLoading(true);
  //     const response = await fetch(`https://fakestoreapi.com/products/category/${categoryId}`);
  //     const products = await response.json();
  //     console.log(products);
  //     setProducts(products);
  //     setLoading(false);
  //   }
  //   else {
  //     setLoading(true);
  //     const response =  await fetch('https://fakestoreapi.com/products');
  //     const products = await response.json();
  //     console.log(products);
  //     setProducts(products);
  //     setLoading(false);
  //   }
  // }
  // useEffect(() => {
  //   const category = params.substring(params.indexOf('/') + 1);

  //   return () => {
  //     console.log(category);
  //     getProducts(category);
  //   };
  // }, [params])

  return (
    <div className='view-child'>
          <SearchBar />
          <Routes>
            <Route path='/' element={<ItemView />} />
            <Route path='category/:categoryId' element={<ItemView />} />
            <Route path='product/:productId' element={<ProductView />} />
          </Routes>
    </div>
  )
}

export default MainView
