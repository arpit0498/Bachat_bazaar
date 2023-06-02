import React from "react"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useProduct } from "../../../contexts/product-context"
import "./feature-card.css"

export function FeatureCard({ img, category }) {
    const { dispatch } = useProduct()
    useEffect(() => {
        dispatch({ type: "CLEAR_ALL_FILTERS" })
    }, [category])

    return (
        <div >
            <div className="card-feature">
                <img className="featured-img" src={img} alt="Category" />
            </div>
            <h6 className="featured-heading">{category}</h6>
            <Link to="/product"><buttonc onClick={() => dispatch({ type: "SORT_BY_CATEGORY", payload: category })} className="btn btn-primary center btn-featured">Shop Now</buttonc></Link>
        </div>
    )
}