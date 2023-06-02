import React from "react"
import "./header.css"
import { Link } from "react-router-dom"

export function Header() {
    return (
        <main className="main">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/Coop/JuneSVD/HPC_SVD_1500x300.png" alt="none" />

            <Link to="/product"><buttonc className="header-btn center btn-primary"   >Shop Now</buttonc></Link>
        </main>
    )
}