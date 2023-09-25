import React from 'react'
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css'
import {useStateValue} from './../StateProvider/StateProvider'

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();


  return (
    <div className="subtotal">
        <CurrencyFormat 
            renderText={(value) =>(
                <>
                <p>
                    Subtotal ({basket?.length} items):{/*part of homework*/}
                    <strong>0</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox" />
                    This order contains a gift
                </small>
                </>
            )}
            decimal={2}
            value={0} //part of homework
            displayType={"text"}
            thousandSeperator={true}
            prefix={"£"}
        />

        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal