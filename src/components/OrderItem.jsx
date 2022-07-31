import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TransferModal from './TransferModal';

const OrderItem = ({order}) => {
  const {TokenId, WarrantyAddress, Date, Price, Title} = order;
  
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className='order-item' 
    >
      <TransferModal tokenId={TokenId} setShowModal={setShowModal} showModal={showModal} />
      <div className="wishlist-item-image-container">
          <img className='wishlist-item-image' src={'image'} alt={`${TokenId}`} />
      </div>
      <div className="wishlist-item-details">
        <div className="wishlist-item-name">{Title}</div>
        <div className="wishlist-item-price">0.01 ETH</div>
        <div className="bottom-row">
        <a href={WarrantyAddress} target="_blank" className='view-nft'>
          <span className='btn-text'>VIEW NFT</span>
        </a>
        <a onClick={() => { setShowModal(true); }} className="transfer-ownship">Transfer Ownership</a>
        </div>
      </div>
    </div>
  )
}

export default OrderItem
