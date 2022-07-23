import React from 'react'
import '../styles/BuyBtn.css';

function BuyBtn() {
  return (
    <div className='buy-btn-container'>
        <div>
            <button id='buy-btn-button'>
                <span id="buy-btn-text"> BUY </span>
            </button>
        </div>
    </div>
  )
}

export default BuyBtn