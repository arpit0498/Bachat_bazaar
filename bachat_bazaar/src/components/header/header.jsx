import React from "react"
import "./header.css"
import { Link } from "react-router-dom"
import { Slider } from "../Slider/Slider"

export function Header() {
    return (
        <main className="main">
            <Slider />

            <Link to="/product"><div className="header-btn center btn-primary"   >  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/Coop/JuneSVD/HPC_SVD_1500x300.png" alt="none" /></div></Link>


            <Link to="/product"><div className="header-btn center btn-primary"   >Shop Now</div></Link>
        </main>
    )
}