import "./product.css"
import { FilterSidebar } from "./sub-components/filterSidebar"
import { ProductListing } from "./sub-components/productListing"
import { useDocumentTitle } from "../../custom-hooks/useDocumentTitle"

const ProductPage = () => {
    useDocumentTitle("Products")
    return (
        <>
            <div className="product-page">
                <FilterSidebar />
                <ProductListing />
            </div>
        </>
    )
}

export { ProductPage }