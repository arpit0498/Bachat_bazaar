import "./cart.css"
import { CartCard } from "../../components/card/cart-card/cart-card"
import { useProduct } from "../../contexts/product-context";
import { PriceSection } from "./sub-components/price-section";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart } = useProduct();

    console.log(cart.length)

    return (
        <>
            <h4 className="cart-text">My Cart</h4>

            <h5 className="cart-text">
                {cart.length === 0 ? (
                    <div className="text-center">
                        <h1>Whoops! Your cart is empty.</h1>
                        <div style={{ color: "white" }} >
                            <Link to="/product" >
                                Explore the store.
                            </Link>
                        </div>
                    </div>
                ) : <main className="cart-card">
                    {`Items: ${cart.length}`}
                    <ul className="cart-card-section">
                        {cart.map((cartItem) => <div><CartCard key={cartItem._id} cartItem={cartItem} /> {cartItem.length}</div>)}
                    </ul>
                    <PriceSection className="cart-priceSection" />
                </main>
                }

            </h5>






        </>
    )
}

export { Cart }