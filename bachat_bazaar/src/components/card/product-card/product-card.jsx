import axios from "axios";
import { Link } from "react-router-dom";
import { useProduct } from "../../../contexts/product-context";
import { toast } from "react-hot-toast";

const ProductCard = ({ productDetails }) => {
    const { cart, wishlist, dispatch } = useProduct()
    const encodedToken = localStorage.getItem("token");
    const { _id, img, title, inStock, rating, price, productDesc } = productDetails;

    const addToCart = async (productDetails) => {
        try {
            const response = await axios.post(
                "/api/user/cart",
                { product: productDetails },
                {
                    headers: {
                        authorization: encodedToken
                    }
                })
            dispatch({ type: "CHANGE_CART", payload: response.data.cart })
            toast.success(`Add to cart successfully!`);
        } catch (error) {
            console.error(error)
        }
    }
    const addToWishlist = async (productDetails) => {
        try {
            const response = await axios.post(
                "/api/user/wishlist",
                { product: productDetails },
                {
                    headers: {
                        authorization: encodedToken
                    },
                })
            dispatch({ type: "CHANGE_WISHLIST", payload: response.data.wishlist })
            toast.success(`Add to wishlist successfully!`);
        }
        catch (error) {
            console.error(error);
        }
    }

    const removeFromWishlist = async (_id) => {
        try {
            const response = await axios.delete(
                `/api/user/wishlist/${_id}`,
                {
                    headers: {
                        authorization: encodedToken
                    }
                }
            )
            toast.success(`removed from wishlist successfully!`);
            dispatch({ type: "CHANGE_WISHLIST", payload: response.data.wishlist })

        }

        catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="card card-vertical-container2 product-card">
            <img src={img} alt={title} className="card-img" />
            <div className="p1 card-text-container">
                <div className="card-heading flex-r">
                    <div>
                        <h5 className="card-header">{title}</h5>
                        <div className="rating-badge align-center">
                            {rating}<i className="rating-badge-star fa-solid fa-star"></i> | 5
                        </div>
                        <div className="card-info">{inStock ? "Stock available" : "Stock Unavailable"}</div>
                    </div>
                    <p className="card-price m-left-auto">Rs. {price}</p>
                </div>
                <h6>{productDesc}</h6>
                <div className="card-btns align-center">
                    {cart.find((cartItem) => cartItem._id === productDetails._id)
                        ? <button className="btn btn-with-icon">
                            <i className="p1-right fas fa-shopping-cart"></i>
                            Already in cart
                        </button>
                        : localStorage.token ?
                            <button onClick={() => addToCart(productDetails)} className="btn btn-with-icon">
                                <i className="p1-right fas fa-shopping-cart"></i>

                                Add to cart
                            </button> :
                            <Link to="/signin">
                                <button onClick={() => addToCart(productDetails)} className="btn btn-with-icon">
                                    <i className="p1-right fas fa-shopping-cart"></i>
                                    Add to cart
                                </button>
                            </Link>

                    }

                    {wishlist.find((wishlistItem) => wishlistItem.id === productDetails.id) ?
                        <button
                            style={{ color: "red" }}
                            onClick={() => removeFromWishlist(_id)}
                            className="wishlist-btn-clicked btn btn-icon1 card-icon-btn m-left-auto">
                            <i className="fa-solid fa-heart"></i></button>
                        :
                        <button
                            onClick={() => addToWishlist(productDetails)}
                            className="wishlist-btn-color btn btn-icon1 card-icon-btn m-left-auto">
                            <i className="fa-solid fa-heart"></i></button>
                    }

                </div>
            </div>
        </div>
    )
}

export { ProductCard }