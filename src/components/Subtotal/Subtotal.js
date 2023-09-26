import React from 'react'
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css'
import {useStateValue} from './../StateProvider/StateProvider'
import { getBasketTotal } from '../../reducer';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    // let totalPrice = 0

    // //calculate total price for each item in the cart
    // basket.forEach(bk => {
    //     totalPrice+=bk.price
    // });

  return (
    <div className="subtotal">
        <CurrencyFormat 
            renderText={(value) =>(
                <>
                    <p>
                        Subtotal ({basket.length} items):
                        <strong>{value}</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" />
                        This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeperator={true}
            prefix={"$"}
        />

        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal