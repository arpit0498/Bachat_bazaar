import React from "react"
import "./header.css"
import { Link } from "react-router-dom"

export function Header() {
    return (
        <main className="main">

            <Link to="/product"><button >Shop Now</button></Link>
        </main>
    )
}