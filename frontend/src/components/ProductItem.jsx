import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartStroke } from '@fortawesome/free-regular-svg-icons';
import { useMoralis } from 'react-moralis';
import { useNavigate } from 'react-router-dom';
import handleBuy from '../Handlers/handleBuy';
import Loading from './Loading';

const ProductItem = ({product}) => {
  const {id, title, description, image} = product;
  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const isCartItem = () => {
    for(var i=0 ;i <cartItems.length; i++){
      if(cartItems[i].id === id)
        return true;
    }
      
    return false; 
  }

  useEffect(() => {
    return () => {
      var cartItems = JSON.parse(localStorage.getItem('cartItems'));
      if(cartItems)
        setCartItems(cartItems);
    };
  }, [])

  useEffect(() => {
    return () => {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };
  }, [cartItems])


  const handleCart = () => {
    var newCartItems = cartItems;
    for(var i=0; i<cartItems.length; i++) {
      if(newCartItems[i].id === product.id)
        return;
    }

    newCartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    setCartItems(newCartItems);
   }

   const removeItemFromCart = () => {
    var cartItems = JSON.parse(localStorage.getItem('cartItems'));
    cartItems = cartItems.filter(item => item.id != id);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
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
        <FontAwesomeIcon className="addToCart" color={!isCartItem()? 'black': 'red'} 
        icon={!isCartItem()? faHeartStroke : faHeart} size="2xl"
         onClick={() => { if(!isCartItem()) { handleCart(); } else { removeItemFromCart(product); } }}/>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
