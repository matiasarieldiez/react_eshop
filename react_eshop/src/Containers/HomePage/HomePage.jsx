import React from "react";
import ProductList from "../ProductList/ProductList";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import Header from "../../Components/Header/Header";

function HomePage() {
    return (
        <>
            <Header />
            <ProductList />
            <ProductCarousel />
        </>
    );
}

export default HomePage;
