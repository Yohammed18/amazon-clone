import React from 'react'
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css'
import {useStateValue} from './../StateProvider/StateProvider'

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    let totalPrice = 0

    //calculate total price for each item in the cart
    basket.forEach(bk => {
        totalPrice+=bk.price
    });

    console.log('Total Price',totalPrice)
  return (
    <div className="subtotal">
        <CurrencyFormat 
            renderText={(value) =>(
                <>
                <p>
                    Subtotal ({basket?.length} items):
                    <strong>{totalPrice}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox" />
                    This order contains a gift
                </small>
                </>
            )}
            decimal={2}
            value={0}
            displayType={"text"}
            thousandSeperator={true}
            prefix={"£"}
        />

        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal