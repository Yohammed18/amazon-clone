import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import {useStateValue} from './../StateProvider/StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';


function Checkout() {
const [{basket}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className="checkout_left">
            <img className='checkout_ad' 
            src="https://m.media-amazon.com/images/I/61Et7ebvT9L._SX3000_.jpg" 
            alt="" />

        <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {basket.map(bk =>(
                <CheckoutProduct
                id={bk.id}
                image={bk.image}
                title={bk.title}
                price={bk.price}
                rating={bk.rating}
                />    
            ))}
        </div>
        </div>
        <div className="checkout_right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout