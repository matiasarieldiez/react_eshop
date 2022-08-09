import Styles from "./FeaturedProductList.module.scss";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";

const FeaturedProductList = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loadingFeaturedProducts, setLoadingFeaturedProducts] =
        useState(true);
    const [currentFeaturedProduct, setCurrentFeaturedProduct] = useState(0);
    const length = featuredProducts.length;

    const nextFeaturedProduct = () => {
        setCurrentFeaturedProduct(
            currentFeaturedProduct === length - 1
                ? 0
                : currentFeaturedProduct + 1,
        );
    };

    const previousFeaturedProduct = () => {
        setCurrentFeaturedProduct(
            currentFeaturedProduct === 0
                ? length - 1
                : currentFeaturedProduct - 1,
        );
    };

    useEffect(() => {
        const wrapper = async () => {
            const featuredProducts = await getProducts();
            setFeaturedProducts(
                featuredProducts.filter((product) => product.featured === true),
            );
            setLoadingFeaturedProducts(false);
        };

        wrapper();
    }, []);

    return (
        <section className={Styles.Grid}>
            {loadingFeaturedProducts ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <FaArrowAltCircleLeft
                        className={Styles.LeftArrow}
                        onClick={previousFeaturedProduct}
                    />
                    {featuredProducts.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            index={index}
                            currentFeaturedProduct={currentFeaturedProduct}
                        />
                    ))}
                    <FaArrowAltCircleRight
                        className={Styles.RightArrow}
                        onClick={nextFeaturedProduct}
                    />
                </>
            )}
        </section>
    );
};

export default FeaturedProductList;
