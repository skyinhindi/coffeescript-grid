import React, {useState} from 'react'
import { useMoralis } from 'react-moralis';
import handleBuy from '../Handlers/handleBuy';
import Loading from './Loading';

const WishlistItem = ({product, setProducts}) => {
  const {id, title, description, image} = product;
  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState(false);

  const { user } = useMoralis();
  console.log(product);

  const mintNft = () => {
    setLoading(true);
    handleBuy(id, title, user);
    setLoading(false);
  }

  const removeWishlistItem = (id) => {
    var cartItems = JSON.parse(localStorage.getItem('cartItems'));
    cartItems = cartItems.filter(item =>  item.id != id);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setProducts(cartItems);
  }

  return (
    <div
      className='wishlist-item' 
      onMouseEnter={() => { setHover(true); }}
      onMouseLeave={() => { setHover(false); }}
    >
      <span onClick={() => { removeWishlistItem(id) }}  className={hover?'remove-wishlist-item': 'remove-wishlist-item-ns'}>X</span> 
      <div className="wishlist-item-image-container">
          <img className='wishlist-item-image' src={image} alt={`${id}`} />
      </div>
      <div className="wishlist-item-details">
        <div className="wishlist-item-name">{title}</div>
        <div className="wishlist-item-price">0.01 ETH</div>
        <button onClick={mintNft} className='buy-btn'>
          {loading ? <Loading color="white" /> : <span className='btn-text'>BUY</span>}
        </button>
      </div>
    </div>
  )
}

export default WishlistItem
