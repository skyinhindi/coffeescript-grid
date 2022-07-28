import React from 'react'
import handleBuy from '../Handlers/handleBuy';

const WishlistItem = ({product}) => {
  const {id, title, description, image} = product;
  console.log(product);
  return (
    <div className='wishlist-item'>
      <div className="wishlist-item-image-container">
          <img className='wishlist-item-image' src={image} alt={`${id}`} />
      </div>
      <div className="wishlist-item-details">
        <div className="wishlist-item-name">{title}</div>
        <div className="wishlist-item-price">0.01 ETH</div>
        <button onClick={() => { handleBuy(id, title, user, contractProcessor) }} className='buy-btn'>BUY</button>
      </div>
    </div>
  )
}

export default WishlistItem
