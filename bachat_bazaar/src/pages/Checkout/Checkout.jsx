import React, { useContext } from "react";
import "./components/Checkout.css";
import CheckoutCard from "./components/CheckoutCard";
import CheckoutAddress from "./components/CheckoutAddress";
import { AddressContext } from "../../contexts/AddressContext.jsx";

export const Checkout = () => {
    const { address, defaultAddress } = useContext(AddressContext);

    console.log("address", defaultAddress)
    return (
        <div className="checkout-body">
            <h2>Checkout</h2>
            <div className="main-checkout-body">
                <div className="show-checkout-container">
                    <div className="address-flex">

                        {address?.map((add) => (
                            <div className="checkout-address-container">
                                <CheckoutAddress add={add} />
                            </div>

                        ))}
                    </div>
                    <CheckoutCard />
                </div>
            </div>
        </div>
    );
};

export default Checkout;