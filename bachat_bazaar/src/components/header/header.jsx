import React from "react"
import "./header.css"
import { Link } from "react-router-dom"

export function Header() {
    return (
        <main className="main">
            <div className="main-text">
                <h1 className="main-heading">Get Yourself best deal at home</h1>
                <h4>Flat 20% off</h4>
                <Link to="/product"><button >Shop Now</button></Link>
            </div>
        </main>
    )
}