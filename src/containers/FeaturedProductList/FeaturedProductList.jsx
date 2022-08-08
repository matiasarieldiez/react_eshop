import Styles from "./FeaturedProductList.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";

const FeaturedProductList = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        const wrapper = async () => {
            const featuredProducts = await getProducts();
            setFeaturedProducts(
                featuredProducts.filter((product) => product.featured === true),
            );
        };

        wrapper();
    }, []);

    return (
        <section className={Styles.Grid}>
            {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    );
};

export default FeaturedProductList;
