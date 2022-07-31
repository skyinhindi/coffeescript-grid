import React, {useEffect, useState} from 'react';
import Loading from '../components/Loading';
import WishlistItem from '../components/WishlistItem';
import '../styles/wishlist.css';

const Wishlist = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
      setLoading(true);
      const items = JSON.parse(localStorage.getItem('cartItems'));
      if(items !== null) {
      console.log(items);
      setProducts(items);
      setLoading(false);
    return () => {
    }
    };
  }, [])
  console.log(products);

  if(loading)
    return <Loading />
  else 
    return products.length === 0?
      <div className="empty-cart">Your cart is empty <br/> Explore more items!</div> : 
        <div className='wishlist'>
          <div className="wishlist-items">
          {products.map(product => <WishlistItem key={product.id} product={product} setProducts={setProducts}/>)}
          </div>
      </div>  
}

export default Wishlist;