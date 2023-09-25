import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';



function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkout_left">
            <img className='checkout_ad' 
            src="https://m.media-amazon.com/images/I/61Et7ebvT9L._SX3000_.jpg" 
            alt="" />
            <div>
                <h2 className="checkout_title">
                    Your Shopping Basket
                </h2>
                {/**BasketItem */}
                {/**BasketItem */}
                {/**BasketItem */}
                {/**BasketItem */}
            </div>
        </div>

        <div className="checkout_right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout