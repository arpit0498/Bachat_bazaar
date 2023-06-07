
import React from 'react'
import { useContext } from "react";
import { AddressContext } from '../../../contexts/AddressContext'
import { Link, useNavigate } from "react-router-dom";
import { useProduct } from "../../../contexts/product-context"

export const CheckoutCard = () => {
  const { checkoutAddress } = useContext(AddressContext);
  const { state, cart, dispatch } = useProduct();


  return (
    <div>CheckoutCard

      <h3>DELIVER TO</h3>
      <hr />
      <div className="checkout-flex-column">
        <div className="checkout-flex-column start">
          <div className="address">
            {/* {checkoutAddress} */}
            {checkoutAddress}
          </div>
        </div>
        <Link to="/order-successful" >  <button
          className="add-btn checkout"
          onClick={() => {

            console.log("order-summary")
            // navigate("/ordersummary");

          }}
        >
          Place order
        </button></Link>

      </div>
    </div>


  )
}

export default CheckoutCard


