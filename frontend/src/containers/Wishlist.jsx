import React, {useEffect, useState} from 'react';
import WishlistItem from '../components/WishlistItem';
import '../styles/wishlist.css';

const Wishlist = ({cartItems, setCartItems}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    return () => {
      const items = JSON.parse(localStorage.getItem('cartItems'));
      if(items !== null) {
      console.log(items);
      setProducts(items);
    }
    };
  }, [])
  console.log(products);
  return products.length === 0?
    <div className="empty-cart">Your cart is empty <br/> Explore more items!</div> : 
    <div className='wishlist'>
      <div className="wishlist-items">
      {products.map(product => <WishlistItem product={product} setProducts={setProducts}/>)}
      </div>
    </div>  
}

export default Wishlist


// (
//   <div className='wishlist'>
//   {products.length === 0 ? <div className="empty-cart">Your cart is empty <br/> Explore more items!
//   </div> : 
//     <div className="wishlist-items">
//       {products.map(product => <WishlistItem product={product} />)}
//     </div> }
//   </div>
// );