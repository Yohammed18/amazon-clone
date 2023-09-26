import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from './../StateProvider/StateProvider'


function CheckoutProduct({id, image, title, price, rating}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket =()=>{
        //Remove item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id, //the id will be able to help us remove the item
            
        })
    }

  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct_image' src={image}
        />
        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">
                {title}
            </p>
            <p className="checkoutProduct_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct_rating">
                {Array(rating)
                .fill()
                .map((_, i) =>(
                <p key={i}>⭐</p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove From Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct