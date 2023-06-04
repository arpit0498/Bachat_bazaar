import "./cart.css"
import { CartCard } from "../../components/card/cart-card/cart-card"
import { useProduct } from "../../contexts/product-context";
import { PriceSection } from "./sub-components/price-section";



const Cart = () => {

    const { cart } = useProduct();
    console.log(cart.length)

    return (
        <>
            <h4 className="cart-text">My Cart</h4>
            <h5 className="cart-text">{cart.length === 0 ? `Your cart is Empty!` : `Items: ${cart.length}`}</h5>


            <main className="cart-card">
                <ul className="cart-card-section">
                    {cart.map((cartItem) => <div><CartCard key={cartItem._id} cartItem={cartItem} />Item {cartItem.length}</div>)}
                </ul>
                <PriceSection className="cart-priceSection" />
            </main>

        </>
    )
}

export { Cart }