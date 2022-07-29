import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartStroke } from '@fortawesome/free-regular-svg-icons';
import { useMoralis } from 'react-moralis';
import { useNavigate } from 'react-router-dom';
import handleBuy from '../Handlers/handleBuy';
import Loading from './Loading';

const ProductItem = ({product, cartItems, setCartItems}) => {
  const {id, title, description, image} = product;
  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState(false);
  const [inCart, setInCart] = useState(false);
  const navigate = useNavigate();

  const isCartItem = () => {
    for(var i=0 ;i <cartItems.length; i++){
      if(cartItems[i].id === id) {
        return true;
      }
    }
      
    return false; 
  }

  useEffect(() => {;
    if(isCartItem()) {
      console.log(`${id} is a cart item`);
      setInCart(true);
    } 
  }, []) 

  const handleCart = () => {
    console.log('addong to cart'); 
  
    var newCartItems = cartItems;
  
    console.log(newCartItems);
    newCartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    setCartItems(newCartItems);
   }

   const removeItemFromCart = () => {
    console.log('removing from cart');
    var newCartItems = cartItems;
    newCartItems = cartItems.filter(item => item.id != id);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    setCartItems(newCartItems);
   }


  return (
    <div
      className='wishlist-item-product' 
      onMouseEnter={() => { setHover(true); }}
      onMouseLeave={() => { setHover(false); }}
    >
      <div className="wishlist-item-image-container">
          <img className='wishlist-item-image' src={image} alt={`${id}`} />
      </div>
      <div className="wishlist-item-details">
        <div className="wishlist-item-name">{title}</div>
        <div className="wishlist-item-price">0.01 ETH</div>
        <div className="bottom-row">
        <button onClick={() => { navigate(`/product/${id}`); }} className='buy-btn'>
          <span className='btn-text'>VIEW</span>
        </button>
        <FontAwesomeIcon className="addToCart" color={!inCart? 'black': 'red'} 
        icon={!inCart? faHeartStroke : faHeart} size="2xl"
         onClick={() => { if(!inCart) { handleCart(); setInCart(true);} else { removeItemFromCart(product); setInCart(false); } }}/>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
