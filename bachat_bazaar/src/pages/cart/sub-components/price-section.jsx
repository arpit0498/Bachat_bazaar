import { useEffect, useState } from "react"
import { useProduct } from "../../../contexts/product-context"
import { Link } from "react-router-dom"

const PriceSection = () => {
    const { cart } = useProduct()
    const [priceObj, setPriceObj] = useState({ totalPrice: 0, dicountedPrice: 0 })
    useEffect(() => {
        setPriceObj(
            cart.reduce((acc, curr) => (
                {
                    ...acc,
                    totalPrice: acc.totalPrice + curr.price * curr.qty,
                    dicountedPrice: acc.totalPrice + curr.price * curr.qty
                }
            ), { totalPrice: 0, dicountedPrice: 0 }))
    }, [cart])

    const discount = 0.35 * priceObj.totalPrice;
    const finalAmount = priceObj.totalPrice - discount;
    return (
        <section className="cart-price-section">
            {/* <h6>Coupons</h6>
            <div className="coupon-input input-container">
                <input className="input-icon-field input-field" type="text" placeholder="Apply Coupon" />
                <i className="input-icon fas fa-tag"></i>
            </div> */}

            <div className="price-details">
                <h6>Price Details:</h6>
                <div className="price-breakup">
                    <div>Total MRP</div>
                    <div>₹{priceObj.totalPrice}</div>
                </div>
                {/* <div className="price-breakup">
                    <div>Discount on MRP</div>
                    <div>₹{priceObj.totalPrice - priceObj.dicountedPrice}</div>
                </div> */}
                {/* <div className="price-breakup">
                    <div>Coupon Discount</div>
                    <div>₹0</div>
                </div> */}
                <div className="price-breakup">
                    <div>Convenience Fee</div>
                    <div>FREE</div>
                </div>
                <div className="price-breakup">
                    <div>Discount (35% on MRP)</div>
                    <div>-₹{`${discount.toFixed(2)}`}</div>
                </div>
            </div>
            <div className="price-breakup">
                <h6>Total Amount</h6>
                <div>₹{`${finalAmount.toFixed(2)}`}</div>
                {/* <h6>{priceObj.dicountedPrice}</h6> */}
            </div>
            <Link to="/order-successful"><button className="btn-order btn btn-primary">Place Order</button></Link>
        </section>
    )
}

export { PriceSection }