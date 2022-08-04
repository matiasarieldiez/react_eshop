import React from "react";
import { NavLink } from "react-router-dom";

const data = [
    {
        id: 1,
        title: "t-shirt",
    },
    {
        id: 2,
        title: "Hoodie",
    },
    {
        id: 3,
        title: "Shorts",
    },
];

function ProductCard() {
    // We'll make this Dynamic
    let productId = data[2].id;

    return <NavLink to={`/products/${productId}`}>More Info</NavLink>;
}

export default ProductCard;
