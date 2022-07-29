import React, {useEffect, useState} from 'react';
import WishlistItem from '../components/WishlistItem';
import '../styles/wishlist.css';

const Wishlist = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
      const items = JSON.parse(localStorage.getItem('cartItems'));
      if(items !== null) {
      console.log(items);
      setProducts(items);
    return () => {
    }
    };
  }, [])
  console.log(products);
  return products.length === 0?
    <div className="empty-cart">Your cart is empty <br/> Explore more items!</div> : 
    <div className='wishlist'>
      <div className="wishlist-items">
      {products.map(product => <WishlistItem key={product.id} product={product} setProducts={setProducts}/>)}
      </div>
    </div>  
}

export default Wishlist;