import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';



function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkout_left">
            <img className='checkout_ad' 
            src="https://libertyhousenh.org/wp-content/uploads/2020/10/Amazon-smile-web-banner.jpg" 
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