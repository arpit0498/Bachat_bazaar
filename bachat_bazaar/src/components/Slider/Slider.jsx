import "./Slider.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
    "https://m.media-amazon.com/images/G/31/img23/Sports/June/Yogaday/Sports_store/Yoga-day_Blue-3000x770._SX3000_QL85_.jpg",
    "https://m.media-amazon.com/images/G/31/img23/Sports/March/Sports_Store/Header/2/Under-499_Header-design_3000x770._SX3000_QL85_.jpg",
    "https://m.media-amazon.com/images/G/31/img23/Sports/March/Sports_Store/Header/1/Final/Customers-most-loved-Header-design_3000x7701._CB590250337_.gif",
];

export function Slider() {
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setSelectedImage((selectedImage) =>
                selectedImage < 2 ? selectedImage + 1 : 0
            );
        }, 4000);
    }, []);

    return (
        <div className="slider-container">
            <Link to="/store">
                <img src={slides[selectedImage]} alt={`banner${selectedImage + 1}`} />
            </Link>
        </div>
    );
}

// export default Slider;