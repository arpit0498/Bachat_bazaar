
const ProductCard = ({ productDetails }) => {


    const { _id, img, title, inStock, rating, price, productDescription } = productDetails;

    return (
        <>
            <h1> product Card</h1>

            <div className="card wrapper">
                <img src={img} alt={title} className="card-img" />
                <div className="card">
                    <div className="card-heading ">
                        <div>
                            <h5 >{title}</h5>
                            <div >
                                {rating}<i className=" fa-solid fa-star"></i> | 5
                            </div>
                            <div className="card-info">{inStock ? "Stock available" : "Stock Unavailable"}</div>
                        </div>
                        <p >Rs. {price}</p>
                    </div>
                    <h6>{productDescription}</h6>

                </div>
            </div>




        </>

    )
}

export { ProductCard }