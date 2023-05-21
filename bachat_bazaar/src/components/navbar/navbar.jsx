import React from "react"
import { Link } from "react-router-dom"
import "./navbar.css"

export function Navbar() {

    return (
        <nav >
            <Link to="/">
                <div >
                    <span className="app-name">Bachat Bazaar</span>
                </div>
            </Link>

            <div className="nav-link">
                <Link to="/"><button >Home</button></Link>
                <Link to=""><button >Categories</button></Link>
                <Link to=""><button >About us</button></Link>
            </div>

            <div >
                <input type="text" placeholder="Search" />
            </div>

            <div >
                <div >
                    <Link to="/profile" >

                    </Link>

                </div>
                <div >
                    <Link to="/signin" >
                    </Link>
                    <span >Account</span>
                </div>


                <div >
                    <div >
                        <Link to="/wishlist"></Link>

                    </div>
                    <span >Wishlist</span>
                </div>

                <div >
                    <div >
                        <Link to="/cart"></Link>
                    </div>
                    <span>Cart</span>
                </div>
            </div>

        </nav>
    )
}