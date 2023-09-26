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
            {/* {basket.map(bk =>(
                <CheckoutProduct
                id={bk.id}
                image={bk.image}
                title={bk.title}
                price={bk.price}
                rating={bk.rating}
                />    
            ))} */}
                <CheckoutProduct
                id='130123'
                image="https://m.media-amazon.com/images/I/81tWOXksBiL._AC_UX395_.jpg"
                title='Nike Shoes'
                price={120.29}
                rating={5}
                />
                <CheckoutProduct
                id='130123'
                image="https://m.media-amazon.com/images/I/81Xjk5hKTNL._AC_UL320_.jpg"
                title='Nike Shoes'
                price={120.29}
                rating={5}
                />
        </div>
        </div>
        <div className="checkout_right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout