import "./product.css"

import { ProductListing } from "./sub-components/productListing"

const ProductPage = () => {
    return (
        <>
            <div>
                product page
                <ProductListing />
            </div>
        </>
    )
}

export { ProductPage }