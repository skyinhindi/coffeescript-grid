import React, {useState, useEffect}from 'react'
import {Route, Routes, useParams} from 'react-router-dom';
import UserProfile from './UserProfile';
import ProductView from '../containers/ProductView';
import '../styles/view.css'
import Sidebar from './Sidebar'
import '../styles/sidebar.css'
import MainView from './MainView'
// import ProductView from './ProductView';

const View = () => {
  const [selected, setSelected] = useState('/');
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);

  return (
      <div className="view">
        <Sidebar selected={selected} setSelected={setSelected} />
        <Routes>
          <Route path='/*' element={ <MainView setSelected={setSelected} searchTerm={searchTerm} setSearchTerm={setSearchTerm} setCartItems={setCartItems} cartItems={cartItems} /> } />
          <Route path='/user/:userId' element={ <UserProfile cartItems={cartItems} setCartItems={setCartItems} selected={selected} setSelected={setSelected}/> } />
          <Route path='product/:productId' element={<ProductView setCartItems={setCartItems} cartItems={cartItems} />} />

        </Routes>
    </div>
  )
}

export default View
